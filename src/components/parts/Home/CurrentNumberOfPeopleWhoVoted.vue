<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          投票者数（速報値・DM除く）
        </p>
        <div v-if="false">
          <v-layout justify-center>
            <img :src="spinnerAnimeUrl" />
          </v-layout>
        </div>
        <div v-else>
          <div class="headline text--primary font-weight-bold">
            {{ yourTweetRecords['number_of_people_who_voted'] }} 人
          </div>

          <VoteStatusChart
            :your-tweet-records-per-hour-votes="
              yourTweetRecords['number_of_per_hour_votes']
            "
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'
import VoteStatusChart from '@/components/parts/Home/VoteStatusChart'
import numberOfVotes from '@/static/numberOfVotes.json'

export default {
  components: {
    VoteStatusChart,
  },
  data: function() {
    return {
      valid: true,
      screenName: '',
      yourTweetRecords: numberOfVotes,
      showLoadingAnime: true,
      isShown: false,
      // Strictry, ("'@' + screen_name" <= 16)
      screenNameRules: [v => v.length <= 16 || 'IDが長すぎます'],
      spinnerAnimeUrl: this.$store.state.spinnerAnimeUrl,
    }
  },
  // beforeCreate() {
  //   this.showLoadingAnime = true
  //   this.isShown = true

  //   const apiUri = process.env.VUE_APP_CHECK_YOUR_VOTE_API
  //   axios
  //     .get(apiUri, {
  //       params: {
  //         screen_name: 'sample',
  //       },
  //     })
  //     .then(response => (this.yourTweetRecords = response.data))
  //     .then(() => (this.showLoadingAnime = false))
  // },
}
</script>
<style scoped></style>

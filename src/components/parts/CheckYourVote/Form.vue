<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-form v-model="valid" @submit.prevent>
          <v-text-field
            v-model="screenName"
            :rules="screenNameRules"
            placeholder="例: gensosenkyo"
            required
          ></v-text-field>
        </v-form>
        <v-btn
          :to="{
            name: 'check-your-vote',
            params: { screen_name: this.screenName },
          }"
          color="#00BFFF"
          @click="checkYourVote"
          @keydown.space="checkYourVote"
          :disabled="!valid || this.screenName.length === 0"
          >投票チェック</v-btn
        >
      </v-col>
    </v-row>
    <YourVoteStatus
      :your-tweet-records="yourTweetRecords"
      :show-loading-anime="showLoadingAnime"
      :is-shown="isShown"
      :screen-name="screenName"
    />
  </div>
</template>

<script>
import axios from 'axios'
import YourVoteStatus from '@/components/parts/CheckYourVote/YourVoteStatus'

export default {
  components: {
    YourVoteStatus,
  },
  data: function () {
    return {
      valid: true,
      screenName: '',
      yourTweetRecords: {},
      showLoadingAnime: false,
      isShown: false,
      // Strictly, ("'@' + screen_name" <= 16)
      screenNameRules: [(v) => v.length <= 16 || 'IDが長すぎます'],
    }
  },
  methods: {
    checkYourVote() {
      this.showLoadingAnime = true
      this.isShown = true

      const apiUri = process.env.VUE_APP_CHECK_YOUR_VOTE_API
      axios
        .get(apiUri, {
          params: {
            screen_name: this.screenName,
            env: process.env.VUE_APP_DEPLOY_ENVIRONMENT,
          },
        })
        .then((response) => (this.yourTweetRecords = response.data))
        .then(() => (this.showLoadingAnime = false))
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

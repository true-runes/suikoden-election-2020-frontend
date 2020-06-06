<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">TwitterのID</p>
        <p>
          @はなくてもあってもいい（例 @gensosenkyo の場合は gensosenkyo
          でもよい）
        </p>
      </v-col>
      <v-col cols="6">
        <v-form>
          <v-text-field
            v-model="screenName"
            :rules="screenNameValidation"
            label="TwitterのID (例: gensosenkyo)"
            required
          ></v-text-field>
        </v-form>
        <router-link
          :to="{
            name: 'check-your-vote-with-screen-name',
            params: { screen_name: this.screenName },
          }"
        >
          <v-btn color="primary" @click="checkYourVote">投票チェック</v-btn>
        </router-link>
        <span>ぱらむす: {{ $route.params.screen_name }}</span>
        <div>
          <YourVoteStatus :status="yourVoteStatus" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
// FIXME: Use an alias
import YourVoteStatus from '@/components/parts/CheckYourVote/YourVoteStatus'

export default {
  components: {
    YourVoteStatus,
  },
  data: () => ({
    yourVoteStatus: null,
    showLoadingAnime: true,
    screenName: '',
    // ユーザー名の長さは15文字までです。 名前は50文字までですが、ユーザー名は使いやすいように短くなっています。 ユーザー名には英数字（文字A～Z、数字0～9）しか含めることはできません。
    screenNameValidation: [v => v.length <= 16 || 'IDが長すぎます'],
  }),
  methods: {
    checkYourVote() {
      const apiUri = 'https://yesno.wtf/api'
      // const apiUri = process.env.VUE_APP_CHECK_YOUR_VOTE_API

      // TODO: params or routing (/:screen_name)
      axios
        .get(apiUri, {
          params: {
            screen_name: this.screenName,
          },
        })
        .then(response => (this.yourVoteStatus = response.data))
        .then(() => (this.showLoadingAnime = false))
    },
  },
}
</script>

<style scoped></style>

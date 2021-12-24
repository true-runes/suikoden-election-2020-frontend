<template>
  <div v-show="isShown">
    <v-row>
      <v-col cols="12">
        <div v-if="showLoadingAnime">
          <v-layout justify-center>
            <img :src="spinnerAnimeUrl" />
          </v-layout>
        </div>
        <div v-else>
          <NoticeForYourStatus
            :your-tweet-records="yourTweetRecords"
            :screen-name="screenName"
          ></NoticeForYourStatus>
          <Tweets
            :your-tweet-id-numbers="yourTweetIdNumbers(yourTweetRecords)"
            :show-loading-anime="showLoadingAnime"
            :screen-name="screenName"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Tweets from '@/components/parts/CheckYourVote/Tweets'
import NoticeForYourStatus from '@/components/parts/CheckYourVote/NoticeForYourStatus'

export default {
  components: {
    Tweets,
    NoticeForYourStatus,
  },
  data: function () {
    return {
      spinnerAnimeUrl: this.$store.state.spinnerAnimeUrl,
    }
  },
  props: {
    yourTweetRecords: {
      type: Object,
      default: () => {},
      required: false,
    },
    showLoadingAnime: {
      type: Boolean,
      default: false,
      required: true,
    },
    isShown: {
      type: Boolean,
      default: false,
      required: true,
    },
    screenName: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    // TODO: Add more validations (The same tweet id number, tweet_public? === false ...)
    yourTweetIdNumbers: (yourTweetRecords) => {
      // tweet_id, user_name, user_screen_name, tweet_full_text, tweet_retweet?, tweet_url, tweet_media_exists?, tweet_public?, tweeted_at
      if (Object.keys(yourTweetRecords).length === 0) {
        return []
      }

      // A returned object contains the key 'results' as top level
      return yourTweetRecords['results'].map((record) => record[5])
    },
  },
}
</script>

<style scoped></style>

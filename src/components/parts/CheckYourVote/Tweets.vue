<template>
  <div v-show="yourTweetIdNumbers.length > 0">
    <v-row>
      <v-col cols="12">
        <div id="tweets">
          <p class="headline text--primary font-weight-bold">ツイート一覧</p>
          <div
            v-for="yourTweetIdNumber in yourTweetIdNumbers"
            :key="yourTweetIdNumber"
          >
            <!-- If not using 'String' cast, 'Warning' occurs in DevTools -->
            <Tweet
              :id="String(yourTweetIdNumber)"
              error-message="※削除された、または非公開ツイートがあります"
            >
              <div class="spinner-for-waiting">
                <img :src="spinnerAnimeUrl" />
              </div>
            </Tweet>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'tweets',
  components: {
    Tweet,
  },
  data: function() {
    return {
      spinnerAnimeUrl: this.$store.state.spinnerAnimeUrl,
    }
  },
  props: {
    yourTweetIdNumbers: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style scoped></style>

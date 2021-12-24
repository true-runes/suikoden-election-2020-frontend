<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div id="notice-for-your-vote-status">
          <p class="headline text--primary font-weight-bold">チェック結果</p>

          <div v-if="Object.keys(yourTweetRecords).length === 0">
            <!-- {} -->
          </div>
          <div v-else-if="yourTweetRecords['results'].flat().length === 0">
            <NoticeMessageForNoResult
              :screen-name="screenName"
            ></NoticeMessageForNoResult>
          </div>
          <div v-else>
            <NoticeMessageForResults
              :screen-name="screenName"
              :your-tweet-records="yourTweetRecords"
            ></NoticeMessageForResults>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NoticeMessageForNoResult from '@/components/parts/CheckYourVote/NoticeMessageForNoResult'
import NoticeMessageForResults from '@/components/parts/CheckYourVote/NoticeMessageForResults'

export default {
  name: 'notice-for-your-vote-status',
  components: {
    NoticeMessageForNoResult,
    NoticeMessageForResults,
  },
  computed: {
    comcom: function () {
      return this.screenName
    },
  },
  props: {
    yourTweetRecords: {
      type: Object,
      default: () => {},
      required: true,
    },
    screenName: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style scoped></style>

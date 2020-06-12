<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div>
          <v-alert type="info">
            {{ `@${constantScreenName}` }} さんのツイートが見つかりました
          </v-alert>
          <v-alert type="info">
            削除されたツイートがチェック結果に含まれている場合、下記の「ツイート一覧」には「削除されたツイートがあります」と表示されます
          </v-alert>
        </div>
        <v-alert
          color="primary"
          dark
          icon="mdi-information-outline"
          border="left"
        >
          <ul>
            <li>
              投票期間は以下のとおりです
              <ul>
                <li>
                  2020/06/12（金）21:00 〜 2020/06/14（日）12:00
                </li>
              </ul>
            </li>
            <li>
              <span class="important-notice">
                DM による投票はこのページでチェックすることはできません
              </span>
              <ul>
                <li>
                  主催からお送りする投票受付確認の DM をお待ち下さい
                </li>
              </ul>
            </li>
            <li>
              持ち票はお一人様 3票 です
            </li>
            <li>
              ツイートを削除したりアカウントに鍵を付けたりした場合には、チェック結果へ反映されない場合があります
            </li>
            <li>
              投票のやり直しなど、同内容と思われる投票ツイートがあった際には、集計が重複しないように主催側で対応させて頂きます
            </li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'notice-message-for-results',
  data: function() {
    return {
      constantScreenName: this.normalizeScreenName(this.screenName),
    }
  },
  props: {
    screenName: {
      type: String,
      default: '',
      required: true,
    },
    yourTweetRecords: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    numberOfYourTweets: yourTweetRecords => {
      return yourTweetRecords['results'].length
    },
    normalizeScreenName: screenName => {
      // screenName が不正な値だったら？（replaceメソッドを持たない、Strではなかったら？）
      const normalizedScreenName = screenName.replace(/@/g, '')
      return normalizedScreenName
    },
  },
}
</script>
<style scoped>
.important-notice {
  color: tomato;
  font-weight: bold;
}
</style>

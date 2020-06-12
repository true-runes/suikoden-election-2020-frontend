<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div>
          <v-alert type="warning">
            {{ `@${constantScreenName}` }}
            さんのツイートが見つかりませんでした。以下の点をご確認下さい。
          </v-alert>
        </div>

        <div>
          <v-alert
            color="#A9A9A9"
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
                ツイートを削除したり、アカウントに鍵を付けたりした場合には、結果へ反映されない場合があります
              </li>
              <li>
                ツイートが見つからなかった場合は集計に反映されない可能性があります
                <ul>
                  <li>
                    時間をおいて再度チェックし、それでも見つからない場合は主催アカウント
                    <a
                      href="https://twitter.com/gensosenkyo"
                      class="information-notice"
                      target="_blank"
                      >@gensosenkyo</a
                    >
                    に DM でご連絡ください
                  </li>
                </ul>
              </li>
            </ul>
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'notice-message-for-no-result',
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
  },
  methods: {
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
  color: crimson;
  font-weight: bold;
}

.information-notice {
  color: #008bbb;
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          開票イラスト応募状況
        </p>

        <div v-if="false">
          <v-layout justify-center>
            <img :src="spinnerAnimeUrl" />
          </v-layout>
        </div>
        <div v-else>
          <p class="title text--primary font-weight-bold">総応募数</p>
          <ul class="no-list-dot">
            <li>{{ sumOfPostedIllustrations() }} 枚</li>
          </ul>

          <br />

          <p class="title text--primary font-weight-bold">総キャラ数</p>
          <ul class="no-list-dot">
            <li>{{ sumOfPostedIllustrationCharacters() }}</li>
          </ul>

          <br />

          <p class="title text--primary font-weight-bold">
            現在までに応募を頂いたキャラ
          </p>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th class="text-left subtitle-1 font-weight-bold">
                    キャラ名
                  </th>
                  <th class="text-left subtitle-1 font-weight-bold">応募数</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(
                    numberOfVote, characterName
                  ) in sortedPostedIllustrationsStatus(
                    this.postedIllustrationsStatus,
                  )"
                  :key="characterName"
                >
                  <td>？？？</td>
                  <td>
                    <div v-if="isEntryClosed(numberOfVote)">
                      <span
                        :class="{
                          'is-entry-closed': true,
                          'font-weight-bold': true,
                        }"
                        >{{ numberOfVoteWithNotion(numberOfVote) }}</span
                      >
                    </div>
                    <div v-else>{{ numberOfVoteWithNotion(numberOfVote) }}</div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <br />
        <v-divider></v-divider>
        <br />

        <p class="title text--primary font-weight-bold">募集概要</p>
        <ul>
          <li>
            <div class="important-notice">
              応募についての詳細は
              <a
                href="https://twitter.com/gensosenkyo/status/1256581551355133952"
                target="_blank"
                >こちらのツイート</a
              >
              をご覧ください
            </div>
          </li>
          <li>
            送付〆切は
            <span class="important-notice">6/6（土）23:59</span> です
          </li>
        </ul>

        <br />

        <p class="title text--primary font-weight-bold">募集詳細</p>
        <ul>
          <li>
            1キャラにつき4枚募集（添付画像が最大4枚の為）
            <ul>
              <li>4枠埋まった時点で募集終了となります</li>
            </ul>
          </li>
          <li>
            お一人様何枚でも応募頂くことができます（ただし、同じキャラには応募できません）
          </li>
          <li>
            応募前にご予約を頂ければ枠を確保いたします（一度に2キャラまで）
            <ul>
              <li>
                主催アカウント
                <a href="https://twitter.com/gensosenkyo" target="_blank"
                  >@gensosenkyo</a
                >
                宛にDMをお送りください
              </li>
            </ul>
          </li>
          <li>
            <div class="important-notice">
              イラストには Twitter の ID（例: @gensosenkyo）をご記入ください
            </div>
          </li>
          <li>
            開票イラストの特性上、応募したキャラがメインとなるようなイラストでお願いします
          </li>
          <li>
            「カラー or モノクロ」、「デジタル or アナログ」などは自由です
          </li>
        </ul>

        <br />

        <p class="title text--primary font-weight-bold">イラスト送付方法</p>
        <ul>
          <li>
            イラストは以下のいずれかの方法でご送付をお願いします
            <ul>
              <li>
                主催アカウント
                <a href="https://twitter.com/gensosenkyo" target="_blank"
                  >@gensosenkyo</a
                >
                宛にDMで送信
              </li>
              <li>
                Google フォーム で送信（フォームについての説明は
                <a
                  href="https://twitter.com/gensosenkyo/status/1256609585340669952"
                  target="_blank"
                  >こちらのツイート</a
                >
                をご覧ください）
              </li>
              <li>
                firestorage や Dropbox のような外部サービスを利用（URL
                を主催アカウント
                <a href="https://twitter.com/gensosenkyo" target="_blank"
                  >@gensosenkyo</a
                >
                宛にDMで送信してください）
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <p class="title text--primary font-weight-bold">
          よくあるご質問とその答え
        </p>
        <ul>
          <li>
            応募状況のページにないキャラを描いてもいいですか？
            <ul>
              <li>
                こちらのページの一覧はあくまで「現在応募頂いてるキャラ」の一覧ですので、お好きなキャラでご応募ください
              </li>
              <li>もし得票がなかった場合は、イラストは個別に掲載いたします</li>
              <li>
                「キャラ」と表現しておりますが、例えば「ししのはた」などのイラストも喜んで募集しております🦁
              </li>
            </ul>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'
import numberOfIllustrations from '@/static/numberOfIllustrations.json'

export default {
  data: function () {
    return {
      postedIllustrationsStatus: numberOfIllustrations,
      currentStatusInfo: [],
      showLoadingAnime: true,
      spinnerAnimeUrl: this.$store.state.spinnerAnimeUrl,
    }
  },
  methods: {
    sumOfPostedIllustrations: function () {
      return Object.values(this.postedIllustrationsStatus).reduce(
        (sum, element) => sum + element,
        0,
      )
    },
    sumOfPostedIllustrationCharacters: function () {
      return Object.keys(this.postedIllustrationsStatus).length
    },
    // TODO: リファクタリング
    isEntryClosed: function (numberOfVote) {
      if (numberOfVote >= 4) {
        return true
      } else {
        return false
      }
    },
    // TODO: リファクタリング
    numberOfVoteWithNotion: function (numberOfVote) {
      if (numberOfVote >= 4) {
        return `${numberOfVote}（終了）`
      } else {
        return numberOfVote
      }
    },
    sortedPostedIllustrationsStatus: function (postedIllustrationsStatus) {
      const chatacterNames = Object.keys(postedIllustrationsStatus)
      const entriesPostedIllustrationsStatus = Object.entries(
        postedIllustrationsStatus,
      )
      const sortedCharacterNames = chatacterNames.sort((x, y) =>
        x.localeCompare(y, 'ja'),
      )

      const sortedPostedIllustrationsStatus = {}
      sortedCharacterNames.forEach((character) => {
        entriesPostedIllustrationsStatus.forEach((entry) => {
          if (character === entry[0]) {
            sortedPostedIllustrationsStatus[character] = entry[1]
          }
        })
      })

      return sortedPostedIllustrationsStatus
    },
  },
  // beforeCreate() {
  //   axios
  //     .get(process.env.VUE_APP_POSTED_ILLUSTRATIONS_STATUS_API)
  //     .then(response => (this.postedIllustrationsStatus = response.data))
  //     .then(() => (this.showLoadingAnime = false))
  // },
}
</script>

<style scoped>
.is-entry-closed {
  color: red;
}

ul.no-list-dot {
  list-style: none;
}

.important-notice {
  color: red;
  font-weight: bold;
}
</style>

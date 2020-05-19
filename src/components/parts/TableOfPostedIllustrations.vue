<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          開票イラスト応募状況
        </p>

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
                主催アカウント (
                <a href="https://twitter.com/gensosenkyo" target="_blank"
                  >@gensosenkyo</a
                >) 宛にDMをお送り下さい
              </li>
            </ul>
          </li>
          <li>
            応募についての詳細は
            <a
              href="https://twitter.com/gensosenkyo/status/1256581551355133952"
              target="_blank"
              >こちらのツイート</a
            >をご覧ください。
          </li>
        </ul>

        <br />

        <div v-if="showLoadingAnime">
          <v-layout justify-center>
            <img src="../../assets/loading_spinner_anime.gif" />
          </v-layout>
        </div>
        <div v-else>
          <p class="headline text--primary font-weight-bold">応募状況</p>

          <p class="title text--primary font-weight-bold">総応募数</p>
          <ul class="no-list-dot">
            <li>{{ sumOfPostedIllustrations() }} 枚</li>
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
                  v-for="(numberOfVote,
                  characterName) in sortedPostedIllustrationsStatus(
                    this.postedIllustrationsStatus,
                  )"
                  :key="characterName"
                >
                  <td>{{ characterName }}</td>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postedIllustrationsStatus: null,
      currentStatusInfo: [],
      showLoadingAnime: true,
    }
  },
  methods: {
    sumOfPostedIllustrations: function() {
      return Object.values(this.postedIllustrationsStatus).reduce(
        (sum, element) => sum + element,
        0,
      )
    },
    // TODO: リファクタリング
    isEntryClosed: function(numberOfVote) {
      if (numberOfVote >= 4) {
        return true
      } else {
        return false
      }
    },
    // TODO: リファクタリング
    numberOfVoteWithNotion: function(numberOfVote) {
      if (numberOfVote >= 4) {
        return `${numberOfVote}（終了）`
      } else {
        return numberOfVote
      }
    },
    sortedPostedIllustrationsStatus: function(postedIllustrationsStatus) {
      const chatacterNames = Object.keys(postedIllustrationsStatus)
      const entriesPostedIllustrationsStatus = Object.entries(
        postedIllustrationsStatus,
      )
      const sortedCharacterNames = chatacterNames.sort((x, y) =>
        x.localeCompare(y, 'ja'),
      )

      const sortedPostedIllustrationsStatus = {}
      sortedCharacterNames.forEach(character => {
        entriesPostedIllustrationsStatus.forEach(entry => {
          if (character === entry[0]) {
            sortedPostedIllustrationsStatus[character] = entry[1]
          }
        })
      })

      return sortedPostedIllustrationsStatus
    },
  },
  beforeCreate() {
    axios
      .get(process.env.VUE_APP_POSTED_ILLUSTRATIONS_STATUS_API)
      .then(response => (this.postedIllustrationsStatus = response.data))
      .then(() => (this.showLoadingAnime = false))
  },
}
</script>

<style scoped>
.is-entry-closed {
  color: red;
}
ul.no-list-dot {
  list-style: none;
}
</style>

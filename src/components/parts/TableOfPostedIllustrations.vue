<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          開票イラスト応募状況
        </p>

        <ul>
          <li>1キャラにつき4枚募集（添付画像が最大4枚の為）</li>
          <li>4枠埋まった時点で募集終了となります</li>
          <li>
            応募前にご予約をすることが可能です（お一人様2キャラまで）
            <ul>
              <li>
                <a href="https://twitter.com/gensosenkyo" target="_blank"
                  >主催アカウント (@gensosenkyo)</a
                >
                宛にDMをお送り下さい
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <!-- <div> -->
        <!-- <v-btn depressed color="primary" class="mr-2">応募状況一覧</v-btn> -->
        <!-- <v-btn depressed color="primary">満了キャラ一覧</v-btn> -->
        <!-- </div> -->
        <!-- <br /> -->

        <div v-if="showLoadingAnime">
          <v-layout justify-center>
            <img src="../../assets/loading_spinner_anime.gif" />
          </v-layout>
        </div>
        <v-simple-table v-else>
          <template>
            <thead>
              <tr>
                <th class="text-left subtitle-1 font-weight-bold">キャラ名</th>
                <th class="text-left subtitle-1 font-weight-bold">応募数</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(numberOfVote,
                characterName) in sortedPostedIllustrationsStatus(
                  this.postedIllustrationsStatus
                )"
                :key="characterName"
              >
                <td>{{ characterName }}</td>
                <td>
                  <div v-if="isEntryClosed(numberOfVote)">
                    <span
                      :class="{
                        'is-entry-closed': true,
                        'font-weight-bold': true
                      }"
                    >
                      {{ numberOfVoteWithNotion(numberOfVote) }}
                    </span>
                  </div>
                  <div v-else>
                    {{ numberOfVoteWithNotion(numberOfVote) }}
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postedIllustrationsStatus: null,
      currentStatusInfo: [],
      showLoadingAnime: true
    };
  },
  methods: {
    // TODO: リファクタリング
    isEntryClosed: function(numberOfVote) {
      if (numberOfVote >= 4) {
        return true;
      } else {
        return false;
      }
    },
    // TODO: リファクタリング
    numberOfVoteWithNotion: function(numberOfVote) {
      if (numberOfVote >= 4) {
        return `${numberOfVote}（終了）`;
      } else {
        return numberOfVote;
      }
    },
    sortedPostedIllustrationsStatus: function(postedIllustrationsStatus) {
      const chatacterNames = Object.keys(postedIllustrationsStatus);
      const entriesPostedIllustrationsStatus = Object.entries(
        postedIllustrationsStatus
      );
      const sortedCharacterNames = chatacterNames.sort((x, y) =>
        x.localeCompare(y, "ja")
      );

      const sortedPostedIllustrationsStatus = {};
      sortedCharacterNames.forEach(character => {
        entriesPostedIllustrationsStatus.forEach(entry => {
          if (character === entry[0]) {
            sortedPostedIllustrationsStatus[character] = entry[1];
          }
        });
      });

      return sortedPostedIllustrationsStatus;
    }
  },
  beforeCreate() {
    axios
      .get(process.env.VUE_APP_POSTED_ILLUSTRATIONS_STATUS_API)
      .then(response => (this.postedIllustrationsStatus = response.data))
      .then(() => (this.showLoadingAnime = false));
  }
};
</script>

<style scoped>
.is-entry-closed {
  color: red;
}
</style>

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
        <div v-else>
          <p class="headline text--primary font-weight-bold">
            応募状況
          </p>

          <p class="title text--primary font-weight-bold">
            総応募数
          </p>
          <ul class="no-list-dot">
            <li>{{ sumOfPostedIllustrations() }} 枚</li>
          </ul>

          <br />

          <p class="title text--primary font-weight-bold">
            キャラ別応募数
          </p>

          <v-row>
            <v-col cols="12" sm="12" class="d-flex align-end flex-column">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="キャラ名検索"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="postedIllustrationsData()"
            hide-default-footer
            :items-per-page="500"
            :search="search"
          >
            <template v-slot:item.numberOfPosted="{ item }">
              <div v-if="isEntryClosed(item.numberOfPosted)">
                <span
                  :class="{
                    'is-entry-closed': true,
                    'font-weight-bold': true
                  }"
                >
                  {{ numberOfVoteWithNotion(item.numberOfPosted) }}
                </span>
              </div>
              <div v-else>
                {{ numberOfVoteWithNotion(item.numberOfPosted) }}
              </div>
            </template>
          </v-data-table>
        </div>
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
      showLoadingAnime: true,
      search: "",
      headers: [
        {
          text: "キャラ名",
          align: "start",
          sortable: false,
          value: "charaName",
          class: ["text-left", "subtitle-1", "font-weight-bold"]
        },
        {
          text: "応募数",
          value: "numberOfPosted",
          class: ["text-left", "subtitle-1", "font-weight-bold"],
          filterable: false
        }
      ]
    };
  },
  methods: {
    postedIllustrationsData: function() {
      const arrayFromObject = Object.entries(
        this.sortedPostedIllustrationsStatus(this.postedIllustrationsStatus)
      );
      const postedIllustrationsData = arrayFromObject.map(element => {
        return {
          charaName: element[0],
          numberOfPosted: element[1]
        };
      });

      return postedIllustrationsData;
    },
    sumOfPostedIllustrations: function() {
      return Object.values(this.postedIllustrationsStatus).reduce(
        (sum, element) => sum + element,
        0
      );
    },
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
ul.no-list-dot {
  list-style: none;
}
</style>

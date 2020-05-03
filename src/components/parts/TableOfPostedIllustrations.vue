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
        </ul>

        <br />

        <!-- <div> -->
        <!-- <v-btn depressed color="primary" class="mr-2">応募状況一覧</v-btn> -->
        <!-- <v-btn depressed color="primary">満了キャラ一覧</v-btn> -->
        <!-- </div> -->
        <!-- <br /> -->

        <div v-if="showLoadingAnime">
          <v-layout justify-center>
            <img src="../../assets/Preloader_8.gif" />
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
                characterName) in postedIllustrationsStatus"
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

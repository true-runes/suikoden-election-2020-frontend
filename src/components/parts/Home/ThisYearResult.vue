<template>
  <v-row>
    <v-col cols="12">
      <h1 class="mb-4">幻水総選挙 2020 結果</h1>
      <h2>投票人数</h2>
      <h3 class="mb-4">1994 人（ツイート 1772 人、DM 222 人）</h3>
      <h2>投票数</h2>
      <h3 class="mb-4">5970 票（ツイート 5304 票、DM 666 票）</h3>

      <h2>順位</h2>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="キャラ名検索"
        single-line
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="rankingData"
        :search="search"
        locale="ja"
        mobile-breakpoint="0"
        :footer-props="{ itemsPerPageOptions: [50, -1] }"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import voteResult2020 from '@/static/voteResult2020.json'

export default {
  data() {
    return {
      search: '',
      headers: this.$store.state.voteRankingHeaders2020,
      rankingData: [],
    }
  },
  // TODO: 順番に依存してしまっている
  created: function() {
    this.rankingData = voteResult2020

    this.rankingData.forEach(rankRecord => {
      rankRecord['percentageOfVote'] = this.calculatePercentage(
        (rankRecord['numberOfVote'] / 5970) * 100,
      )
    })
  },
  methods: {
    calculatePercentage: function(number) {
      // 小数点第二位まで
      return Math.floor(number * Math.pow(10, 2)) / Math.pow(10, 2)
    },
  },
}
</script>

<style scoped></style>

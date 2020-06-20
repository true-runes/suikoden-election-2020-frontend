<template>
  <v-row>
    <v-col cols="12">
      <h1 class="mb-4">{{ yearOfThisTab }}年の総選挙結果</h1>
      <h2>投票人数</h2>
      <h3 class="mb-4">{{ numberOfPeopleWhoVotedByYear(yearOfThisTab) }} 人</h3>
      <h2>投票数</h2>
      <h3 class="mb-4">{{ numberOfVoteByYear(yearOfThisTab) }} 票</h3>

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
import voteResult2019 from '@/static/voteResult2019.json'
import voteResult2018 from '@/static/voteResult2018.json'
import voteResult2017 from '@/static/voteResult2017.json'
import voteResult2016 from '@/static/voteResult2016.json'

export default {
  props: {
    yearDescription: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      search: '',
      headers: this.$store.state.voteRankingHeaders,
      rankingData: [],
      tab: null,
      items: ['year-2019', 'year-2018', 'year-2017', 'year-2016'],
      yearOfThisTab: '',
    }
  },
  // TODO: 順番に依存してしまっている
  created: function() {
    this.yearOfThisTab = this.yearNumberFromYearDescription(
      this.yearDescription,
    )

    // TODO: リファクタリング
    if (this.yearOfThisTab === '2019') {
      this.rankingData = voteResult2019
    }
    if (this.yearOfThisTab === '2018') {
      this.rankingData = voteResult2018
    }
    if (this.yearOfThisTab === '2017') {
      this.rankingData = voteResult2017
    }
    if (this.yearOfThisTab === '2016') {
      this.rankingData = voteResult2016
    }

    this.rankingData.forEach(rankRecord => {
      rankRecord['percentageOfVote'] = this.calculatePercentage(
        (rankRecord['numberOfVote'] / 5642) * 100,
      )
    })
  },
  methods: {
    yearNumberFromYearDescription: function(yearDescription) {
      return `${yearDescription.replace(/year-/, '')}`
    },
    calculatePercentage: function(number) {
      // 小数点第二位まで
      return Math.floor(number * Math.pow(10, 2)) / Math.pow(10, 2)
    },
    // TODO: リファクタリング
    numberOfPeopleWhoVotedByYear: function(year) {
      if (year === '2019') {
        return 1907
      }
      if (year === '2018') {
        return 1572
      }
      if (year === '2017') {
        return 1607
      }
      if (year === '2016') {
        return '（未計測）'
      }
    },
    // TODO: リファクタリング
    numberOfVoteByYear: function(year) {
      if (year === '2019') {
        return 5642
      }
      if (year === '2018') {
        return 4675
      }
      if (year === '2017') {
        return 4739
      }
      if (year === '2016') {
        return 6759
      }
    },
  },
}
</script>

<style scoped></style>

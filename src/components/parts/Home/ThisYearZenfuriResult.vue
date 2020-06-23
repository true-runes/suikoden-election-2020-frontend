<template>
  <v-row>
    <v-col cols="12">
      <h1 class="mb-4">幻水総選挙 2020 全振り結果</h1>
      <p>
        ※「全振り」とは、持ち票の3票全部を同一キャラに投票することです
      </p>
      <p>
        ※「列名」をタップするとその列でソートできます
      </p>
      <h2>全振り投票人数</h2>
      <h3 class="mb-4">916 人（全投票人数の約46%）</h3>
      <h2>全振り投票数</h2>
      <h3 class="mb-4">2,748 票（全投票数の約46%）</h3>

      <h2>順位</h2>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="キャラ名検索"
        single-line
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="zenfuriData"
        :search="search"
        locale="ja"
        mobile-breakpoint="0"
        :items-per-page="-1"
        :footer-props="{ itemsPerPageOptions: [-1] }"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import zenfuri2020 from '@/static/zenfuri2020.json'

export default {
  data() {
    return {
      search: '',
      headers: this.$store.state.zenfuriRankingHeaders2020,
      zenfuriData: [],
    }
  },
  // TODO: 順番に依存してしまっている
  created: function() {
    this.zenfuriData = zenfuri2020
  },
  methods: {
    calculatePercentage: function(number) {
      // 小数点第二位まで（ただし、 0 は消えるのでパディングすべき）
      return Math.floor(number * Math.pow(10, 2)) / Math.pow(10, 2)
    },
  },
}
</script>

<style scoped></style>

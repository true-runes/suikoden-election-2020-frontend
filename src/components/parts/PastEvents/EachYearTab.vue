<template>
  <div>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item">
          {{ yearNumberFromItemName(item) }}年
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-container>
            <v-row>
              <EachYearDetail :year-description="item" />
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import EachYearDetail from '@/components/parts/PastEvents/EachYearDetail'

export default {
  components: {
    EachYearDetail,
  },
  data() {
    return {
      tab: null,
      // TODO: あまりよい命名ではない
      items: ['year-2019', 'year-2018', 'year-2017', 'year-2016'],
    }
  },
  methods: {
    // TODO: よい命名ではないから正規表現を使わざるを得なくなっている
    yearNumberFromItemName: function(itemName) {
      return `${itemName.replace(/year-/, '')}`
    },
  },
}
</script>

<style scoped></style>

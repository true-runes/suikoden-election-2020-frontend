<template>
  <div>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item">
          {{ itemNameToJapaneseName(item) }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-container>
            <v-row>
              <div v-if="item == 'vote-result'">
                <ThisYearVoteResult />
              </div>
              <div v-else-if="item == 'zenfuri-result'">
                <ThisYearZenfuriResult />
              </div>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import ThisYearVoteResult from '@/components/parts/Home/ThisYearVoteResult'
import ThisYearZenfuriResult from '@/components/parts/Home/ThisYearZenfuriResult'

export default {
  components: {
    ThisYearVoteResult,
    ThisYearZenfuriResult,
  },
  data() {
    return {
      tab: null,
      items: ['vote-result', 'zenfuri-result'],
    }
  },
  methods: {
    // TODO: リファクタリング
    itemNameToJapaneseName: function (itemName) {
      if (itemName === 'vote-result') {
        return '幻水総選挙 2020 結果'
      }
      if (itemName === 'zenfuri-result') {
        return '幻水総選挙 2020 全振り結果'
      }
    },
  },
}
</script>

<style scoped></style>

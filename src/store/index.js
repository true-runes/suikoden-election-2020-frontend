import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spinnerAnimeUrl: require('@/assets/loading_spinner_anime.gif'),
    voteRankingHeaders: [
      {
        text: '順位',
        align: 'start',
        value: 'rank',
      },
      { text: 'キャラ名', value: 'characterName' },
      { text: '票数', value: 'numberOfVote' },
      { text: '得票率 (%)', value: 'percentageOfVote' },
    ],
    voteRankingHeaders2020: [
      {
        text: '順位',
        align: 'start',
        value: 'rank',
      },
      { text: 'キャラ名', value: 'characterName' },
      { text: 'キャラ名（英語）', value: 'characterNameEn' },
      { text: '票数', value: 'numberOfVote' },
      { text: '得票率 (%)', value: 'percentageOfVote' },
    ],
    zenfuriRankingHeaders2020: [
      {
        text: '順位',
        align: 'start',
        value: 'rank',
      },
      { text: 'キャラ名', value: 'characterName' },
      { text: '全振り者数', value: 'numberOfZenfuriVoters' },
      { text: '全振り票数', value: 'numberOfZenfuriVotes' },
      { text: '全振り者・票率', value: 'percentageByAllZenfuri' },
    ],
  },
  mutations: {},
  getters: {},
  actions: {},
})

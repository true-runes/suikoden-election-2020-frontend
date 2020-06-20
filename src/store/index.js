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
  },
  mutations: {},
  getters: {},
  actions: {},
})

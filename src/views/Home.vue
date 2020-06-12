<template>
  <div>
    <v-container>
      <LinkToHowToVote />
      <Countdown />
      <CurrentNumberOfPeopleWhoVoted />
      <VotingTerm />
      <ShowResultDate />
      <!-- <AboutIllustrationsCountingOfVotes /> -->
      <SiteAttentions />
      <NoteForThisEvent />
    </v-container>
  </div>
</template>

<script>
import Countdown from '@/components/parts/Home/Countdown'
import VotingTerm from '@/components/parts/Home/VotingTerm'
import ShowResultDate from '@/components/parts/Home/ShowResultDate'
import NoteForThisEvent from '@/components/parts/Home/NoteForThisEvent'
import SiteAttentions from '@/components/parts/Home/SiteAttentions'
import CurrentNumberOfPeopleWhoVoted from '@/components/parts/Home/CurrentNumberOfPeopleWhoVoted'
import LinkToHowToVote from '@/components/parts/Home/LinkToHowToVote'
// import AboutIllustrationsCountingOfVotes from '@/components/parts/Home/AboutIllustrationsCountingOfVotes'

export default {
  components: {
    Countdown,
    VotingTerm,
    ShowResultDate,
    NoteForThisEvent,
    SiteAttentions,
    CurrentNumberOfPeopleWhoVoted,
    LinkToHowToVote,
    // AboutIllustrationsCountingOfVotes,
  },
  mounted: () => {
    document.title = 'ホーム - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

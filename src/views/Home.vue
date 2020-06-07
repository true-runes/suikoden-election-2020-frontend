<template>
  <div>
    <v-container>
      <Countdown />
      <SiteAttentions />
      <VotingTerm />
      <ShowResultDate />
      <EnabledVotingCountNumber />
      <HowToVote />
      <VotingExample />
      <NoteForVoting />
      <AboutIllustrationsCountingOfVotes />
      <NoteForThisEvent />
    </v-container>
  </div>
</template>

<script>
import Countdown from '@/components/parts/Home/Countdown'
import VotingTerm from '@/components/parts/Home/VotingTerm'
import ShowResultDate from '@/components/parts/Home/ShowResultDate'
import EnabledVotingCountNumber from '@/components/parts/Home/EnabledVotingCountNumber'
import HowToVote from '@/components/parts/Home/HowToVote'
import NoteForVoting from '@/components/parts/Home/NoteForVoting'
import NoteForThisEvent from '@/components/parts/Home/NoteForThisEvent'
import VotingExample from '@/components/parts/Home/VotingExample'
import AboutIllustrationsCountingOfVotes from '@/components/parts/Home/AboutIllustrationsCountingOfVotes'
import SiteAttentions from '@/components/parts/Home/SiteAttentions'

export default {
  components: {
    Countdown,
    VotingTerm,
    ShowResultDate,
    EnabledVotingCountNumber,
    HowToVote,
    VotingExample,
    NoteForVoting,
    NoteForThisEvent,
    AboutIllustrationsCountingOfVotes,
    SiteAttentions,
  },
  mounted: () => {
    document.title = 'ホーム - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

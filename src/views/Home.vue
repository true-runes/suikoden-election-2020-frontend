<template>
  <div>
    <SiteAttentions />
    <VotingTerm />
    <ShowResultDate />
    <EnabledVotingCountNumber />
    <HowToVote />
    <VotingExample />
    <NoteForVoting />
    <AboutIllustrationsCountingOfVotes />
    <NoteForThisEvent />
  </div>
</template>

<script>
import VotingTerm from "../components/parts/VotingTerm";
import ShowResultDate from "../components/parts/ShowResultDate";
import EnabledVotingCountNumber from "../components/parts/EnabledVotingCountNumber";
import HowToVote from "../components/parts/HowToVote";
import NoteForVoting from "../components/parts/NoteForVoting";
import NoteForThisEvent from "../components/parts/NoteForThisEvent";
import VotingExample from "../components/parts/VotingExample";
import AboutIllustrationsCountingOfVotes from "../components/parts/AboutIllustrationsCountingOfVotes";
import SiteAttentions from "../components/parts/SiteAttentions";

export default {
  name: "Home",
  components: {
    VotingTerm,
    ShowResultDate,
    EnabledVotingCountNumber,
    HowToVote,
    VotingExample,
    NoteForVoting,
    NoteForThisEvent,
    AboutIllustrationsCountingOfVotes,
    SiteAttentions
  }
};
</script>

<style scoped></style>

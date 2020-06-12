<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="headline text--primary font-weight-bold">
            投票方法について
          </p>
        </v-col>
      </v-row>

      <VotingTerm />
      <ShowResultDate />
      <EnabledVotingCountNumber />
      <HowToVote />
      <VotingExample />
      <NoteForVoting />
    </v-container>
  </div>
</template>

<script>
import VotingExample from '@/components/parts/HowToVote/VotingExample'
import EnabledVotingCountNumber from '@/components/parts/HowToVote/EnabledVotingCountNumber'
import HowToVote from '@/components/parts/HowToVote/HowToVote'
import NoteForVoting from '@/components/parts/HowToVote/NoteForVoting'
import VotingTerm from '@/components/parts/Home/VotingTerm'
import ShowResultDate from '@/components/parts/Home/ShowResultDate'

export default {
  components: {
    VotingExample,
    EnabledVotingCountNumber,
    HowToVote,
    NoteForVoting,
    VotingTerm,
    ShowResultDate,
  },
  mounted: () => {
    document.title = '投票方法 - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

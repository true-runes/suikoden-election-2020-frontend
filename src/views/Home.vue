<template>
  <div>
    <v-container>
      <GuideForHashtags />
      <ThisYearResult />
      <!-- <CurrentNumberOfPeopleWhoVoted /> -->
      <NoteForThisEvent />
    </v-container>
  </div>
</template>

<script>
import NoteForThisEvent from '@/components/parts/Home/NoteForThisEvent'
// import CurrentNumberOfPeopleWhoVoted from '@/components/parts/Home/CurrentNumberOfPeopleWhoVoted'
import ThisYearResult from '@/components/parts/Home/ThisYearResult'
import GuideForHashtags from '@/components/parts/Home/GuideForHashtags'

export default {
  components: {
    NoteForThisEvent,
    // CurrentNumberOfPeopleWhoVoted,
    ThisYearResult,
    GuideForHashtags,
  },
  mounted: () => {
    document.title = 'ホーム - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

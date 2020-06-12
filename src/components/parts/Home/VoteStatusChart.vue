<template>
  <div>
    <v-row>
      <v-col cols="6">
        <per-hour-votes-chart :per-hour-votes="yourTweetRecordsPerHourVotes" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PerHourVotesChart from '@/components/parts/Home/Charts/PerHourVotes.vue'

export default {
  components: {
    PerHourVotesChart,
  },
  props: {
    yourTweetRecordsPerHourVotes: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
}
</script>

<style scoped></style>

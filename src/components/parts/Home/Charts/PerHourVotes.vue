<script>
import { Bar } from 'vue-chartjs'

export default {
  // mixins: [Bar]
  extends: Bar,
  name: 'per-hour-votes-chart',
  mounted: function() {
    this.renderChart(this.data, this.options)
  },
  props: {
    perHourVotes: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  methods: {
    perThreeHoursVotes: function() {
      const lengthOfPerHourVotesArray = this.perHourVotes.length
      const numberOfElementsForSummarize = 3
      const perThreeHoursVotes = []

      for (
        let i = 0;
        i < Math.ceil(lengthOfPerHourVotesArray / numberOfElementsForSummarize);
        i++
      ) {
        let startIndex = i * numberOfElementsForSummarize
        let slicedArray = this.perHourVotes.slice(
          startIndex,
          startIndex + numberOfElementsForSummarize,
        )

        let summerizedSlicedArray = 0
        slicedArray.forEach(function(element) {
          summerizedSlicedArray += element
        })

        perThreeHoursVotes.push(summerizedSlicedArray)
      }

      return perThreeHoursVotes
    },
  },
  data() {
    return {
      data: {
        labels: [
          '6/12 21:00',
          '6/13 00:00',
          '6/13 03:00',
          '6/13 06:00',
          '6/13 09:00',
          '6/13 12:00',
          '6/13 15:00',
          '6/13 18:00',
          '6/13 21:00',
          '6/14 00:00',
          '6/14 03:00',
          '6/14 06:00',
          '6/14 09:00',
        ],
        datasets: [
          {
            label: '3時間ごとの投票者数（人）',
            data: this.perThreeHoursVotes(),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '3時間ごとの日時',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10,
              },
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div v-if="durationDatetime['currentEventStep'] === 'before_voting'">
          <div class="headline text--primary font-weight-bold">
            <VueCountdown :time="durationDatetime['votingStartAt']">
              <template v-slot:default="props">
                <p>投票開始まで</p>
                <p>
                  {{ props.days }} 日 と {{ props.hours }} 時間
                  {{ props.minutes }} 分 {{ props.seconds }} 秒
                </p>
              </template>
            </VueCountdown>
          </div>
        </div>
        <div
          v-else-if="durationDatetime['currentEventStep'] === 'under_voting'"
        >
          <div class="headline text--primary font-weight-bold">
            <VueCountdown :time="durationDatetime['votingEndAt']">
              <template v-slot:default="props">
                <p>投票終了まで</p>
                <p>
                  {{ props.days }} 日 と {{ props.hours }} 時間
                  {{ props.minutes }} 分 {{ props.seconds }} 秒
                </p>
              </template>
            </VueCountdown>
          </div>
        </div>
        <div v-if="durationDatetime['currentEventStep'] === 'before_counting'">
          <div class="headline text--primary font-weight-bold">
            <VueCountdown :time="durationDatetime['coutningStartAt']">
              <template v-slot:default="props">
                <p>開票まで</p>
                <p>
                  {{ props.days }} 日 と {{ props.hours }} 時間
                  {{ props.minutes }} 分 {{ props.seconds }} 秒
                </p>
              </template>
            </VueCountdown>
          </div>
        </div>
        <div v-if="durationDatetime['currentEventStep'] === 'after_counting'">
          <div v-show="false"></div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  components: {
    VueCountdown,
  },
  data: function () {
    return {
      durationDatetime: this.setDurationDatetime(),
    }
  },
  methods: {
    setDurationDatetime() {
      const durationDatetime = {}

      const currentDatetime = dayjs()
      const votingStartAt = dayjs('2020-06-12').hour(21)
      const votingEndAt = dayjs('2020-06-14').hour(12)
      const coutningStartAt = dayjs('2020-06-20').hour(18)

      durationDatetime['votingStartAt'] = votingStartAt.diff(currentDatetime)
      durationDatetime['votingEndAt'] = votingEndAt.diff(currentDatetime)
      durationDatetime['coutningStartAt'] =
        coutningStartAt.diff(currentDatetime)

      if (durationDatetime['votingStartAt'] > 0) {
        durationDatetime['currentEventStep'] = 'before_voting'
      } else if (
        durationDatetime['votingEndAt'] > 0 &&
        durationDatetime['votingStartAt'] < 0
      ) {
        durationDatetime['currentEventStep'] = 'under_voting'
      } else if (
        durationDatetime['coutningStartAt'] > 0 &&
        durationDatetime['votingEndAt'] < 0
      ) {
        durationDatetime['currentEventStep'] = 'before_counting'
      } else if (durationDatetime['coutningStartAt'] < 0) {
        durationDatetime['currentEventStep'] = 'after_counting'
      } else {
        durationDatetime['currentEventStep'] = 'unknown'
      }

      return durationDatetime
    },
  },
}
</script>

<style scoped></style>

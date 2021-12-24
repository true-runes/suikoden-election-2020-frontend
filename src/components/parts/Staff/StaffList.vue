<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          スタッフ（五十音順）
        </p>

        <div v-for="staffName in staffNames" :key="staffName.id">
          <v-card color="#000000" class="mb-4" dark>
            <v-card-title>{{ staffName }}</v-card-title>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      staffNames: [
        'キネコ',
        'さいり',
        'たっきー',
        '田中',
        '松本',
        'もふ',
        '若dnt子',
      ],
    }
  },
}
</script>

<style scoped></style>

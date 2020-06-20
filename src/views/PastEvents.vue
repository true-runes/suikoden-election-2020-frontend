<template>
  <div>
    <v-container>
      <EachYearTab />
    </v-container>
  </div>
</template>

<script>
import EachYearTab from '@/components/parts/PastEvents/EachYearTab'

export default {
  components: {
    EachYearTab,
  },
  mounted: () => {
    document.title = '過去の選挙結果 - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

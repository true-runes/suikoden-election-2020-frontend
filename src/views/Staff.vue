<template>
  <div>
    <v-container>
      <StaffList />
    </v-container>
  </div>
</template>

<script>
import StaffList from '@/components/parts/Staff/StaffList'

export default {
  components: {
    StaffList,
  },
  mounted: () => {
    document.title = 'スタッフ - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

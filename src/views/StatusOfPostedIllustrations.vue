<template>
  <div>
    <TableOfPostedIllustrations />
  </div>
</template>

<script>
import TableOfPostedIllustrations from '@/components/parts/StatusOfPostedIllustrations/TableOfPostedIllustrations'

export default {
  components: {
    TableOfPostedIllustrations,
  },
  mounted: () => {
    document.title = '開票イラストについて - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

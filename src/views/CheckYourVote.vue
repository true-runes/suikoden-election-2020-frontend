<template>
  <div>
    <Description />
    <Status />
  </div>
</template>

<script>
import Description from '@/components/parts/CheckYourVote/Description'
import Status from '@/components/parts/CheckYourVote/Status'

export default {
  components: {
    Description,
    Status,
  },
  mounted: () => {
    document.title = '投票チェック - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

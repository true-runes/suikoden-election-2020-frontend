<template>
  <div>
    <v-container>
      <Description />
      <Form />
    </v-container>
  </div>
</template>

<script>
import Description from '@/components/parts/CheckYourVote/Description'
import Form from '@/components/parts/CheckYourVote/Form'

export default {
  components: {
    Description,
    Form,
  },
  mounted: () => {
    document.title = '投票チェック - 幻水総選挙 2020'
  },
}
</script>

<style scoped></style>

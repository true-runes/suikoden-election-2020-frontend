<template>
  <div>
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
}
</script>

<style scoped></style>

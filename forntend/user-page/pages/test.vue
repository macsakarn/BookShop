<template></template>

<script>
export default {
  async mounted() {
    const headers = {
      Authorization: this.$auth.strategy.token.get('local'),
    }
    const book = await this.$axios.get('/user/protected', {}, headers)
    console.log(book)
  },
}
</script>

<style></style>

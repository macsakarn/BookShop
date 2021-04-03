<template>
  <div class="">
    this is admin/id : {{ this.pathId }}
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const pathId = params.id; // When calling /abc the slug will be "abc"
    return {
      pathId,
      message: "hello",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
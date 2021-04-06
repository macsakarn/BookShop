<template>
  <section>
    <!-- <adminNav :isLogin="false" /> -->

    {{addStatus.massage}}
 
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    const addStatus = await $axios.$get(`http://localhost:3000/admin/addBook`);
    console.log(addStatus)
    return { addStatus };
  },
};
</script>

<style>
</style>
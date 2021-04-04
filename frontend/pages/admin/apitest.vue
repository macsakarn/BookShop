<template>
  <section>
    <!-- <adminNav :isLogin="false" /> -->
    <li v-for="(mountain, index) in mountains" :key="index.id">
      {{ mountain.title }}
    </li>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    const mountains = await $axios.$get(`/mountains`);
    return { mountains };
  },
};
</script>

<style>
</style>
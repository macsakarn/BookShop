<template>
  <div>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <ul v-else>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink to="/">
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
    <button @click="$fetch">Refresh Data</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mountains: [],
    };
  },
  mounted() {
    setInterval(() => {
      this.$fetch();
    }, 60000);
  },

  async fetch() {
    this.mountains = await this.$axios.$get("https://api.nuxtjs.dev/mountains");
  },
};
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>

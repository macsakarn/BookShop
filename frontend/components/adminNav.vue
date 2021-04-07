<template>
  <nav
    class="fixed w-full z-40 flex justify-between bg-white items-center max-w-full h-10"
  >
    <div class="titleName ml-64" v-if="isLogin">
      <p class="text-lg">
        Welcome Admin : <span style="color: #ffc700">{{ username }}</span>
      </p>
    </div>
    <div class="exit order-last mr-16 flex-none cursor-pointer" v-if="isLogin">
      <img src="~/assets/ADMIN/logout_black_24dp.svg" alt="" />
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isLogin: Boolean,
    username: String,
  },
};
</script>

<style>
html {
  background-color: #dbdbdb;
}

/* exact link will show the primary color for only the exact matching link */
</style>
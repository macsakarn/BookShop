<template>
  <div>
    <nav
      class="fixed w-full z-40 flex justify-between bg-white items-center max-w-full h-10"
    >
      <div class="titleName ml-64" v-if="isLogin">
        <p class="text-lg">
          Welcome Admin : <span style="color: #ffc700">{{ username }}</span>
        </p>
      </div>
      <div
        class="exit order-last mr-16 flex-none cursor-pointer"
        v-if="isLogin"
      >
        <img src="~/assets/ADMIN/logout_black_24dp.svg" alt="" />
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      username: 'test',
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #dbdbdb;
}
</style>

<template>
  <aside class="z-30 bg-gray-900 text-white w-1/6 relative">
    <div class="fixed h-full pl-20">
      <ul class="pt-48 text-gray-600">
        <li class="">
          <NuxtLink to="home">
            <div
              class="bth_home text-center my-10 cursor-pointer"
              v-if="isLogin"
            >
              <img
                src="~/assets/ADMIN/home_white_24dp.svg"
                class="inline w-8"
              />
              <span class="align-bottom">Home</span>
            </div>
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink to="book">
            <div
              class="bth_book text-center my-10 cursor-pointer"
              v-if="isLogin"
            >
              <img
                src="~/assets/ADMIN/menu_book_white_24dp.svg"
                class="inline w-8"
              />
              <span class="align-bottom">Book</span>
            </div>
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink to="order">
            <div
              class="bth_order text-center my-10 cursor-pointer"
              v-if="isLogin"
            >
              <img
                src="~/assets/ADMIN/list_alt_white_24dp.svg"
                class="inline w-8"
              />
              <span class="align-bottom">Order</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    isLogin: Boolean,
  },
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #fff;
}
a:hover {
  color: #fff;
  font-size: 15px;
}
</style>
<template>
  <section class="allNavBar">
    <nav class="flex justify-between bg-white items-center max-w-full h-10">
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
    <aside class="bg-gray-900 w-56 fixed inset-y-0 text-white">
      <div class="hero mt-48 text-gray-500">
        <div class="bth_home text-center my-10 cursor-pointer" v-if="isLogin">
          <img src="~/assets/ADMIN/home_white_24dp.svg" class="inline w-8" />
          <span class="align-bottom">Home</span>
        </div>
        <div class="bth_book text-center my-10 cursor-pointer" v-if="isLogin">
          <img
            src="~/assets/ADMIN/menu_book_white_24dp.svg"
            class="inline w-8"
          />
          <span class="align-bottom">Book</span>
        </div>
        <div class="bth_order text-center my-10 cursor-pointer" v-if="isLogin">
          <img
            src="~/assets/ADMIN/list_alt_white_24dp.svg"
            class="inline w-8"
          />
          <span class="align-bottom">Order</span>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      username: "Sakarn Bantadjun",
    };
  },
};
</script>

<style>
html {
  background-color: #dbdbdb;
}
.bth_home:hover span {
  color: #fff;
}
.bth_book:hover span {
  color: #fff;
}
.bth_order:hover span {
  color: #fff;
}
</style>
<template>
  <div class="container px-16 mx-auto pt-32">
    <main class="flex">
      <div class="w-1/4">
        <img
          :src="'http://localhost:3000' + book.book_image"
          alt="book-img"
          width="250"
        />
      </div>

      <div class="w-3/4">
        <p class="text-2xl font-semibold py-3">{{ book.book_name }}</p>
        <p class="text-2xl font-semibold text-blue-500">
          {{ book.book_price }} ฿
        </p>
        <p class="py-1">
          Author :
          <span
            class="text-blue-500 mx-2"
            v-for="(author, index) in book.author_name"
            :key="index"
            >{{ author }}</span
          >
        </p>
        <p class="py-1">
          Type :
          <span
            class="text-blue-500 mx-2"
            v-for="(type, index) in book.type"
            :key="index"
            >{{ type }}</span
          >
        </p>
        <p class="py-1">
          Year : <span class="text-blue-500">{{ book.pb_year }}</span>
        </p>
        <div
          @click="$store.commit('cart/add', book)"
          class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-40 cursor-pointer mt-10"
        >
          <img src="~/assets/USER/cart/shopping_cart_white_24dp.svg" alt="" />
          <p class="text-white ml-2">Add to Cart</p>
        </div>
        <p class="text-xl font-semibold py-3 mt-12">Description</p>
        <p>
          {{ book.description }}
        </p>
      </div>
    </main>
    <popular class="py-10" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const book = await $axios.$get(`/public/fetchBook/${params.id}`)
    console.log(book)
    return { book }
  },
}
</script>

<style></style>

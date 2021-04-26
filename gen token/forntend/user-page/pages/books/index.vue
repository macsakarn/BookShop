<template>
  <div class="container px-16 mx-auto">
    <main class="flex pt-40">
      <aside class="w-1/6 border-r-2 border-fuchsia-600">
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-4">Recommend</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
        </ul>
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-4">Type</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
        </ul>
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-4">Author</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
          <li>mac</li>
        </ul>
      </aside>
      <section class="w-5/6">
        <div
          class="mx-4 mb-4 pb-2 border-b-2 border-fuchsia-600 flex justify-between text-xl"
        >
          <p>Search For "..."</p>
          <p>All</p>
        </div>
        <div class="books flex flex-wrap">
          <div
            class="w-40 rounded overflow-hidden hover:shadow-lg m-4"
            v-for="book in books"
            :key="book.book_id"
          >
            <NuxtLink :to="{ name: 'books-id', params: { id: book.book_id } }">
              <img
                width="w-full"
                src="~/assets/USER/ExBook/01.png"
                alt="Sunset in the mountains"
              />
              <div class="py-4">
                <div class="text-sm mb-2 truncate">{{ book.book_name }}</div>
                <p class="text-gray-500 text-xs mb-2">
                  {{ book.author_name[0] }}
                </p>
                <p>{{ book.price }} Bath</p>
              </div>
            </NuxtLink>
            <button
              @click="addCarts(book)"
              class="bg-yellow-400 hover:bg-yellow-500 py-2 px-2 rounded-md w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const books = await $axios.$get('/allbook')
    return { books }
  },
  methods: {
    addCarts(book) {
      this.$store.commit('cart/add', book)
    },
  },
}
</script>

<style></style>

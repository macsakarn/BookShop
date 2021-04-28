<template>
  <section>
    <div class="flex justify-between mt-6">
      <div
        class="w-40 rounded overflow-hidden hover:shadow-lg"
        v-for="(popbook, index) in books"
        :key="index"
      >
        <div
          @click="
            $router.push({ name: 'books-id', params: { id: popbook.book_id } })
          "
        >
          <img
            width="w-full"
            src="~/assets/USER/ExBook/01.png"
            alt="Sunset in the mountains"
          />
          <div class="py-4">
            <div class="text-sm mb-2 truncate">{{ popbook.book_name }}</div>
            <p class="text-gray-500 text-xs mb-2">{{ popbook.author_name }}</p>
            <p>{{ popbook.price }}</p>
          </div>
        </div>
        <button
          class="bg-yellow-400 hover:bg-yellow-500 py-2 px-2 rounded-md w-full"
          @click="addCarts(popbook)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    status: Boolean,
  },
  async fetch() {
    const books = await this.$axios.$get('/popbook')
    if (this.status) {
      console.log(books.slice(0, 4))
      this.books = books.slice(0, 5)
    } else {
      this.books = books.slice(5)
    }
  },
  data() {
    return {
      books: '',
    }
  },
  methods: {
    addCarts(book) {
      this.$store.commit('cart/add', book)
    },
  },
}
</script>

<style></style>

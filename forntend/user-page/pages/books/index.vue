<template>
  <div class="container px-16 mx-auto">
    <main class="flex pt-40">
      <aside class="w-1/6 border-r-2 border-fuchsia-600 pr-10">
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-5">Recommend</li>
          <li
            class="cursor-pointer text-gray-700 hover:text-gray-900"
            @click="$router.replace({ name: 'books' }).catch(() => {})"
          >
            All
          </li>
          <li
            class="cursor-pointer text-gray-700 hover:text-gray-900"
            @click="
              $router
                .replace({ name: 'books', query: { p: 1 } })
                .catch(() => {})
            "
          >
            recommended books
          </li>
        </ul>
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-5">Type</li>
          <li
            v-for="(type, index) in sidebar.types"
            :key="index"
            class="cursor-pointer text-gray-700 hover:text-gray-900"
            @click="
              $router
                .replace({ name: 'books', query: { t: type } })
                .catch(() => {})
            "
          >
            {{ type }}
          </li>
        </ul>
        <ul class="my-10">
          <li class="text-xl text-blue-800 font-medium pb-5">Author</li>
          <li
            v-for="(author, index) in sidebar.authors"
            :key="index"
            class="cursor-pointer text-gray-700 hover:text-gray-900"
            @click="
              $router
                .replace({ name: 'books', query: { a: author } })
                .catch(() => {})
            "
          >
            {{ author }}
          </li>
        </ul>
      </aside>
      <section class="w-5/6">
        <div
          class="mx-4 mb-4 pb-2 border-b-2 border-fuchsia-600 flex justify-between text-xl"
        >
          <p v-show="$route.query.s !== undefined && $route.query.s !== ''">
            Search For "{{ $route.query.s }}"
          </p>
          <p>All</p>
        </div>
        <div class="books flex flex-wrap">
          <div
            class="w-40 rounded overflow-hidden hover:shadow-lg m-4"
            v-for="book in finallyBook"
            :key="book.book_id"
          >
            <div
              @click="
                $router.push({ name: 'books-id', params: { id: book.book_id } })
              "
            >
              <div class="w-30 h-50 overflow-hidden block">
                <img
                  :src="'http://localhost:3000' + book.book_image"
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="py-4">
                <div class="text-sm mb-2 truncate">{{ book.book_name }}</div>
                <p class="text-gray-500 text-xs mb-2">
                  {{ book.author_name[0] }}
                </p>
                <p>{{ book.book_price }} Bath</p>
              </div>
            </div>
            <button
              v-show="book.inCart === 0"
              @click.once="
                book.inCart = 1
                addCarts(book)
              "
              class="bg-yellow-400 hover:bg-yellow-500 py-2 px-2 rounded-md w-full"
            >
              Add to Cart
            </button>
            <button
              v-show="book.inCart === 1"
              class="bg-gray-400 py-2 px-2 rounded-md w-full"
            >
              In Your Cart
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
    const books = await $axios.$get('/public/fetchAllBooks')
    const sidebar = await $axios.$get('/public/sidebar')
    return { books, sidebar }
  },
  computed: {
    finallyBook() {
      var finallyBook = []
      var text = ''
      if (
        this.$route.query.s === undefined &&
        this.$route.query.a === undefined &&
        this.$route.query.t === undefined &&
        this.$route.query.p === undefined
      ) {
        return this.books
      }
      if (this.$route.query.s !== undefined) {
        finallyBook = this.books.filter((val) => {
          return val.book_name
            .toLowerCase()
            .includes(this.$route.query.s.toLowerCase())
        })
      }
      if (this.$route.query.a !== undefined) {
        text = this.$route.query.a
        finallyBook = this.books.filter((val) => {
          return val.author_name.includes(text)
        })
      }
      if (this.$route.query.t !== undefined) {
        text = this.$route.query.t
        finallyBook = this.books.filter((val) => {
          return val.type.includes(text)
        })
      }
      if (this.$route.query.p !== undefined) {
        finallyBook = this.books.filter((val) => {
          return val.popular == this.$route.query.p
        })
      }

      return finallyBook
    },
  },
  methods: {
    addCarts(book) {
      this.$store.commit('cart/add', book)
    },
  },
}
</script>

<style scoped>
img {
  width: 170px;
  height: 250px;
}
</style>

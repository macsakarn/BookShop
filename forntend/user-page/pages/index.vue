<template>
  <main :style="{ backgroundImage: `url(${image})` }">
    <div class="container px-16 mx-auto z-0">
      <section class="flex pt-48">
        <div class="w-1/2 mt-16">
          <form class="w-3/4 mx-auto mb-4" @submit.prevent>
            <div
              class="flex items-center py-1 px-3 bg-white rounded-xl border border-indigo-600"
            >
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
                v-model="searchBook"
                @keyup.enter="search"
              />
              <img
                src="~/assets/USER/nav/search_black_24dp.svg"
                alt="icon search"
              />
            </div>
          </form>
          <div class="w-3/4 mx-auto">
            <p class="text-3xl font-bold mb-4 mt-4">Hot sale!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ducimus laboriosam, expedita sapiente quod, aspernatur dicta
              commodi odio delectus inventore rem earum voluptas! Nostrum sit
              voluptas aliquam similique consequuntur cupiditate.
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 mr-4"
            >
              Buy Now
            </button>
            <button
              @click="$router.push({ name: 'books', query: { p: 1 } })"
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              See Details
            </button>
          </div>
        </div>
        <div class="w-1/2 relative">
          <img
            src="~/assets/USER/ExBook/01.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-1 border-4 border-white shadow-lg ml-12"
          />
          <img
            src="~/assets/USER/ExBook/02.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-2 border-4 border-white shadow-lg"
          />
          <img
            src="~/assets/USER/ExBook/03.png"
            alt="ex1"
            width="200"
            class="absolute pop-img-3 border-4 border-white shadow-lg"
          />
        </div>
      </section>
      <section class="mt-40">
        <div class="genre flex">
          <p class="text-2xl font-bold pt-4 w-3/4">Genre</p>
          <p
            class="text-xl font-semibold pt-5 text-blue-500 w-1/4 text-right cursor-pointer"
            @click="$router.push({ name: 'books' })"
          >
            See all
          </p>
        </div>
        <ul class="genre-order flex justify-between mt-5">
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'Horror' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_horror.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">Horror</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'Romance' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_romance.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">Romance</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'Fantasy' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_fantasy.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">Fantasy</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'Religion' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_religion.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">Religion</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'History' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_history.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">History</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books', query: { t: 'Family' } })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_family.png"
                alt="genre"
                width="150"
                class="transform"
              />
            </div>
            <p class="text-gray-300 text-lg">Family</p>
          </li>
          <li
            class="relative cursor-pointer"
            @click="$router.push({ name: 'books' })"
          >
            <div class="rounded-lg">
              <img
                src="~/assets/USER/genre/Genre_other.png"
                alt="genre"
                width="150"
                class="transform"
                style="filter: brightness(0.25)"
              />
            </div>
            <p class="text-gray-300 text-lg">See All</p>
          </li>
        </ul>
      </section>
      <section class="mt-32">
        <div class="genre flex">
          <div class="w-3/4">
            <p class="text-2xl font-bold pt-4">Popular Books</p>
            <p class="text-2xl font-bold pt-4">This Year</p>
          </div>
          <p
            class="text-xl font-semibold pt-16 text-blue-500 w-1/4 text-right cursor-pointer"
            @click="$router.push({ name: 'books' })"
          >
            See all
          </p>
        </div>
        <popular :status="true" />
      </section>
      <section class="mt-32">
        <div class="genre flex">
          <div class="w-3/4">
            <p class="text-2xl font-bold pt-4">For your</p>
          </div>
          <p
            class="text-xl font-semibold pt-8 text-blue-500 w-1/4 text-right cursor-pointer"
            @click="$router.push({ name: 'books' })"
          >
            See all
          </p>
        </div>
        <popular :status="false" />
      </section>
      <section class="mt-32">
        <div class="mx-auto flex w-1/2">
          <div class="pr-20">
            <p class="text-2xl font-bold">Sign up for our Newsletter</p>
            <p class="text-xl">Tell us what books you love.</p>
          </div>
          <button
            @click="$router.push({ name: 'register' })"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-12 border border-blue-700 rounded text-xl"
          >
            Sign up
          </button>
        </div>
      </section>
      <section class="recommend-book mt-24 mb-32 flex">
        <div class="w-1/3 mt-8 text-white">
          <p class="text-2xl font-bold mb-2">Recommended books</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            fermentum, eu tempus. Rutrum amet nullam eu leo odio.
          </p>
        </div>
        <div class="w-2/3 flex pt-32">
          <img
            src="~/assets/USER/ExBook/04.png"
            alt="ex1"
            width="200"
            class="mx-8"
          />
          <img
            src="~/assets/USER/ExBook/05.png"
            alt="ex1"
            width="200"
            class="mx-8"
          />
          <img
            src="~/assets/USER/ExBook/06.png"
            alt="ex1"
            width="200"
            class="mx-8"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import img from 'assets/USER/BG.png'
export default {
  data() {
    return {
      image: img,
      searchBook: '',
    }
  },
  methods: {
    search() {
      this.$router.push({ name: 'books', query: { s: this.searchBook } })
      this.searchBook = ''
    },
  },
}
</script>
<style scoped>
main {
  background-position: right -300px;
  background-repeat: no-repeat;
}
.pop-img-1 {
  z-index: 1;
}
.pop-img-2 {
  z-index: 3;
  left: 230px;
  top: -70px;
}
.pop-img-3 {
  z-index: 2;
  left: 420px;
  top: 50px;
}
.genre:before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background: url('~/assets/USER/genre/Dot.svg') no-repeat;
  left: 10em;
  z-index: -10;
}
.genre-order li div {
  width: 150px;
  height: 230px;
  overflow: hidden;
}
.genre-order li div img {
  transition: all 0.5s 0s ease;
}
.genre-order li p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.genre-order li:hover div img {
  --transform-scale-x: 1.25;
  --transform-scale-y: 1.25;
}
.genre-order li:hover p {
  color: rgb(255, 255, 255);
}
.recommend-book:before {
  content: '';
  position: absolute;
  width: 630px;
  height: 600px;
  background: url('~/assets/USER/BG2.png') no-repeat;
  left: 0;
  z-index: -10;
}
</style>

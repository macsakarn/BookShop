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
            v-for="(popbook, index) in 20"
            :key="index"
          >
            <NuxtLink :to="{ name: 'books-id', params: { id: index } }">
              <img
                width="w-full"
                src="~/assets/USER/ExBook/01.png"
                alt="Sunset in the mountains"
              />
              <div class="py-4">
                <div class="text-sm mb-2">SONYA HARTNETT</div>
                <p class="text-gray-500 text-xs mb-2">sakarn bantadjun</p>
                <p>199 Bath</p>
              </div>
              <button
                class="bg-yellow-400 hover:bg-yellow-500 py-2 px-2 rounded-md w-full"
              >
                Add to Cart
              </button>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

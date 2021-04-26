<template>
  <section>
    <div class="flex justify-between mt-6">
      <div
        class="w-40 rounded overflow-hidden hover:shadow-lg"
        v-for="(popbook, index) in 6"
        :key="index"
      >
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
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>

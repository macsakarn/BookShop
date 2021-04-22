<template>
  <div class="container px-16 mx-auto">
    <main class="py-32">
      <section class="flex justify-between pb-10">
        <p class="text-2xl font-bold">Shopping Cart</p>
        <div
          class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer my-4 mt-20"
        >
          <p class="text-white mx-auto">Checkout (Total: 300 Bath)</p>
        </div>
      </section>
      <section>
        <div class="border-b-2 border-gray-400">
          <div class="flex">
            <p class="text-xl font-bol">Address</p>
            <img
              src="~/assets/USER/Profile/edit_black_24dp.svg"
              class="mx-3 cursor-pointer"
              alt="edit"
            />
          </div>
        </div>
        <div class="bg-white mt-10 w-full h-32 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          reiciendis nulla optio quis necessitatibus quo deserunt ea quisquam,
          explicabo pariatur a expedita labore amet temporibus voluptatibus ut
          iure, vitae unde.
        </div>
        <div class="flex flex-row-reverse">
          <div
            class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer mx-4 mt-20"
          >
            <p class="text-white mx-auto">Checkout</p>
          </div>
          <div
            class="bg-gray-500 hover:bg-gray-600 py-3 px-3 rounded-md flex w-auto cursor-pointer mx-4 mt-20"
          >
            <p class="text-white mx-auto">back</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    carts() {
      return this.$store.state.cart.list
    },
  },
}
</script>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

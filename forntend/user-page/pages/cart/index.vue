<template>
  <div class="container px-16 mx-auto">
    <main class="py-32">
      <section class="flex justify-between pb-10">
        <p class="text-2xl font-bold">Shopping Cart</p>
        <NuxtLink :to="{ name: 'cart-checkout' }">
          <div
            class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer my-4 mt-20"
          >
            <p class="text-white mx-auto">
              Checkout (Total: {{ $store.state.cart.total }} Bath)
            </p>
          </div>
        </NuxtLink>
      </section>

      <section class="">
        <table class="table-fixed w-full mb-12">
          <thead>
            <tr class="border-b-2 border-gray-400">
              <th class="px-4 py-2 w-8/12 text-left">Item</th>
              <th class="px-4 py-2 w-2/12">Qty</th>
              <th class="px-4 py-2 w-1/12">Price</th>
              <th class="px-4 py-2 w-1/12">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in carts" :key="index">
              <td class="px-4 py-2 flex">
                <img
                  src="~/assets/USER/ExBook/01.png"
                  alt="book-img"
                  width="100"
                />
                <div class="m-4">
                  <p class="text-xl font-semi py-2">
                    {{ order.book_name }}
                  </p>
                  <p class="py-1 text-blue-500">{{ order.author_name[0] }}</p>
                </div>
              </td>
              <td class="px-4 py-2">
                <div
                  class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 px-5"
                >
                  <button
                    @click="$store.commit('cart/downCount', order.book_id)"
                    class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span class="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    min="1"
                    v-model="order.book_amount"
                    class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                    name="custom-input-number"
                  />

                  <button
                    @click="$store.commit('cart/upCount', order.book_id)"
                    class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </td>
              <td class="px-4 py-2">
                {{ order.book_price * order.book_amount }} Bath
              </td>
              <td class="px-4 py-2">
                <svg
                  @click="$store.commit('cart/delete', index)"
                  class="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    carts() {
      console.log(this.$store.state.cart.list)
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

<template>
  <div class="container px-16 mx-auto">
    <main class="py-32">
      <section class="flex justify-between pb-10">
        <p class="text-2xl font-bold">Shopping Cart</p>
        <div
          @click="checkout()"
          class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer my-4 mt-20"
        >
          <p class="text-white mx-auto">
            Checkout (Total: {{ $store.state.cart.total }} Bath)
          </p>
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
              @click="$router.push({ name: 'account' })"
            />
          </div>
        </div>
        <div class="bg-white mt-10 w-full h-32 p-3">
          {{ $store.state.auth.user.customer_address }}
        </div>
        <div class="flex flex-row-reverse">
          <div
            @click="checkout()"
            class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer mx-4 mt-20"
          >
            <p class="text-white mx-auto">Checkout</p>
          </div>

          <NuxtLink :to="{ name: 'cart' }">
            <div
              class="bg-gray-500 hover:bg-gray-600 py-3 px-3 rounded-md flex w-auto cursor-pointer mx-4 mt-20"
            >
              <p class="text-white mx-auto">back</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    checkout() {
      const data = {
        books: this.$store.state.cart.list,
        customerId: this.$auth.user.CUSTOMER_customer_id,
        totalPrice: this.$store.state.cart.total,
        amount: this.$store.state.cart.countCart,
      }
      this.sendData(data)
    },
    async sendData(data) {
      try {
        const headers = {}
        headers['Authorization'] = window.$nuxt.$auth.strategy.token.get(
          'local'
        )
        let response = await this.$axios.post('/user/makeorder', data, headers)
        alert(response.data.massage)
        this.$store.commit('cart/clear')
        this.$router.push({ name: 'index' })
      } catch (err) {
        console.log(err)
      }
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

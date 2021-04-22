<template>
  <div class="container px-16 mx-auto">
    <main class="py-32">
      <section class="flex justify-between pb-10">
          
        <p class="text-2xl font-bold">Shopping Cart </p>
        <NuxtLink to='cart/checkout'> 
         <div
          class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-auto cursor-pointer my-4 mt-20"
        >
          <p class="text-white mx-auto">Checkout (Total: 300 Bath)</p>
        </div>
        </NuxtLink>
      </section>

      <section class="">
        <table class="table-fixed w-full mb-12">
          <thead>
            <tr class="border-b-2 border-gray-400" >
              <th class="px-4 py-2 w-8/12 text-left">Item</th>
              <th class="px-4 py-2 w-2/12">Qty</th>
              <th class="px-4 py-2 w-1/12">Price</th>
              <th class="px-4 py-2 w-1/12">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,index) in carts" :key='index'>
              <td class="px-4 py-2 flex">
                <img
                  src="~/assets/USER/ExBook/01.png"
                  alt="book-img"
                  width="100"
                />
                <div class="m-4">
                  <p class="text-xl font-semi py-2">
                    {{order.book_name}}
                  </p>
                  <p class="py-1 text-blue-500">{{ order.author_name[0] }}</p>
                </div>
              </td>
              <td class="px-4 py-2">
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 px-5">
                    <button  class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" min="1" v-model="order.user_amount" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                    <button  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
              </td>
              <td class="px-4 py-2">{{order.price}} Bath</td>
              <td class="px-4 py-2">4</td>
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
        carts () {
            return this.$store.state.cart.list
        }
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

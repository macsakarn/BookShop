<template>
  <main class="w-5/6">
    <div
      v-if="model"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
      <div class="relative w-1/4 my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="my-5 mx-12">
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="clear()"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2 w-4/5">Name</th>
                  <th class="px-4 py-2 w-1/5">Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(detail, index) in order_detail" :key="index">
                  <td class="border px-4 py-2">{{ detail.book_name }}</td>
                  <td class="border px-4 py-2">{{ detail.qty }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-2xl border-b-2 border-gray-400 pb-4">History</p>
    <section class="All-History grid gap-y-5 gap-x-3 grid-cols-3 mt-10">
      <div
        class="History-0 bg-white rounded-xl shadow-md"
        v-for="(history, index) in orders"
        :key="index"
      >
        <div class="p-3">
          <div class="container" @click="showDatil(index)">
            <div class="Top">
              <p class="text-xl">Order #{{ history.order_id }}</p>
              <p class="text-gray-500 text-sm">
                {{ history.order_date.split('T')[0] }}
              </p>
            </div>
            <div class="flex justify-between mt-4">
              <div>
                <p>total : {{ history.total_price }}฿</p>
                <p>
                  Payment
                  <span
                    class="text-green-500"
                    v-if="history.payment_status === 1"
                    >Yes</span
                  >
                  <span class="text-red-500" v-else>No</span>
                </p>
                <p class="">Delivery Date: {{ history.delivery_date }}</p>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="overflow-hidden relative w-3/4 mt-4 pr-3">
              <button
                class="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 w-full inline-flex items-center"
              >
                <svg
                  fill="#FFF"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                </svg>
                <span class="ml-2">Uplord Payment </span>
              </button>
              <input
                @change="updateOrder"
                @click="updateId = history.order_id"
                class="cursor-pointer absolute block opacity-0 right-0 top-0"
                type="file"
              />
            </div>
            <div class="overflow-hidden relative w-1/4 mt-4">
              <button
                @click="deleteOrder(history.order_id)"
                class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-2 w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get('/user/fetchOrder', {})
      var orders = data.Order
    } catch (error) {
      console.log(error)
      var orders = []
    }
    return { orders }
  },
  data() {
    return {
      model: false,
      order_detail: [],
      updateId: 0,
    }
  },
  methods: {
    showDatil(index) {
      this.model = true
      const name = this.orders[index].All_Book_name.split('%')
      const qty = this.orders[index].All_item_unit.split('%')
      console.log(this.order_detail)
      name.forEach((val, index) => {
        this.order_detail.push({
          book_name: val,
          qty: qty[index],
        })
      })
    },
    clear() {
      this.model = false
      this.order_detail = []
    },
    deleteOrder(id) {
      console.log(id)
    },
    updateOrder(event) {
      this.images = event.target.files
      console.log(this.updateId)
    },
  },
}
</script>

<style></style>

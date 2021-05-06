<template>
  <div>
    <div
      v-if="model"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
      <div class="relative w-2/4 my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="my-5 mx-12">
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="model = false"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
            <div class="mt-10">
              <p>
                Customer Name :
                <span class="text-red-600">{{
                  order_detail.customer_name
                }}</span>
              </p>
              <p>
                Customer address :
                <span class="text-red-600">{{
                  order_detail.customer_address
                }}</span>
              </p>
            </div>
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2 w-2/12">item_id</th>
                  <th class="px-4 py-2 w-2/12">book_id</th>
                  <th class="px-4 py-2 w-8/12">name</th>
                  <th class="px-4 py-2 w-2/12">unit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(detail, index) in order_detail.detail" :key="index">
                  <td class="border px-4 py-2">{{ detail.item_id }}</td>
                  <td class="border px-4 py-2">{{ detail.book_id }}</td>
                  <td class="border px-4 py-2">{{ detail.name }}</td>
                  <td class="border px-4 py-2">{{ detail.unit }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="modelConfirm"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
      <div class="relative w-2/4 my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="my-5 mx-12">
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="modelConfirm = false"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
            <div class="my-10 flex">
              <img :src="this.invoice_detail.url" class="w-1/3" />
              <div class="ml-5 w-2/3">
                <div class="mb-20">
                  <p class="text-sm text-gray-600 flex items-center my-3">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Admin only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Order ID :
                    <span class="text-red-500">{{ invoice_detail.id }}</span>
                  </div>
                  <div class="text-gray-900 font-bold text-ml mb-2">
                    price :
                    <span class="text-red-500">{{ invoice_detail.price }} </span
                    >฿
                  </div>
                </div>
                <div class="flex">
                  <div class="overflow-hidden relative w-1/2 px-3">
                    <button
                      @click="confirm(invoice_detail.id)"
                      class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-2 w-full"
                    >
                      Report
                    </button>
                  </div>
                  <div class="overflow-hidden relative w-1/2 px-3">
                    <button
                      @click="confirm(invoice_detail.id, true)"
                      class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-2 w-full"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <adminDashBoard class="mb-4 mx-2" />
      <div class="hero bg-white mx-4">
        <div class="top-bar flex justify-between">
          <form class="w-full">
            <div class="flex items-center py-2 px-3">
              <img src="~/assets/ADMIN/search_black_24dp.svg" alt="" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <img
                src="~/assets/ADMIN/Filter.svg"
                alt=""
                class="mt-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div class="tableBook mb-64">
          <table class="table-fixed w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 w-1/12">ID</th>
                <th class="px-4 py-2 w-1/12">Customer id</th>
                <th class="px-4 py-2 w-2/12">Date</th>
                <th class="px-4 py-2 w-1/12">amount</th>
                <th class="px-4 py-2 w-1/12">price</th>
                <th class="px-4 py-2 w-1/12">payment</th>
                <th class="px-4 py-2 w-2/12">delivery date</th>
                <th class="px-4 py-2 w-1/12">admin</th>
                <th class="px-4 py-2 w-2/12">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in orders" :key="index">
                <td class="border px-4 py-2">{{ order.order_id }}</td>
                <td class="border px-4 py-2">
                  {{ order.CUSTOMER_customer_id }}
                </td>
                <td class="border px-4 py-2">
                  {{ order.order_date }}
                </td>
                <td class="border px-4 py-2">{{ order.amount }}</td>
                <td class="border px-4 py-2 truncate">
                  {{ order.total_price }} ฿
                </td>
                <td class="border px-4 py-2">
                  <span class="text-green-600" v-if="order.payment_status == 1">
                    Yes
                  </span>
                  <span class="text-red-600" v-else> No </span>
                </td>
                <td class="border px-4 py-2">
                  {{ order.delivery_date }}
                </td>
                <td class="border px-4 py-2">{{ order.ADMIN_admin_id }}</td>
                <td class="border px-4 py-2">
                  <div class="icon text-center">
                    <img
                      v-if="order.ADMIN_admin_id === null"
                      src="~/assets/done_black_24dp.svg"
                      alt="check order"
                      class="inline mx-3 cursor-pointer"
                      @click="checkInvoice(order)"
                    />
                    <img
                      src="~/assets/local_shipping_black_24dp.svg"
                      alt="delivery order"
                      class="inline mx-3 cursor-pointer"
                      @click="testdrop = !testdrop"
                    />
                    <transition name="fade">
                      <div
                        v-if="testdrop"
                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div class="py-1">
                          <div class="flex">
                            <input
                              type="date"
                              class="text-gray-700 block py-2"
                            />
                            <button
                              class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-2"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </transition>

                    <img
                      src="~/assets/receipt_long_black_24dp.svg"
                      alt="detail order"
                      class="inline mx-3 cursor-pointer"
                      @click="beforDetail(order.order_id)"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!--Card 1-->
  </div>
</template>

<script>
import * as BookApi from '@/utils/orderApi'
export default {
  middleware: 'auth',

  data() {
    return {
      orders: [],
      model: false,
      order_detail: {
        customer_name: '',
        customer_address: '',
        detail: [],
      },
      invoice_detail: {
        url: '',
        id: '',
        price: 0,
      },
      modelConfirm: false,
      testdrop: false,
    }
  },
  async mounted() {
    try {
      const res = await BookApi.getOrders()
      console.log(res.data.allOrder)
      this.orders = res.data.allOrder
    } catch (error) {
      this.orders = []
    }
  },
  methods: {
    async beforDetail(order_id) {
      const res = await BookApi.getDetail(order_id)

      this.order_detail.customer_name = res.data.Order.customer_name
      this.order_detail.customer_address = res.data.Order.address

      const item = res.data.Order.All_item_no.split(', ')
      const book_id = res.data.Order.All_Book_book_id.split(', ')
      const book_name = res.data.Order.All_Book_name.split(', ')
      const unit = res.data.Order.All_item_unit.split(', ')

      item.forEach((element, index) => {
        this.order_detail.detail.push({
          item_id: element,
          book_id: book_id[index],
          name: book_name[index],
          unit: unit[index],
        })
      })
      this.model = true
    },
    async checkInvoice(o) {
      this.modelConfirm = true
      this.invoice_detail.url = `http://localhost:3000/${o.payment_image}`

      this.invoice_detail.id = o.order_id
      this.invoice_detail.price = o.total_price
    },
    async confirm(id, confirm = false) {
      const data = {
        choice: 'check',
        confirm: confirm,
        order_id: id,
      }
      try {
        let response = await this.$axios.put(`admin/order/edit`, data)

        alert(response.massage)
      } catch (err) {
        console.log(err)
      }
      this.modelConfirm = false
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

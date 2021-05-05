<template>
  <div>
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
                <td class="border px-4 py-2">{{order.order_id}}</td>
                <td class="border px-4 py-2">{{order.CUSTOMER_customer_id}}</td>
                <td class="border px-4 py-2">{{order.order_date.split("T")[0]}}</td>
                <td class="border px-4 py-2">{{order.amount}}</td>
                <td class="border px-4 py-2 truncate">{{order.total_price}} ฿</td>
                <td class="border px-4 py-2">
                  <span class="text-green-600" v-if="order.payment_status == 1"> Yes </span>
                  <span class="text-red-600" v-else> No </span>
                </td>
                <td class="border px-4 py-2">{{order.delivery_date.split("T")[0]}}</td>
                <td class="border px-4 py-2">{{order.ADMIN_admin_id}}</td>
                <td class="border px-4 py-2">
                  <div class="icon text-center">
                    <img
                      src="~/assets/done_black_24dp.svg"
                      alt="check order"
                      class="inline mx-3 cursor-pointer"
                    />
                    <img
                      src="~/assets/local_shipping_black_24dp.svg"
                      alt="delivery order"
                      class="inline mx-3 cursor-pointer"
                    />
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
  </div>
</template>

<script>
import * as BookApi from '@/utils/orderApi'
export default {

  middleware: 'auth',

  data(){
    return{
      orders:[]
    }
  },
  async mounted(){
    const res = await BookApi.getOrders()
    this.orders = res.data.allOrder
  },
  methods:{
    async beforDetail(order_id){
      const res = await BookApi.getDetail(order_id)
      console.log(res.data);
    }
  }
}
</script>

<style></style>

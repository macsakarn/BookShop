<template>
  <div class="flex flex-nowrap">
    <div class="w-1/4 h-40 mx-2 bg-white rounded-xl">
      <p class="mx-4 h-10 text-xl">
        <span class="align-middle">Revenue</span>
      </p>
      <p class="mx-4 h-20 text-4xl text-center">
        <span class="align-middle text-blue-600">{{ Revenue }} ฿</span>
      </p>
      <p class="mx-4 h-10 text-center">
        <span class="align-middle text-gray-500"
          >Update {{ updateRevenue }}</span
        >
      </p>
    </div>
    <div class="w-1/4 h-40 mx-2 bg-white rounded-xl">
      <p class="mx-4 h-10 text-xl">
        <span class="align-middle">Daily Sales</span>
      </p>
      <p class="mx-4 h-20 text-4xl text-center">
        <span class="align-middle text-pink-600">{{ Sales }} ฿</span>
      </p>
      <p class="mx-4 h-10 text-center">
        <span class="align-middle text-gray-500">Update {{ updateSales }}</span>
      </p>
    </div>
    <div class="w-1/4 h-40 mx-2 bg-white rounded-xl">
      <p class="mx-4 h-10 text-xl">
        <span class="align-middle">Book</span>
      </p>
      <p class="mx-4 h-20 text-4xl text-center">
        <span class="align-middle text-green-600">{{ Book }} Books</span>
      </p>
      <p class="mx-4 h-10 text-center">
        <span class="align-middle text-gray-500">Update {{ updateBook }}</span>
      </p>
    </div>
    <div class="w-1/4 h-40 mx-2 bg-white rounded-xl">
      <p class="mx-4 h-10 text-xl">
        <span class="align-middle">Order</span>
      </p>
      <p class="mx-4 h-20 text-4xl text-center">
        <span class="align-middle text-yellow-600">{{ Order }} Order</span>
      </p>
      <p class="mx-4 h-10 text-center">
        <span class="align-middle text-gray-500">Update {{ updateOrder }}</span>
      </p>
    </div>
  </div>
</template>

<script>
const dateFormat = require('dateformat')
const now = new Date()
export default {
  async fetch() {
    const data = await this.$axios.$get('/public/chart')
    this.Revenue = data.revenue === null ? 0 : data.revenue
    this.Sales = data.dailyRevenue === null ? 0 : data.dailyRevenue
    this.Book = data.allBook === null ? 0 : data.allBook
    this.Order = data.allOrder === null ? 0 : data.allOrder
  },
  data() {
    return {
      //update date
      updateRevenue: dateFormat(now, 'dd/mm/yyyy h:MM TT'),
      updateSales: dateFormat(now, 'dd/mm/yyyy h:MM TT'),
      updateBook: dateFormat(now, 'dd/mm/yyyy h:MM TT'),
      updateOrder: dateFormat(now, 'dd/mm/yyyy h:MM TT'),
      // value
      Revenue: null,
      Sales: null,
      Book: null,
      Order: null,
    }
  },
}
</script>

<style></style>

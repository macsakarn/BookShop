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
          >Update 01/01/2000 10:30 PM</span
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
        <span class="align-middle text-gray-500"
          >Update 01/01/2000 10:30 PM</span
        >
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
        <span class="align-middle text-gray-500"
          >Update 01/01/2000 10:30 PM</span
        >
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
        <span class="align-middle text-gray-500"
          >Update 01/01/2000 10:30 PM</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //update date
      updateRevenue: "01/01/2000 10:30 PM",
      updateSales: "01/01/2000 10:30 PM",
      updateBook: "01/01/2000 10:30 PM",
      updateOrder: "01/01/2000 10:30 PM",
      // value
      Revenue: 1,
      Sales: 1,
      Book: 1,
      Order: 1,
    };
  },
};
</script>

<style>
</style>
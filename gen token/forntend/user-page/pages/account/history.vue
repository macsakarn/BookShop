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
              v-on:click="model = false"
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
                  <th class="px-4 py-2 w-3/5">Name</th>
                  <th class="px-4 py-2 w-1/5">Qty</th>
                  <th class="px-4 py-2 w-1/5">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, index) in 10" :key="index">
                  <td class="border px-4 py-2">mac</td>
                  <td class="border px-4 py-2">2</td>
                  <td class="border px-4 py-2">200</td>
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
        v-for="(history, index) in 10"
        :key="index"
      >
        <div class="p-3">
          <div class="Top">
            <p>Order #11</p>
            <p class="text-gray-500 text-sm">23 Feb 2021, 18:00 PM</p>
          </div>
          <div class="flex justify-between mt-8">
            <div>
              <p>total : 300฿</p>
              <p>
                Payment
                <span class="text-green-500">Yes</span>
                <span class="text-red-500">No</span>
              </p>
              <p class="">Delivery Date: 2020-20-12</p>
            </div>

            <button
              @click="model = true"
              class="bg-yellow-400 hover:bg-yellow-500 py-2 px-2 rounded-md text-white"
            >
              Detail
            </button>
          </div>
          <div class="overflow-hidden relative w-full mt-4">
            <button
              class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 w-full inline-flex items-center"
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
              class="cursor-pointer absolute block opacity-0 right-0 top-0"
              type="file"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      model: false,
    }
  },
}
</script>

<style></style>

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
        <div class="tableBook">
          <table class="table-fixed w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 w-1/12">ID</th>
                <th class="px-4 py-2 w-1/12">Customer id</th>
                <th class="px-4 py-2 w-1/12">Date</th>
                <th class="px-4 py-2 w-1/12">amount</th>
                <th class="px-4 py-2 w-2/12">price</th>
                <th class="px-4 py-2 w-1/12">payment</th>
                <th class="px-4 py-2 w-1/12">delivery date</th>
                <th class="px-4 py-2 w-1/12">admin</th>
                <th class="px-4 py-2 w-3/12">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(i, index) in 20" :key="index">
                <td class="border px-4 py-2">1</td>
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">20/01/12</td>
                <td class="border px-4 py-2">13</td>
                <td class="border px-4 py-2 truncate">2000 Bath</td>
                <td class="border px-4 py-2">
                  <span class="text-green-600"> Yes </span>
                  <span class="text-red-600"> No </span>
                </td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">-</td>
                <td class="border px-4 py-2">
                  <div class="icon text-center">
                    <img
                      src="~/assets/done_black_24dp.svg"
                      alt="check order"
                      class="inline mx-3"
                    />
                    <img
                      src="~/assets/ADMIN/Edit.svg"
                      alt="Edit order"
                      class="inline mx-3"
                    />
                    <img
                      src="~/assets/local_shipping_black_24dp.svg"
                      alt="delivery order"
                      class="inline mx-3"
                    />
                    <img
                      src="~/assets/receipt_long_black_24dp.svg"
                      alt="detail order"
                      class="inline mx-3"
                    />
                    <img
                      src="~/assets/ADMIN/Group.svg"
                      alt="delete order"
                      class="inline mx-3"
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
export default {
  middleware: 'auth',
}
</script>

<style></style>

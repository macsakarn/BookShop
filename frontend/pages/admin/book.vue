<template>
  <section>
    <adminNav :isLogin="true" />
    <section class="mt-8 w-4/5 bg-white" style="margin-left: 17%">
      <div class="top-bar flex justify-between">
        <form class="w-full max-w-sm">
          <div class="flex items-center py-2 px-3">
            <img src="~/assets/USER/nav/search_black_24dp.svg" alt="" />
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Search
            </button>
          </div>
        </form>
        <div class="flex items-center py-2 px-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Book
          </button>
        </div>
      </div>
      <div class="tableBook">
        <table class="table-fixed w-full">
          <thead>
            <tr>
              <th class="px-4 py-2 w-2/12">Book ID</th>
              <th class="px-4 py-2 w-2/12">Name</th>
              <th class="px-4 py-2 w-2/12">Date</th>
              <th class="px-4 py-2 w-2/12">Description</th>
              <th class="px-4 py-2 w-1/12">price</th>
              <th class="px-4 py-2 w-1/12">Amount</th>
              <th class="px-4 py-2 w-2/12">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Annette Black</td>
              <td class="border px-4 py-2">20/12/2020</td>
              <td class="border px-4 py-2 truncate">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  aut exercitationem officiis eaque! Maxime qui officiis in eum!
                  Rem eum facere animi maiores culpa fuga beatae veritatis harum
                  quos velit?
                </span>
              </td>
              <td class="border px-4 py-2">125</td>
              <td class="border px-4 py-2">25</td>
              <td class="border px-4 py-2">
                <div class="icon text-center">
                  <img
                    src="~/assets/ADMIN/Edit.svg"
                    alt=""
                    class="inline mx-3"
                  />
                  <img
                    src="~/assets/ADMIN/Group.svg"
                    alt=""
                    class="inline mx-3"
                  />
                </div>
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Annette Black</td>
              <td class="border px-4 py-2">20/12/2020</td>
              <td class="border px-4 py-2 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut
                exercitationem officiis eaque! Maxime qui officiis in eum! Rem
                eum facere animi maiores culpa fuga beatae veritatis harum quos
                velit?
              </td>
              <td class="border px-4 py-2">125</td>
              <td class="border px-4 py-2">25</td>
              <td class="border px-4 py-2">
                <div class="icon text-center">
                  <img
                    src="~/assets/ADMIN/Edit.svg"
                    alt=""
                    class="inline mx-3"
                  />
                  <img
                    src="~/assets/ADMIN/Group.svg"
                    alt=""
                    class="inline mx-3"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>
 
<style>
</style>
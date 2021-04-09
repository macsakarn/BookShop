<template>
  <div>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">Add Book</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="
                showModal = false;
                clear();
              "
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-8/12 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Book Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    :class="{ 'border-red-500': errorName }"
                    @click="errorName = false"
                    v-model="bookName"
                  />
                  <p class="text-red-500 text-xs italic" v-show="errorName">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-4/12 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Year
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="bookDate"
                    type="text"
                    :class="{ 'border-red-500': errorDate }"
                    @click="errorDate = false"
                  />
                  <p class="text-red-500 text-xs italic" v-show="errorDate">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Description
                  </label>
                  <textarea
                    v-model="bookDescription"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    :class="{ 'border-red-500': errorDescription }"
                    @click="errorDescription = false"
                  >
                  </textarea>
                  <p
                    class="text-red-500 text-xs italic"
                    v-show="errorDescription"
                  >
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Amount
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    v-model="bookAmount"
                    :class="{ 'border-red-500': errorAmount }"
                    @click="errorAmount = false"
                  />
                  <p class="text-red-500 text-xs italic" v-show="errorAmount">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    price
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    v-model="bookPrice"
                    :class="{ 'border-red-500': errorPrice }"
                    @click="errorPrice = false"
                  />
                  <p class="text-red-500 text-xs italic" v-show="errorPrice">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
                  <label class="items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      v-model="bookpopular"
                    />
                    <span class="ml-2">Popular</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    class="w-full mt-2"
                    @change="onFileChange"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Author
                  </label>
                  <div
                    class="flex my-2"
                    v-for="(inputAuthor, index) in bookAuthor"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputAuthor.name"
                      :class="{ 'border-red-500': inputAuthor.error }"
                      @click="inputAuthor.error = false"
                    />
                    <span @click="addInput('author')">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span
                      @click="deleteInput(index, 'author')"
                      v-show="index > 0"
                    >
                      <img
                        src="~/assets/ADMIN/Group.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Type
                  </label>
                  <div
                    class="flex my-2"
                    v-for="(inputType, index) in bookType"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputType.name"
                      :class="{ 'border-red-500': inputType.error }"
                      @click="inputType.error = false"
                    />
                    <span @click="addInput('type')">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span
                      @click="deleteInput(index, 'type')"
                      v-show="index > 0"
                    >
                      <img
                        src="~/assets/ADMIN/Group.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="showModal = false"
            >
              Close
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              @click="btnBook()"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <adminNav :isLogin="true" />
    <main class="flex flex-wrap relative">
      <adminSide :isLogin="true" />
      <section class="mt-48 w-5/6">
        <div class="hero bg-white mx-auto w-11/12">
          <div class="top-bar flex justify-between">
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2 px-3">
                <img src="~/assets/USER/nav/search_black_24dp.svg" alt="" />
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
            <div class="flex items-center py-2 px-3">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="showModal = true"
              >
                Add Book
              </button>
            </div>
          </div>
          <div class="tableBook">
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2 w-1/12">Book ID</th>
                  <th class="px-4 py-2 w-2/12">Name</th>
                  <th class="px-4 py-2 w-1/12">Date</th>
                  <th class="px-4 py-2 w-1/12">AUTHOR</th>
                  <th class="px-4 py-2 w-1/12">TYPE</th>
                  <th class="px-4 py-2 w-1/12">Description</th>
                  <th class="px-4 py-2 w-1/12">price</th>
                  <th class="px-4 py-2 w-1/12">Amount</th>
                  <th class="px-4 py-2 w-1/12">popular</th>
                  <th class="px-4 py-2 w-2/12">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, index) in 20" :key="index">
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">Annette Black</td>
                  <td class="border px-4 py-2">2020</td>
                  <td class="border px-4 py-2">
                    <p>mac</p>
                    <p>mac</p>
                  </td>
                  <td class="border px-4 py-2">
                    <p>Sex</p>
                    <p>Porn</p>
                  </td>
                  <td class="border px-4 py-2 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    aut exercitationem officiis eaque! Maxime qui officiis in
                    eum! Rem eum facere animi maiores culpa fuga beatae
                    veritatis harum quos velit?
                  </td>
                  <td class="border px-4 py-2">125</td>
                  <td class="border px-4 py-2">25</td>
                  <td class="border px-4 py-2">
                    <span class="text-green-600"> Yes </span>
                    <span class="text-red-600"> No </span>
                  </td>
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
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Error form
      errorName: false,
      errorDate: false,
      errorDescription: false,
      errorPrice: false,
      errorAmount: false,
      //models
      showModal: false,
      // Data Books
      bookName: "",
      bookDate: "",
      bookAuthor: [{ name: "", error: false }],
      bookType: [{ name: "", error: false }],
      bookDescription: "",
      bookPrice: "",
      bookAmount: "",
      bookpopular: false,
      url: null,
    };
  },
  methods: {
    //Add Book to database method (need module axios)
    async addBook(book) {
      const status = await this.$axios.post("admin/addBook", book);
      console.log(status.data.massage);
      return { status };
    },

    btnBook() {
      if (this.chackForm()) {
        const author = [];
        this.bookAuthor.forEach((value) => {
          const name = value.name.split(" ");
          author.push({
            author_fname: name[0],
            author_lname: name[1] === undefined ? "" : name[1],
          });
        });

        const type = [];
        this.bookType.forEach((value) => {
          type.push({
            type_name: value.name,
          });
        });

        var book = {
          book_name: this.bookName,
          pb_year: this.bookDate,
          price: this.bookPrice,
          book_amount: this.bookAmount,
          description: this.bookDescription,
          popular: this.bookpopular,
          author: author,
          type: type,
          // book_image: "", //Testing
        };

        this.addBook(book);
      }
    },
    addInput(status) {
      if (status == "author") {
        this.bookAuthor.push({ name: "", error: false });
      } else if (status == "type") {
        this.bookType.push({ name: "", error: false });
      }
    },
    deleteInput(index, status) {
      if (status == "author") {
        this.bookAuthor.splice(index, 1);
      } else if (status == "type") {
        this.bookType.splice(index, 1);
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    clear() {
      this.bookName = "";
      this.bookDate = "";
      this.bookDescription = "";
      this.bookPrice = "";
      this.bookAmount = "";
      this.bookpopular = false;
      this.bookAuthor = [{ name: "", error: false }];
      this.bookType = [{ name: "", error: false }];
    },
    chackForm() {
      const author = this.bookAuthor.filter((val) => !!val.name);
      const type = this.bookType.filter((val) => !!val.name);
      if (
        !!this.bookName &&
        !!this.bookDate &&
        !!this.bookDescription &&
        !!this.bookPrice &&
        !!this.bookAmount
      ) {
        if (
          author.length === this.bookAuthor.length &&
          type.length === this.bookType.length
        ) {
          return true;
        } else if (author.length === this.bookAuthor.length) {
          this.bookType.forEach((val) => {
            if (!val.name) {
              val.error = true;
            }
          });
          return false;
        } else {
          this.bookAuthor.forEach((val) => {
            if (!val.name) {
              val.error = true;
            }
          });
          return false;
        }
      } else {
        this.errorName = !this.bookName ? true : false;
        this.errorDate = !this.bookDate ? true : false;
        this.errorDescription = !this.bookDescription ? true : false;
        this.errorPrice = !this.bookPrice ? true : false;
        this.errorAmount = !this.bookAmount ? true : false;
        this.bookType.forEach((val) => {
          if (!val.name) {
            val.error = true;
          }
        });
        this.bookAuthor.forEach((val) => {
          if (!val.name) {
            val.error = true;
          }
        });
      }
      return false;
    },
  },
};
</script>

<style></style>

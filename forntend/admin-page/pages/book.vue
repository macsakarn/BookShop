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
                $v.$reset()
                showModal = false
                clear()
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
                    :class="{ 'border-red-500': $v.bookName.$error }"
                    v-model="$v.bookName.$model"
                  />
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookName.$error"
                  >
                    <p v-show="!$v.bookName.required">
                      Please fill out this field.
                    </p>
                  </div>
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
                    v-model="$v.bookDate.$model"
                    type="text"
                    :class="{ 'border-red-500': $v.bookDate.$error }"
                  />
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookDate.$error"
                  >
                    <p v-show="!$v.bookDate.required">
                      Please fill out this field.
                    </p>
                    <p v-show="!$v.bookDate.year">Year only</p>
                  </div>
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
                    v-model="$v.bookDescription.$model"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    :class="{ 'border-red-500': $v.bookDescription.$error }"
                  >
                  </textarea>
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookDescription.$error"
                  >
                    <p v-show="!$v.bookDescription.required">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-1/2">
                  <div class="w-4/5 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Amount
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="$v.bookAmount.$model"
                      :class="{ 'border-red-500': $v.bookAmount.$error }"
                    />
                    <div
                      class="text-red-500 text-xs italic"
                      v-show="$v.bookAmount.$error"
                    >
                      <p v-show="!$v.bookAmount.required">
                        Please fill out this field.
                      </p>
                      <p v-show="!$v.bookAmount.min">Must be greater than 0</p>
                      <p v-show="!$v.bookAmount.num">number only</p>
                    </div>
                  </div>
                  <div class="w-4/5 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      price
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="$v.bookPrice.$model"
                      :class="{ 'border-red-500': $v.bookPrice.$error }"
                    />
                    <div
                      class="text-red-500 text-xs italic"
                      v-show="$v.bookPrice.$error"
                    >
                      <p v-show="!$v.bookPrice.required">
                        Please fill out this field.
                      </p>
                      <p v-show="!$v.bookPrice.min">Must be greater than 0</p>
                      <p v-show="!$v.bookPrice.num">number only</p>
                    </div>
                  </div>
                  <label class="w-4/5 px-3 mb-6 md:mb-0">
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      v-model="bookpopular"
                    />
                    <span class="ml-2">Popular</span>
                  </label>
                </div>

                <div class="w-1/2 md:w-6/12 px-3 mb-6 md:mb-0">
                  <img
                    :src="urlImage"
                    v-show="urlImage !== '#'"
                    alt="Book image"
                    width="150"
                  />

                  <div
                    class="overflow-hidden relative w-full rounded-lg mt-4 cursor-pointer"
                  >
                    <div
                      class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full inline-flex items-center"
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
                      <span class="ml-2">Uplord Image</span>
                    </div>
                    <input
                      class="absolute block opacity-0 right-0 top-0"
                      type="file"
                      accept="image/*"
                      @change="selectImages"
                    />
                  </div>
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
                    v-for="(inputAuthor, index) in $v.bookAuthor.$each.$iter"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputAuthor.name.$model"
                      :class="{ 'border-red-500': inputAuthor.name.$error }"
                    />
                    <span @click="bookAuthor.push({ name: '' })">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span @click="bookAuthor.pop()" v-show="index > 0">
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
                    v-for="(inputType, index) in $v.bookType.$each.$iter"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputType.name.$model"
                      :class="{ 'border-red-500': inputType.name.$error }"
                    />
                    <span @click="bookType.push({ name: '' })">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span @click="bookType.pop()" v-show="index > 0">
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
              class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="
                showModal = false
                $v.$reset()
              "
            >
              Close
            </button>
            <button
              class="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              @click="btnBook()"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showEdit"
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
            <h3 class="text-3xl font-semibold">Edit Book</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="
                $v.$reset()
                showEdit = false
                clear()
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
                    :class="{ 'border-red-500': $v.bookName.$error }"
                    v-model="$v.bookName.$model"
                  />
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookName.$error"
                  >
                    <p v-show="!$v.bookName.required">
                      Please fill out this field.
                    </p>
                  </div>
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
                    v-model="$v.bookDate.$model"
                    type="text"
                    :class="{ 'border-red-500': $v.bookDate.$error }"
                  />
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookDate.$error"
                  >
                    <p v-show="!$v.bookDate.required">
                      Please fill out this field.
                    </p>
                    <p v-show="!$v.bookDate.year">Year only</p>
                  </div>
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
                    v-model="$v.bookDescription.$model"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    :class="{ 'border-red-500': $v.bookDescription.$error }"
                  >
                  </textarea>
                  <div
                    class="text-red-500 text-xs italic"
                    v-show="$v.bookDescription.$error"
                  >
                    <p v-show="!$v.bookDescription.required">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-1/2">
                  <div class="w-4/5 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Amount
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="$v.bookAmount.$model"
                      :class="{ 'border-red-500': $v.bookAmount.$error }"
                    />
                    <div
                      class="text-red-500 text-xs italic"
                      v-show="$v.bookAmount.$error"
                    >
                      <p v-show="!$v.bookAmount.required">
                        Please fill out this field.
                      </p>
                      <p v-show="!$v.bookAmount.min">Must be greater than 0</p>
                      <p v-show="!$v.bookAmount.num">number only</p>
                    </div>
                  </div>
                  <div class="w-4/5 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      price
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="$v.bookPrice.$model"
                      :class="{ 'border-red-500': $v.bookPrice.$error }"
                    />
                    <div
                      class="text-red-500 text-xs italic"
                      v-show="$v.bookPrice.$error"
                    >
                      <p v-show="!$v.bookPrice.required">
                        Please fill out this field.
                      </p>
                      <p v-show="!$v.bookPrice.min">Must be greater than 0</p>
                      <p v-show="!$v.bookPrice.num">number only</p>
                    </div>
                  </div>
                  <label class="w-4/5 px-3 mb-6 md:mb-0">
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      v-model="bookpopular"
                    />
                    <span class="ml-2">Popular</span>
                  </label>
                </div>

                <div class="w-1/2 md:w-6/12 px-3 mb-6 md:mb-0">
                  <img :src="urlImage" alt="Book image" width="150" />

                  <div class="overflow-hidden relative w-full rounded-lg mt-4">
                    <button
                      class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full inline-flex items-center"
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
                      <span class="ml-2">Uplord Image</span>
                    </button>
                    <input
                      class="cursor-pointer absolute block opacity-0 right-0 top-0"
                      type="file"
                      accept="image/*"
                      @change="selectImages"
                    />
                  </div>
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
                    v-for="(inputAuthor, index) in $v.bookAuthor.$each.$iter"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputAuthor.name.$model"
                      :class="{ 'border-red-500': inputAuthor.name.$error }"
                    />
                    <span @click="bookAuthor.push({ name: '' })">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span @click="bookAuthor.pop()" v-show="index > 0">
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
                    v-for="(inputType, index) in $v.bookType.$each.$iter"
                    :key="index"
                  >
                    <input
                      class="py-2 appearance-none block w-4/6 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      v-model="inputType.name.$model"
                      :class="{ 'border-red-500': inputType.name.$error }"
                    />
                    <span @click="bookType.push({ name: '' })">
                      <img
                        src="~/assets/ADMIN/add_black_24dp.svg"
                        alt=""
                        class="inline mx-1"
                      />
                    </span>
                    <span @click="bookType.pop()" v-show="index > 0">
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
              class="text-yellow-500 bg-transparent border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="
                showEdit = false
                $v.$reset()
                clear()
              "
            >
              Close
            </button>
            <button
              class="text-yellow-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              @click="btnEdit()"
            >
              Edit book
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showDelete"
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
            <h3 class="text-3xl font-semibold">Delete book</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="showDelete = false"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <div class="relative p-6 flex-auto">
            <p class="text-blueGray-500 text-lg leading-relaxed">
              คุณลบหนังสือ ID : <span class="text-red-700">{{ deleteID }}</span>
            </p>
            <p class="text-lg leading-relaxed">
              คุณลบหนังสือ Name :
              <span class="text-red-700">{{ deleteText }}</span>
            </p>
            <p class="my-4 text-gray-600 leading-relaxed">
              * หนังสือที่ลบแล้วจะหายไปจากข้อมูล ไม่สามารถนำกลับมาได้อีกต่อไป
            </p>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="showDelete = false"
            >
              Cencel
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="deleteBook(deleteID, deleteIndex)"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showDelete || showEdit || showModal"
      class="opacity-75 fixed inset-0 z-40 bg-black"
    ></div>
    <section>
      <adminDashBoard class="mb-4 mx-2" />
      <div class="hero bg-white mx-4">
        <div class="top-bar flex justify-between">
          <form class="w-full max-w-sm">
            <div class="flex items-center py-2 px-3">
              <img src="~/assets/ADMIN/search_black_24dp.svg" alt="" />
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
                v-model="search"
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
          <table class="table-fixed w-full mb-12">
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
              <tr v-for="(book, index) in books" :key="index">
                <td class="border px-4 py-2">{{ book.book_id }}</td>
                <td class="border px-4 py-2 truncate">
                  {{ book.book_name }}
                </td>
                <td class="border px-4 py-2">{{ book.pb_year }}</td>
                <td class="border px-4 py-2">
                  <p
                    v-for="(author, index) in book.author_name"
                    :key="index"
                    class="truncate"
                  >
                    <span>
                      {{ author }}
                    </span>
                  </p>
                </td>
                <td class="border px-4 py-2">
                  <p
                    v-for="(type, index) in book.type"
                    :key="index"
                    class="truncate"
                  >
                    <span class="">
                      {{ type }}
                    </span>
                  </p>
                </td>
                <td class="border px-4 py-2 truncate">
                  {{ book.description }}
                </td>
                <td class="border px-4 py-2">{{ book.price }}</td>
                <td class="border px-4 py-2">{{ book.book_amount }}</td>
                <td class="border px-4 py-2">
                  <span class="text-green-600" v-show="book.popular">
                    Yes
                  </span>
                  <span class="text-red-600" v-show="!book.popular"> No </span>
                </td>
                <td class="border px-4 py-2">
                  <div class="icon text-center">
                    <img
                      src="~/assets/ADMIN/Edit.svg"
                      alt="edit"
                      class="inline mx-3 cursor-pointer"
                      @click="edit(book)"
                    />
                    <img
                      src="~/assets/ADMIN/Group.svg"
                      alt="delete"
                      class="inline mx-3 cursor-pointer"
                      @click="btnDelete(book.book_id, book.book_name, index)"
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
import { required, minValue, minLength } from 'vuelidate/lib/validators'
import * as BookApi from '@/utils/bookApi'

export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const bookAll = await $axios.$get('/public/fetchAllBooks')
    return { bookAll }
  },
  data() {
    return {
      //models
      showModal: false,
      showEdit: false,
      showDelete: false,
      // Data Books
      bookName: '',
      bookDate: '',
      bookAuthor: [{ name: '' }],
      bookType: [{ name: '' }],
      bookDescription: '',
      bookPrice: '',
      bookAmount: '',
      bookpopular: false,
      images: null,
      //
      search: '',
      //
      deleteText: '',
      deleteID: 0,
      deleteIndex: 0,
    }
  },
  validations: {
    bookName: {
      required,
    },
    bookDate: {
      required,
      year(value) {
        const re = /^\d+$/
        return re.test(value)
      },
    },
    bookDescription: {
      required,
    },
    bookAmount: {
      required,
      min: minValue(1),
      num(value) {
        const re = /^\d+$/
        return re.test(value)
      },
    },
    bookPrice: {
      required,
      min: minValue(1),
      num(value) {
        const re = /^\d+$/
        return re.test(value)
      },
    },
    bookAuthor: {
      required,
      minLength: minLength(1),
      $each: {
        name: {
          required,
        },
      },
    },
    bookType: {
      required,
      minLength: minLength(1),
      $each: {
        name: {
          required,
        },
      },
    },
  },
  computed: {
    books() {
      const books = this.bookAll.filter((val) =>
        val.book_name.includes(this.search)
      )
      return books
    },
    urlImage() {
      if (this.images === null) {
        return '#'
      }
      var url = '#'
      if (this.showModal === true && typeof this.images === 'object') {
        console.log('wow')
        url = URL.createObjectURL(this.images[0])
      } else if (this.showEdit === true) {
        if (typeof this.images === 'object') {
          url = URL.createObjectURL(this.images[0])
        } else if (typeof this.images === 'string') {
          url = 'http://localhost:3000' + this.images
        }
      }
      return url
    },
  },
  methods: {
    //Add Book to database method (need module axios)
    async addBook(book) {
      this.clear()
      const res = await BookApi.addbook(book)
      alert(res.data.massage)
    },
    //Update Book to database method (need module axios)
    async updateBook(book) {
      // this.$axios.put('admin/addBook', book)
      this.clear()
    },
    //DELETE Book to database method (need module axios)
    async deleteBook(id, index) {
      this.clear()
      const res = await BookApi.deletebook(id)
      console.log(res)
      this.bookAll.splice(index, 1)
      alert(res.data.massage)
    },
    selectImages(event) {
      this.images = null
      this.images = event.target.files
    },
    btnBook() {
      this.$v.$touch()
      if (!this.$v.$invalid && this.images !== null) {
        const addAutor = []
        const author = []
        this.bookAuthor.forEach((value) => {
          const name = value.name.split(' ')
          author.push({
            author_fname: name[0],
            author_lname: name[1] === undefined ? '' : name[1],
          })
          addAutor.push(value.name)
        })

        const addType = []
        const type = []
        this.bookType.forEach((value) => {
          type.push({
            type_name: value.name,
          })
          addType.push(value.name)
        })

        const JSON_author = JSON.stringify(author)
        const JSON_type = JSON.stringify(type)

        let formData = new FormData()
        formData.append('book_name', this.bookName)
        formData.append('pb_year', this.bookDate)
        formData.append('price', this.bookPrice)
        formData.append('book_amount', this.bookAmount)
        formData.append('description', this.bookDescription)
        formData.append('popular', this.bookpopular ? 1 : 0)
        formData.append('author', JSON_author)
        formData.append('type', JSON_type)
        formData.append('bookImage', this.images[0])

        this.bookAll.push({
          book_id: this.bookAll[this.bookAll.length - 1].book_id + 1,
          book_name: this.bookName,
          pb_year: this.bookDate,
          price: this.bookPrice,
          book_amount: this.bookAmount,
          description: this.bookDescription,
          popular: this.bookpopular,
          author: addAutor,
          type: addType,
          // book_image: "", //Testing
        })
        this.addBook(formData)
      } else if (this.images === null) {
        alert('input image')
      }
    },
    clear() {
      this.$v.$reset()
      this.bookName = ''
      this.bookDate = ''
      this.bookDescription = ''
      this.bookPrice = ''
      this.bookAmount = ''
      this.bookpopular = false
      this.bookAuthor = [{ name: '' }]
      this.bookType = [{ name: '' }]
      this.images = null
      this.deleteText = ''
      this.deleteID = 0
      this.deleteIndex = 0
      this.showDelete = false
      this.showModal = false
      this.showEdit = false
    },
    edit(book) {
      this.bookAuthor = []
      this.bookType = []
      this.showEdit = true
      this.bookName = book.book_name
      this.bookDate = book.pb_year
      this.bookDescription = book.description
      this.bookPrice = book.price
      this.bookAmount = book.book_amount
      this.bookpopular = book.popular
      this.images = book.book_image
      book.author_name.forEach((val) => {
        this.bookAuthor.push({ name: val })
      })
      book.type.forEach((val) => {
        this.bookType.push({ name: val })
      })
    },
    btnEdit() {
      if (!this.$v.$invalid) {
        const author = []
        this.bookAuthor.forEach((value) => {
          const name = value.name.split(' ')
          author.push({
            author_fname: name[0],
            author_lname: name[1] === undefined ? '' : name[1],
          })
        })

        const type = []
        this.bookType.forEach((value) => {
          type.push({
            type_name: value.name,
          })
        })

        const JSON_author = JSON.stringify(author)
        const JSON_type = JSON.stringify(type)

        let formData = new FormData()
        formData.append('book_name', this.bookName)
        formData.append('pb_year', this.bookDate)
        formData.append('price', this.bookPrice)
        formData.append('book_amount', this.bookAmount)
        formData.append('description', this.bookDescription)
        formData.append('popular', this.bookpopular ? 1 : 0)
        formData.append('author', JSON_author)
        formData.append('type', JSON_type)
        if (typeof this.images === 'object') {
          console.log('New image')
          formData.append('bookImage', this.images[0])
        }
        this.showEdit = false
        this.updateBook(formData)
      } else {
        alert('Error something')
      }
    },
    btnDelete(id, name, index) {
      this.showDelete = true
      this.deleteText = name
      this.deleteID = id
      this.deleteIndex = index
    },
  },
}
</script>

<style></style>

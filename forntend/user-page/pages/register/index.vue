<template>
  <div class="container px-16 mx-auto">
    <main class="flex py-40">
      <div class="w-1/2">
        <img
          src="~/assets/undraw_book_lover_mkck.svg"
          alt="Hey"
          class="px-4"
          width="600"
        />
      </div>
      <div class="w-1/2 bg-gray-200 rounded-lg shadow-lg ml-32">
        <div class="mx-10 my-10">
          <section v-if="sec1 === 1">
            <p class="text-3xl text-center">Register</p>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500">UserName</label>
              <input
                v-model="username"
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': errorUsername }"
                @click="errorUsername = false"
              />
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                v-model="password"
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': errorPassword }"
                @click="errorPassword = false"
              />
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500"
                >Repeat Password</label
              >
              <input
                v-model="passwordRepeat"
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': errorPasswordRepeat }"
                @click="errorPasswordRepeat = false"
              />
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                v-model="email"
                type="mail"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': errorEmail }"
                @click="errorEmail = false"
              />
            </div>
            <div
              @click="nextRegister()"
              class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-40 cursor-pointer my-4 mx-auto"
            >
              <p class="text-white mx-auto">Next</p>
            </div>
          </section>
          <section v-else-if="sec1 === 2">
            <p class="text-3xl text-center">Register</p>
            <div class="my-4 flex">
              <div class="w-1/2 mx-1">
                <label class="block mb-1 font-bold text-gray-500"
                  >FirstName</label
                >
                <input
                  v-model="firstName"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': errorFirstName }"
                  @click="errorFirstName = false"
                />
              </div>
              <div class="w-1/2 mx-1">
                <label class="block mb-1 font-bold text-gray-500"
                  >LastName</label
                >
                <input
                  v-model="lastname"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': errorLastname }"
                  @click="errorLastname = false"
                />
              </div>
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500"
                >Phone Number</label
              >
              <input
                v-model="phone"
                type="tel"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': errorPhone }"
                @click="errorPhone = false"
              />
            </div>
            <div class="flex">
              <div
                @click="sec1 = 1"
                class="bg-gray-500 hover:bg-gray-600 py-3 px-3 rounded-md flex w-40 cursor-pointer my-4 mx-auto"
              >
                <p class="text-white mx-auto">Back</p>
              </div>
              <div
                @click="nextRegister()"
                class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-40 cursor-pointer my-4 mx-auto"
              >
                <p class="text-white mx-auto">Next</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sec1: 1,
      errorUsername: false,
      errorPassword: false,
      errorPasswordRepeat: false,
      errorEmail: false,
      errorFirstName: false,
      errorLastname: false,
      errorPhone: false,

      username: null,
      password: null,
      passwordRepeat: null,
      email: null,

      firstName: null,
      lastname: null,
      phone: null,
    }
  },
  methods: {
    nextRegister() {
      if (
        !!this.email &&
        !!this.username &&
        !!this.password &&
        !!this.passwordRepeat
      ) {
        if (this.password != this.passwordRepeat) {
          this.errorPassword = true
          this.errorPasswordRepeat = true
        } else if (!this.validateEmail(this.email)) {
          this.errorEmail = true
        } else {
          this.sec1 = 2
        }
      } else {
        this.errorUsername = !this.username ? true : false
        this.errorPassword = !this.password ? true : false
        this.errorPasswordRepeat = !this.passwordRepeat ? true : false
        this.errorEmail = !this.email ? true : false
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

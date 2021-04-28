<template>
  <div class="container px-16 mx-auto">
    <main class="flex py-40">
      <div class="w-1/2">
        <img
          src="~/assets/undraw_Login_re_4vu2.svg"
          alt="Hey"
          class="px-4 mt-10"
          width="600"
        />
      </div>
      <div class="w-1/2 bg-gray-200 rounded-lg shadow-lg ml-32">
        <div class="mx-10 my-10">
          <div class="my-5 mx-10">
            <h2
              class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
            >
              Log in
            </h2>

            <div class="mt-12">
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Username or email address
                </div>
                <input
                  class="w-full border-2 p-3 rounded outline-none"
                  type="text"
                  :class="{
                    'border-red-500 focus:border-red-500': $v.userLogin.$error,
                    'focus:border-purple-500 border-gray-200 ': !$v.userLogin
                      .$error,
                  }"
                  v-model="$v.userLogin.$model"
                />
                <div v-show="$v.userLogin.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.userLogin.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="mt-8">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  class="w-full border-2 p-3 rounded outline-none"
                  type="password"
                  placeholder="Enter your password"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      $v.userPassword.$error,
                    'focus:border-purple-500 border-gray-200 ': !$v.userPassword
                      .$error,
                  }"
                  v-model="$v.userPassword.$model"
                />
                <div v-show="$v.userPassword.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.userPassword.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="mt-10">
                <button
                  class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                  @click="login()"
                >
                  Log In
                </button>
              </div>

              <div
                class="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
              >
                Don't have an account ?
                <a
                  class="cursor-pointer text-indigo-600 hover:text-indigo-800"
                  @click="$router.push({ name: 'register' })"
                  >Sign up</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      userLogin: '',
      userPassword: '',
    }
  },
  validations: {
    userLogin: {
      required,
    },
    userPassword: {
      required,
    },
  },
  methods: {
    sendlogin(data) {
      console.log(data)
    },
    login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const data = {
          username: this.userLogin,
          password: this.userPassword,
        }
        this.userLogin = ''
        this.userPassword = ''
        this.sendlogin(data)
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>

<style></style>

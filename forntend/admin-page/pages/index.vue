<template>
  <div>
    <transition name="fade">
      <div
        key="login"
        v-if="!showRegister"
        class="w-1/4 bg-gray-200 rounded-lg shadow-2xl absolute hero"
      >
        <form class="my-5 m-10" @submit.prevent>
          <h2
            class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
          >
            Admin login
          </h2>

          <div class="mt-12">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                class="w-full border-2 p-3 rounded outline-none"
                type="text"
                :class="{
                  'border-red-500 focus:border-red-500':
                    $v.loginForm.username.$error,
                  'focus:border-purple-500 border-gray-200 ': !$v.loginForm
                    .username.$error,
                }"
                v-model="$v.loginForm.username.$model"
              />
              <div
                v-show="$v.loginForm.username.$error"
                class="text-red-500 text-sm"
              >
                <p v-show="!$v.loginForm.username.required">
                  This field is required
                </p>
                <p v-show="!$v.loginForm.username.email">E-mail only</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                class="w-full border-2 p-3 rounded outline-none"
                type="password"
                placeholder="Enter your password"
                :class="{
                  'border-red-500 focus:border-red-500':
                    $v.loginForm.password.$error,
                  'focus:border-purple-500 border-gray-200 ': !$v.loginForm
                    .password.$error,
                }"
                @keyup.enter="login"
                v-model="$v.loginForm.password.$model"
              />
              <div v-show="$v.loginForm.password.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.loginForm.password.required"
                >
                  This field is required
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.loginForm.password.minLength"
                >
                  Use at least 8 characters
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.loginForm.password.complex"
                >
                  At least 1 UPPER CASE and 1 number
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
                @click="showRegister = true"
                >Sign up</a
              >
            </div>
          </div>
        </form>
      </div>
      <div
        v-else
        key="resister"
        class="w-1/3 bg-gray-200 rounded-lg shadow-2xl absolute hero"
      >
        <div class="my-5 mx-10">
          <h2
            class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
          >
            Admin register
          </h2>

          <div class="mt-12">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                class="w-full border-2 p-3 rounded outline-none"
                type="text"
                :class="{
                  'border-red-500 focus:border-red-500':
                    $v.registerForm.username.$error,
                  'focus:border-purple-500 border-gray-200 ': !$v.registerForm
                    .username.$error,
                }"
                v-model="$v.registerForm.username.$model"
              />
              <div
                v-show="$v.registerForm.username.$error"
                class="text-red-500 text-sm"
              >
                <p v-show="!$v.registerForm.username.required">
                  This field is required
                </p>
                <p v-show="!$v.registerForm.username.email">E-mail only</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                class="w-full border-2 p-3 rounded outline-none"
                type="password"
                :class="{
                  'border-red-500 focus:border-red-500':
                    $v.registerForm.password.$error,
                  'focus:border-purple-500 border-gray-200 ': !$v.registerForm
                    .password.$error,
                }"
                v-model="$v.registerForm.password.$model"
              />
              <div v-show="$v.registerForm.password.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.registerForm.password.required"
                >
                  This field is required
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.registerForm.password.minLength"
                >
                  Use at least 8 characters
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.registerForm.password.complex"
                >
                  At least 1 UPPER CASE and 1 number
                </p>
              </div>
            </div>
            <div class="mt-8 flex">
              <div class="w-1/3 mr-2">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    First Name
                  </div>
                </div>
                <input
                  class="w-full border-2 p-3 rounded outline-none"
                  type="text"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      $v.registerForm.fname.$error,
                    'focus:border-purple-500 border-gray-200 ': !$v.registerForm
                      .fname.$error,
                  }"
                  v-model="$v.registerForm.fname.$model"
                />
                <div v-show="$v.registerForm.fname.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.registerForm.fname.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/3 mx-2">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Last Name
                  </div>
                </div>
                <input
                  class="w-full border-2 p-3 rounded outline-none"
                  type="text"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      $v.registerForm.lname.$error,
                    'focus:border-purple-500 border-gray-200 ': !$v.registerForm
                      .lname.$error,
                  }"
                  v-model="$v.registerForm.lname.$model"
                />
                <div v-show="$v.registerForm.lname.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.registerForm.lname.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/3 ml-2">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-red-500 tracking-wide">
                    Secret Code
                  </div>
                </div>
                <input
                  class="w-full border-2 p-3 rounded outline-none"
                  type="text"
                  :class="{
                    'border-red-500 focus:border-red-500':
                      $v.registerForm.secretCode.$error,
                    'focus:border-purple-500 border-gray-200 ': !$v.registerForm
                      .secretCode.$error,
                  }"
                  v-model="$v.registerForm.secretCode.$model"
                />
                <div v-show="$v.registerForm.secretCode.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.registerForm.secretCode.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button
                class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                @click="register()"
              >
                Register
              </button>
            </div>

            <div
              class="mt-2 text-sm font-display font-semibold text-gray-700 text-center"
            >
              <a
                class="cursor-pointer text-indigo-600 hover:text-indigo-800"
                @click="showRegister = false"
                >Login</a
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      showRegister: false,
      loginForm: {
        username: '',
        password: '',
      },
      registerForm: {
        fname: '',
        lname: '',
        username: '',
        password: '',
        secretCode: '',
      },
    }
  },
  created() {
    if (this.$store.state.auth.loggedIn) {
      this.$router.replace({ name: 'home' })
    }
  },
  validations: {
    loginForm: {
      username: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        complexPassword(value) {
          if (
            !(
              value.match(/[a-z]/) &&
              value.match(/[A-Z]/) &&
              value.match(/[0-9]/)
            )
          ) {
            return false
          }
          return true
        },
      },
    },
    registerForm: {
      fname: { required },
      lname: { required },
      username: { required, email },
      password: {
        required,
        minLength: minLength(8),
        complexPassword(value) {
          if (
            !(
              value.match(/[a-z]/) &&
              value.match(/[A-Z]/) &&
              value.match(/[0-9]/)
            )
          ) {
            return false
          }
          return true
        },
      },
      secretCode: { required },
    },
  },
  methods: {
    async sendlogin(data) {
      try {
        let response = await this.$auth.loginWith('local', { data })
        this.$axios.setToken(this.$auth.strategy.token.get())
        console.log(response)
        if (response.data.status) {
          this.$router.push({ name: 'home' })
        }
      } catch (err) {
        alert("I can't find account")
      }
    },
    async sendRegister(data) {
      console.log(data)
      this.$axios
        .post('/admin/register', data)
        .then((response) => {
          // handle success
          console.log(response)
          if (response.data.status) {
            setTimeout(() => {
              this.showRegister = false
            }, 1000)
          } else {
            alert(response.data.massage)
          }
        })
        .catch((err) => {
          alert('Access denied')
        })
    },
    login() {
      this.$v.loginForm.$touch()
      if (!this.$v.loginForm.$invalid) {
        this.sendlogin(this.loginForm)
      }
    },
    register() {
      this.$v.registerForm.$touch()
      if (!this.$v.registerForm.$invalid) {
        const data = this.registerForm
        this.sendRegister(data)
      }
    },
  },
}
</script>

<style scoped>
.hero {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

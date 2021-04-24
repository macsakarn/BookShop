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
                v-model="$v.form1.username.$model"
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': $v.form1.username.$error }"
              />
              <div v-show="$v.form1.username.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.username.required"
                >
                  This field is required
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.username.minLength"
                >
                  Use at least 8 characters
                </p>
              </div>
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                v-model="$v.form1.password.$model"
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': $v.form1.password.$error }"
              />
              <div v-show="$v.form1.password.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.password.required"
                >
                  This field is required
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.password.minLength"
                >
                  Use at least 8 characters
                </p>
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.password.complex"
                >
                  At least 1 UPPER CASE and 1 number
                </p>
              </div>
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500"
                >Repeat Password</label
              >
              <input
                v-model="$v.form1.passwordRepeat.$model"
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': $v.form1.passwordRepeat.$error }"
              />
              <div v-show="$v.form1.passwordRepeat.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.passwordRepeat.sameAsPassword"
                >
                  Incorrect password confirmation
                </p>
              </div>
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                v-model="$v.form1.email.$model"
                type="mail"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': $v.form1.email.$error }"
              />
              <div v-show="$v.form1.email.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form1.email.required"
                >
                  This field is required
                </p>
                <p class="text-red-500 text-sm" v-show="!$v.form1.email.email">
                  Invalid email specified
                </p>
              </div>
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
                  v-model="$v.form2.firstName.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.firstName.$error }"
                />
                <div v-show="$v.form2.firstName.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.firstName.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/2 mx-1">
                <label class="block mb-1 font-bold text-gray-500"
                  >LastName</label
                >
                <input
                  v-model="$v.form2.lastname.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.lastname.$error }"
                />
                <div v-show="$v.form2.lastname.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.lastname.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4">
              <label class="block mb-1 font-bold text-gray-500"
                >Phone Number</label
              >
              <input
                v-model="$v.form2.phone.$model"
                type="tel"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                :class="{ 'border-red-500': $v.form2.phone.$error }"
              />
              <div v-show="$v.form2.phone.$error">
                <p
                  class="text-red-500 text-sm"
                  v-show="!$v.form2.phone.required"
                >
                  This field is required
                </p>
                <p class="text-red-500 text-sm" v-show="!$v.form2.phone.mobile">
                  Invalid Mobile Number
                </p>
              </div>
            </div>
            <div class="my-4 flex">
              <div class="w-1/3 mx-1">
                <label class="block mb-1 font-bold text-gray-500">County</label>
                <input
                  v-model="$v.form2.county.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.county.$error }"
                />
                <div v-show="$v.form2.county.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.county.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/3 mx-1">
                <label class="block mb-1 font-bold text-gray-500"
                  >District</label
                >
                <input
                  v-model="$v.form2.district.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.district.$error }"
                />
                <div v-show="$v.form2.district.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.district.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/3 mx-1">
                <label class="block mb-1 font-bold text-gray-500">City</label>
                <input
                  v-model="$v.form2.city.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.city.$error }"
                />
                <div v-show="$v.form2.city.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.city.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 flex">
              <div class="w-1/2 mx-1">
                <label class="block mb-1 font-bold text-gray-500"
                  >Street Address</label
                >
                <input
                  v-model="$v.form2.street.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.street.$error }"
                />
                <div v-show="$v.form2.street.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.street.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div class="w-1/2 mx-1">
                <label class="block mb-1 font-bold text-gray-500">Zip</label>
                <input
                  v-model="$v.form2.zip.$model"
                  type="name"
                  class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  :class="{ 'border-red-500': $v.form2.zip.$error }"
                />
                <div v-show="$v.form2.zip.$error">
                  <p
                    class="text-red-500 text-sm"
                    v-show="!$v.form2.zip.required"
                  >
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            <div class="flex">
              <div
                @click="sec1 = 1"
                class="bg-gray-500 hover:bg-gray-600 py-3 px-3 rounded-md flex w-40 cursor-pointer my-4 mx-auto"
              >
                <p class="text-white mx-auto">Back</p>
              </div>
              <div
                @click="willRegister()"
                class="bg-yellow-500 hover:bg-yellow-600 py-3 px-3 rounded-md flex w-40 cursor-pointer my-4 mx-auto"
              >
                <p class="text-white mx-auto">Next</p>
              </div>
            </div>
          </section>
          <section v-else-if="sec1 === 3">
            <p class="text-3xl text-center mt-32">You can now login.</p>
            <p class="text-gray-500 text-center pt-4">
              if you can't login Please wait 1 minute.
            </p>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      sec1: 1,

      form1: {
        username: null,
        password: null,
        passwordRepeat: null,
        email: null,
      },

      form2: {
        firstName: '',
        lastname: '',
        phone: '',
        county: '',
        district: '',
        city: '',
        street: '',
        zip: '',
      },
    }
  },
  validations: {
    form1: {
      username: {
        required,
        minLength: minLength(8),
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
      passwordRepeat: {
        sameAsPassword: sameAs('password'),
      },
      email: {
        required,
        email,
      },
    },
    form2: {
      firstName: {
        required,
      },
      lastname: {
        required,
      },
      phone: {
        required,
        mobile(value) {
          return !!value.match(/0[0-9]{9}/)
        },
      },
      county: {
        required,
      },
      district: {
        required,
      },
      city: {
        required,
      },
      street: {
        required,
      },
      zip: {
        required,
      },
    },
  },
  methods: {
    async sendData(userdata) {
      //  const regisUser = await this.$axios.$post('/register', data)
      //  return { regisUser }
      await this.$axios.post('/register', userdata)
    },
    nextRegister() {
      this.$v.form1.$touch()
      if (!this.$v.form1.$invalid) {
        this.sec1 = 2
      }
    },
    willRegister() {
      this.$v.form2.$touch()
      if (!this.$v.form1.$invalid) {
        this.sec1 = 3
        const address = `${this.form2.county} ${this.form2.district} ${this.form2.city} ${this.form2.street} ${this.form2.zip}`

        const data = {
          customer: {
            fname: this.form2.firstName,
            lname: this.form2.lastname,
            email: this.form1.email,
            tel: this.form2.phone,
            address: address,
          },
          account: {
            username: this.form1.username,
            password: this.form1.password,
          },
        }
        console.log(data)
        this.sendData(data)
      }
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

<template>
  <div>
    <div
      v-if="showModal"
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
              v-on:click="showModal = false"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
            <h2
              class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
            >
              Log in
            </h2>

            <div class="mt-12">
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="book@gmail.com"
                  v-model="userLogin"
                />
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
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                  v-model="userPassword"
                />
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
                  @click="
                    $router.push({ name: 'register' })
                    showModal = false
                  "
                  >Sign up</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="fixed inset-0 w-full max-w-full h-24">
      <div class="container px-16 mx-auto flex justify-between items-center">
        <NuxtLink to="/">
          <img
            src="~/assets/USER/nav/logoShop.png"
            alt="logo"
            width="120"
            class="cursor-pointer"
          />
        </NuxtLink>

        <div class="flex items-center">
          <div class="mx-3 flex justify-between search-bar">
            <form class="w-full max-w-sm">
              <div class="flex items-center py-1 px-3 bg-white rounded-3xl">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search"
                />
                <img
                  src="~/assets/USER/nav/search_black_24dp.svg"
                  alt="icon search"
                />
              </div>
            </form>
          </div>
          <p class="mx-3 cursor-pointer text-gray-100 hover:text-gray-400">
            FIND A BOOKSTORE BROWSE
          </p>
          <img
            class="mx-3 cursor-pointer"
            src="~/assets/USER/nav/account_circle_black_24dp.svg"
            alt="logo"
            width="30"
            @click="showModal = true"
          />
          <img
            class="mx-3 cursor-pointer"
            src="~/assets/USER/nav/local_mall_black_24dp.svg"
            alt="logo"
            width="30"
          />
        </div>
      </div>
      <ul
        class="container px-16 mt-3 pt-1 mx-auto flex justify-between items-center border-t-2 border-gray-400"
      >
        <li class="text-md text-gray-300">
          <NuxtLink to="/"> Book </NuxtLink>
        </li>
      </ul>
    </nav>
    <Nuxt />
    <footer class="w-full max-w-full h-56">
      <div class="container mx-auto flex justify-between items-center">
        <div class="mt-12">
          <p class="text-xl mb-3">Shop</p>
          <p>Login</p>
          <p>Register</p>
        </div>
        <div class="mt-12">
          <p class="text-xl mb-3">Contacts</p>
          <div class="flex">
            <img
              class="mr-3 cursor-pointer"
              src="~/assets/USER/footer/email_black_24dp.svg"
              alt="logo"
              width="30"
            />
            <span>compagny@email.com</span>
          </div>
          <div class="flex">
            <img
              class="mr-3 cursor-pointer"
              src="~/assets/USER/footer/facebook_black_24dp.svg"
              alt="logo"
              width="30"
            />
            <span>compagny</span>
          </div>
        </div>
        <div class="mt-12">
          <p class="text-xl mb-3">© KMITL</p>
          <p>Faculty of Information Technology</p>
          <p>King Mongkut's Institute of Technology</p>
          <p>Ladkrabang 1 Chalongkrung Road Bangkok Thailand 10520</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      userLogin: null,
      userPassword: null,
    }
  },
  methods: {
    login() {
      console.log(this.userLogin)
      console.log(this.userPassword)
    },
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}
nav,
footer {
  background-color: #a1bdd0;
  z-index: 9999;
}

.search-bar {
  transition: all 0.5s ease-out;
  opacity: 1;
}

.search-bar-hide {
  opacity: 0;
  pointer-events: none;
}
</style>

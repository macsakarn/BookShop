<template>
  <div class="flex">
    <aside
      v-if="loggedIn"
      class="z-30 bg-white text-gray-700 font-semibold w-2/12 relative"
    >
      <div class="fixed h-full w-2/12">
        <p class="text-center mt-24">
          Admin : <span class="text-blue-600">{{ username }}</span>
        </p>
        <ul class="pt-20 text-gray-600">
          <NuxtLink :to="{ name: 'home' }">
            <li class="bth_home text-center my-10 mx-auto cursor-pointer">
              <svg
                class="inline fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                />
              </svg>
              <span class="align-bottom">Home</span>
            </li>
          </NuxtLink>
          <NuxtLink :to="{ name: 'book' }">
            <li class="bth_home text-center my-10 mx-auto cursor-pointer">
              <svg
                class="inline fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <g />
                  <g>
                    <path
                      d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
                    />
                    <g>
                      <path
                        d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
                      />
                      <path
                        d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
                      />
                      <path
                        d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span class="align-bottom">Book</span>
            </li>
          </NuxtLink>
          <NuxtLink :to="{ name: 'order' }">
            <li class="bth_home text-center my-10 mx-auto cursor-pointer">
              <svg
                class="inline fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"
                />
              </svg>

              <span class="align-bottom">Order</span>
            </li>
          </NuxtLink>
          <li
            class="bth_home text-center my-10 mx-auto cursor-pointer"
            @click="logout()"
          >
            <svg
              class="inline fill-current text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
              <g>
                <path
                  d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
                />
              </g>
            </svg>

            <span class="align-bottom">Logout</span>
          </li>
        </ul>
      </div>
    </aside>
    <main :class="{ ' w-10/12': loggedIn, ' w-full': !loggedIn }" class="mt-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'test sakarn',
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push({ name: 'index' })
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
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f1f0f9;
}
a.nuxt-link-exact-active {
  color: #000;
}

a.nuxt-link-exact-active svg {
  fill: #3d74d1;
}

aside div ul li:hover svg {
  fill: #3d74d1;
}
</style>

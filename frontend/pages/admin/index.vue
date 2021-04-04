<template>
  <section>
    <adminNav :isLogin="false" />
    <section
      class="flex justify-center mt-8 w-4/5 bg-white"
      style="margin-left: 17%"
    >
      <form class="bg-white px-8 pt-6 pb-64 mb-4 mt-16 w-2/4">
        <div class="mb-8">
          <label
            class="block text-gray-700 text-lg font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            v-model="adminUserId"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errorUsername }"
            @click="errorUsername = false"
          />
          <p class="text-red-500 text-xs italic" v-show="errorUsername">
            Please choose a username.
          </p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-lg font-bold mb-2">
            Password
          </label>
          <input
            v-model="adminPassword"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
            :class="{ 'border-red-500': errorPassword }"
            @click="errorPassword = false"
          />
          <p class="text-red-500 text-xs italic" v-show="errorPassword">
            Please choose a password.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:b g-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="loginAdmin()"
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      errorUsername: false,
      errorPassword: false,
      adminUserId: "",
      adminPassword: "",
    };
  },
  methods: {
    loginAdmin() {
      if (!!this.adminUserId && !!this.adminPassword) {
        //Login
        // this.$router.push({ path: `/admin/${99999}` });
      } else {
        //Error user is not input
        this.errorUsername = true;
        this.errorPassword = true;
      }
    },
  },
};
</script>

<style >
</style>
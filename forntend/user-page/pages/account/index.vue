<template>
  <section class="w-5/6">
    <p class="text-center text-2xl border-b-2 border-gray-400 pb-4">Account</p>
    <div class="flex flex-row-reverse my-5">
      <img
        src="~/assets/USER/Profile/edit_black_24dp.svg"
        class="cursor-pointer"
        alt="edit"
      />
    </div>
    <div class="flex mt-4">
      <div class="w-56 h-56 rounded-2xl border border-gray-400 overflow-hidden">
        <img src="~/assets/USER/profile/01.png" alt="Profile" />
      </div>
      <div class="px-10">
        <p class="mb-6">
          Username : <span class="text-gray-600">{{ user.username }}</span>
        </p>
        <div class="flex mb-6">
          <p class="mr-6">
            First name :
            <span class="text-gray-600">{{ user.customer_fname }}</span>
          </p>
          <p class="mx-6">
            Last name :
            <span class="text-gray-600">{{ user.customer_lname }}</span>
          </p>
        </div>
        <p class="mb-6">
          E-mail : <span class="text-gray-600">{{ user.customer_email }}</span>
        </p>
        <p class="mb-6">
          Phone number :
          <span class="text-gray-600">{{ user.customer_tel }}</span>
        </p>
      </div>
    </div>
    <p class="text-center text-2xl border-b-2 border-gray-400 pb-4">Address</p>
    <div class="flex flex-row-reverse my-5">
      <img
        src="~/assets/USER/Profile/edit_black_24dp.svg"
        class="cursor-pointer"
        alt="edit"
      />
    </div>
    <div class="bg-white mt-10 w-full h-32 p-3">
      {{ user.customer_address }}
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      user: {},
    }
  },
  mounted() {
    this.user = this.$store.state.auth.user
  },
}
</script>

<style></style>

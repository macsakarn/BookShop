<template>
  <div class="container px-16 mx-auto">
    <main class="flex py-40">
      <div>
        <div class="w-full mx-1">
          <label class="block mb-1 font-bold text-gray-500">FirstName</label>
          <input
            v-model="$v.firstName.$model"
            type="name"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            :class="{ 'border-red-500': $v.firstName.$error }"
          />
          <div v-show="$v.firstName.$error">
            <p class="text-red-500 text-sm" v-show="!$v.firstName.required">
              This field is required
            </p>
            <p class="text-red-500 text-sm">mac</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      firstName: '',
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(5),
    },
  },
}
</script>

<style></style>

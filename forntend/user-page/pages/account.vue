<template>
  <div class="container px-16 mx-auto">
    <main class="flex py-40">
      <aside class="w-1/6">
        <div class="mt-32">
          <p
            class="text-xl my-5 cursor-pointer"
            @click="$router.push({ name: 'account' })"
          >
            Profile
          </p>
          <p
            class="text-xl my-5 cursor-pointer"
            @click="$router.push({ name: 'account-history' })"
          >
            History
          </p>
        </div>
      </aside>
      <NuxtChild />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

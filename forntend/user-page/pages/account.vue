<template>
  <div class="container px-16 mx-auto">
    <main class="flex py-40">
      <aside class="w-1/6">
        <div class="mt-32">
          <NuxtLink :to="{ name: 'account' }">
            <p class="text-xl my-5 cursor-pointer">Profile</p>
          </NuxtLink>
          <NuxtLink :to="{ name: 'account-history' }">
            <p class="text-xl my-5 cursor-pointer">History</p>
          </NuxtLink>
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

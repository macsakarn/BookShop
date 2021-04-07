<template>
  <div>
    <adminNav :isLogin="true" />
    <main class="flex flex-wrap relative">
      <adminSide :isLogin="true" />
      <section class="mt-48 w-5/6">
        <!-- Content -->
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
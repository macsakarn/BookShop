<template>
  <div>
    <adminNav :isLogin="true" />
    <main class="flex flex-wrap relative">
      <adminSide :isLogin="true" />
      <section class="w-5/6">
        <adminDashBoard class="mt-12 mb-4 mx-2" />
        <div class="grid grid-cols-4 gap-4 mx-4 mb-10">
          <div class="col-span-2 h-64 bg-white rounded-xl">1</div>
          <div class="h-64 bg-white rounded-xl">2</div>
          <div class="row-span-2 bg-white rounded-xl">3</div>
          <div class="col-span-3 h-64 bg-white rounded-xl">4</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
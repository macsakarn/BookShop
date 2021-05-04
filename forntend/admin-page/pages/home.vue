<template>
  <div>
    <adminDashBoard class="mb-4 mx-2" />
    <div class="grid grid-cols-4 gap-4 mx-4 mb-10">
      <client-only>
        <line-chart-sale class="col-span-2 h-64 bg-white rounded-xl" />
        <pie-chart class="h-64 bg-white rounded-xl"></pie-chart>
        <col-chart class="h-full row-span-2 bg-white rounded-xl"></col-chart>
        <area-chart class="col-span-3 h-64 bg-white rounded-xl"></area-chart>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style></style>

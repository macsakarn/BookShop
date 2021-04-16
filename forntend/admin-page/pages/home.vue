<template>
  <div>
    <main class="flex flex-wrap relative">
      <adminSide :isLogin="true" />
      <section class="w-5/6">
        <adminDashBoard class="mt-12 mb-4 mx-2" />
        <div class="grid grid-cols-4 gap-4 mx-4 mb-10">
          <client-only>
            <line-chart-sale class="col-span-2 h-64 bg-white rounded-xl" />
            <pie-chart class="h-64 bg-white rounded-xl"></pie-chart>
            <col-chart
              class="h-full row-span-2 bg-white rounded-xl"
            ></col-chart>
            <area-chart
              class="col-span-3 h-64 bg-white rounded-xl"
            ></area-chart>
          </client-only>
        </div>
      </section>
    </main>
  </div>
</template>

<script></script>

<style></style>

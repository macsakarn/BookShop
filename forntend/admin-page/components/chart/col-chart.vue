  <template>
  <client-only>
    <highchart :options="chartOptions" class="h-full" />
  </client-only>
</template>

  <script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Revenue",
        },
        xAxis: {
          categories: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        series: [
          {
            name: "This year",
            data: [3, 4, 3, 5, 4, 10, 12],
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
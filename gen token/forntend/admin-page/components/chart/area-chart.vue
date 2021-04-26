  <template>
  <client-only>
    <highchart :options="chartOptions" />
  </client-only>
</template>

  <script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "area",
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
.highcharts-container {
  height: 528px;
  width: 296px;
}
</style>
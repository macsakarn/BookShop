  <template>
  <client-only>
    <highchart :options="chartOptions" class="" />
  </client-only>
</template>

  <script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "areaspline",
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
          {
            name: "last year",
            data: [1, 3, 4, 3, 3, 5, 4],
          },
        ],
      },
    };
  },
};
</script>
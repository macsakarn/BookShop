  <template>
  <client-only>
    <line-chart :data="chartData"></line-chart>
  </client-only>
</template>

  <script>
export default {
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Title",
            data: [10, 25, 18, 2, 13],
          },
        ],
      },
    };
  },
};
</script>
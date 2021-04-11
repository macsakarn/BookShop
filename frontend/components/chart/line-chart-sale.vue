 <template>
  <client-only>
    <bar-chart :data="chartData"></bar-chart>
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
            data: [45, 55, 48, 35, 12],
          },
        ],
      },
    };
  },
};
</script>
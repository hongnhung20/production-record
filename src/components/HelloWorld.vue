<template>
  <div class="production">
    <div>
      <input type="date" v-model="selectdate" @change="updateDate" />
      <p>date: {{ formatDate }}</p>
      <button id="button" @click="filterDate">filter</button>
    </div>
    <canvas id="myChart" width="200" height="200"></canvas>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.js"></script>

<script>
export default {
  setup() {
    const date = ref(new Date());

    function updateDate(event) {
      date.value = new Date(event.target.value);
    }

    const formatDate = computed(() => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      return date.value
        .toLocaleDateString("en-GB", options)
        .split("/")
        .join("/");
    });

    return {
      date,
      updateDate,
      formatDate,
    };
  },

  data() {
    return {
      selectdate: "",
      datafilter: [],
      datasum: [],
      data_table: [],
    };
  },

  computed: {
    formatDate1() {
      return new Date(this.selectdate).toLocaleDateString();
    },
  },
  methods: {
    requestApiGetDocs: function (api) {
      var requestPara = {
        PageCode: "production",
        Size: 1000,
        Index: 0,
        Offset: 0,
      };
      this.callApi(api, requestPara).then((response) => {
        this.data_table = response?.data?.items;
      });
    },

    filterDate() {
      const filteredData = this.data_table
        .filter((item) => item.Ng_SysIsDeleted !== true)
        .filter((item) => {
          return new Date(item.Time).toLocaleDateString() === this.formatDate1;
        });
      console.log(filteredData);
      let sugarfree = 0;
      let original = 0;
      let blacksesame = 0;
      let lowsugar = 0;
      let Sumsugarfree = 0;
      let Sumoriginal = 0;
      let sumblacksesame = 0;
      let sumlowsugar = 0;

      filteredData.forEach((item) => {
        item.savour.forEach((option) => {
          if (option.key === "sugarfree" && option.value === "Sugar Free") {
            sugarfree++;
            if (item.Capacity && item.Capacity[0] && item.Capacity[0].value) {
              if (item.Capacity[0].value.endsWith("mL")) {
                Sumsugarfree += parseFloat(item.Capacity[0].value) / 1000;
              } else {
                Sumsugarfree += parseFloat(item.Capacity[0].value);
              }
            }
          }
          if (option.key === "original" && option.value === "Original") {
            original++;
            if (item.Capacity && item.Capacity[0] && item.Capacity[0].value) {
              if (item.Capacity[0].value.endsWith("mL")) {
                Sumoriginal += parseFloat(item.Capacity[0].value) / 1000;
              } else {
                Sumoriginal += parseFloat(item.Capacity[0].value);
              }
            }
          }
          if (option.key === "blacksesame" && option.value === "Black Sesame") {
            blacksesame++;
            if (item.Capacity && item.Capacity[0] && item.Capacity[0].value) {
              if (item.Capacity[0].value.endsWith("mL")) {
                sumblacksesame += parseFloat(item.Capacity[0].value) / 1000;
              } else {
                sumblacksesame += parseFloat(item.Capacity[0].value);
              }
            }
          }
          if (option.key === "lowsugar" && option.value === "Low Sugar") {
            lowsugar++;
            if (item.Capacity && item.Capacity[0] && item.Capacity[0].value) {
              if (item.Capacity[0].value.endsWith("mL")) {
                sumlowsugar += parseFloat(item.Capacity[0].value) / 1000;
              } else {
                sumlowsugar += parseFloat(item.Capacity[0].value);
              }
            }
          }
        });
      });

      this.datasum = [Sumoriginal, Sumsugarfree, sumlowsugar, sumblacksesame];
      this.datafilter = [original, sugarfree, lowsugar, blacksesame];
      console.log("test", this.datafilter);
      console.log("test", this.datasum);

      this.filteredData = filteredData;
      // Add the filtered data to the chart
      const filteredChartData = this.datafilter.slice();
      const sumChartData = this.datasum.slice();
      const myChart = Chart.getChart("myChart");
      myChart.data.datasets[0].data = filteredChartData;
      myChart.data.datasets[1].data = sumChartData;
      myChart.update();
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://cdn.jsdelivr.net/npm/chart.js@3.6.0/dist/chart.min.js";
    script.onload = function () {
      const myChart = new Chart(document.getElementById("myChart"), {
        type: "bar",
        data: {
          labels: ["Original", "Sugar Free", "Low Sugar", "Black Sesame"],
          datasets: [
            {
              label: "# total",
              data: [],
              borderWidth: 1,
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(255, 206, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132, 1)",
                "rgb(54, 162, 235, 1)",
                "rgb(255, 206, 86, 1)",
                "rgb(75, 192, 192, 1)",
              ],
            },
            {
              label: "# L",
              data: [],
              borderWidth: 1,
              backgroundColor: [
                "rgb(255, 99, 132, 2)",
                "rgb(54, 162, 235, 2)",
                "rgb(255, 206, 86, 2)",
                "rgb(75, 192, 192, 2)",
              ],
              borderColor: [
                "rgb(255, 99, 132, 1)",
                "rgb(54, 162, 235, 1)",
                "rgb(255, 206, 86, 1)",
                "rgb(75, 192, 192, 1)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };
    document.head.appendChild(script);
    this.requestApiGetDocs("GetDocs");
  },
};
</script>

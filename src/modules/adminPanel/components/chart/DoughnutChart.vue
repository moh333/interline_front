<template>
   <div>
      <canvas id="doughnut-chart"></canvas>
   </div>
</template>

<script>
import Chart from "chart.js";
import { ChartData } from "./Chart.js";

export default {
	name: "DoughnutChart",
	data() {
		return {
			ChartData
		};
	},
	mounted() {
		const ctx = document.getElementById("doughnut-chart");
		new Chart(ctx, this.ChartData);
	}
};
</script>
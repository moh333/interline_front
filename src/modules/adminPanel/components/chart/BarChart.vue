<template>
   <div>
      <canvas id="bar-chart"></canvas>
   </div>
</template>

<script>
import Chart from "chart.js";
import { barChart } from "./Chart.js";

export default {
	name: "BarChart",
	data() {
		return {
			barChart
		};
	},
	mounted() {
		const ctx = document.getElementById("bar-chart");
		new Chart(ctx, this.barChart);
	}
};
</script>
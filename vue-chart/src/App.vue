<template>
	<div>
		<canvas id="myChart"></canvas>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ChartConfiguration } from 'chart.js';

export default Vue.extend({
	mounted() {
		const config: ChartConfiguration = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [0, 10, 5, 2, 20, 30, 45],
					},
				],
			},
			options: {},
		};

		const ctx = (
			document.getElementById('myChart') as HTMLCanvasElement
		).getContext('2d');
		if (!ctx) {
			return;
		}

		const myChart = new this.$_Chart(ctx, config);
	},
});
</script>

<style scoped></style>

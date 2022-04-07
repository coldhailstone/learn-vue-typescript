import Vue from 'vue';
import Chart from 'chart.js/auto';

type ChartLib = typeof Chart;

declare module 'vue/types/vue' {
	interface Vue {
		$_Chart: ChartLib;
	}
}

<template>
	<div>
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { fetchNews } from '@/api';

export default {
	components: {
		ListItem,
	},
	// created() {},
	methods: {
		async fetchNewsItems() {
			const response = await fetchNews();
			return response.data;
		},
	},
};
</script>

<style></style>

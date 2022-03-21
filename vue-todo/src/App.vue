<template>
	<div>
		<h1>Vue Todo with TypeScript</h1>
		<todo-input></todo-input>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';

export default Vue.extend({
	components: { TodoInput },
});
</script>

<style scoped></style>

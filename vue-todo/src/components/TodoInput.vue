<template>
	<div>
		<label for="todo-input">오늘 할 일: </label>
		<input id="todo-input" type="text" :value="item" @input="handleInput" />
		<button type="button" @click="addTodo">add</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		item: {
			type: String,
			default: '',
		},
	},
	methods: {
		handleInput(event: any) {
			this.$emit('input', event.target.value);
		},
		addTodo() {
			this.$emit('add');
		},
	},
});
</script>

<style scoped></style>

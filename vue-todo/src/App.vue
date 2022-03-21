<template>
	<div>
		<h1>Vue Todo with TypeScript</h1>
		<todo-input
			:item="todoText"
			@input="updateTodoText"
			@add="addTodoItem"
		></todo-input>
		<div>
			<ul>
				<todo-list-item></todo-list-item>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

export default Vue.extend({
	components: { TodoInput, TodoListItem },
	data() {
		return {
			todoText: '',
		};
	},
	methods: {
		updateTodoText(value: string) {
			this.todoText = value;
		},
		addTodoItem() {
			const value = this.todoText;
			localStorage.setItem(value, value);
			this.initTodoText();
		},
		initTodoText() {
			this.todoText = '';
		},
	},
});
</script>

<style scoped></style>

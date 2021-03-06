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
				<todo-list-item
					v-for="(todoItem, index) of todoItems"
					:key="index"
					:index="index"
					:todoItem="todoItem"
					@toggle="toggleTodoItemComplete"
					@remove="removeTodoItem"
				></todo-list-item>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
	save(todoItems: Todo[]) {
		const parsed = JSON.stringify(todoItems);
		localStorage.setItem(STORAGE_KEY, parsed);
	},
	fetch(): Todo[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
		const result = JSON.parse(todoItems);
		return result;
	},
};

export interface Todo {
	title: string;
	done: boolean;
}

export default Vue.extend({
	components: { TodoInput, TodoListItem },
	data() {
		return {
			todoText: '',
			todoItems: [] as Todo[],
		};
	},
	created() {
		this.fetchTodoItems();
	},
	methods: {
		updateTodoText(value: string) {
			this.todoText = value;
		},
		addTodoItem() {
			const value = this.todoText;
			const todo: Todo = {
				title: value,
				done: false,
			};
			this.todoItems.push(todo);
			storage.save(this.todoItems);
			this.initTodoText();
		},
		initTodoText() {
			this.todoText = '';
		},
		fetchTodoItems() {
			this.todoItems = storage.fetch().sort((a, b) => {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		},
		toggleTodoItemComplete(todoItem: Todo, index: number) {
			this.todoItems.splice(index, 1, {
				...todoItem,
				done: !todoItem.done,
			});
		},
		removeTodoItem(index: number) {
			this.todoItems.splice(index, 1);
			storage.save(this.todoItems);
		},
	},
});
</script>

<style scoped></style>

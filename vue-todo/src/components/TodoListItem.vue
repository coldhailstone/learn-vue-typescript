<template>
	<li>
		<span class="item complete">{{ todoItem }}</span>
		<button @click="removeItem">삭제</button>
	</li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Todo } from '@/App.vue';

export default Vue.extend({
	props: {
		todoItem: {
			type: Object as PropType<Todo>,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	methods: {
		removeItem() {
			this.$emit('remove', this.index);
		},
	},
});
</script>

<style scoped>
.item {
	cursor: pointer;
}
.complete {
	text-decoration: line-through;
}
</style>

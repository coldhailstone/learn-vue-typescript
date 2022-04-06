import { RootState } from './state';

export const getters = {
	fetchedNews(state: RootState) {
		return state.news;
	},
	fetchedUser(state: RootState) {
		return state.user;
	},
	fetchedList(state: RootState) {
		return state.list;
	},
};

export type Getters = typeof getters;

// export default {
// 	fetchedItem(state) {
// 		return state.item;
// 	},
// 	fetchedUser(state) {
// 		return state.user;
// 	},
// 	fetchedList(state) {
// 		return state.list;
// 	},
// 	// ItemView
// 	userName(state) {
// 		return state.item.user;
// 	},
// 	userContent(state) {
// 		return state.item.content;
// 	},
// 	userQuestion(state) {
// 		return state.item.title;
// 	},
// 	userTimeAgo(state) {
// 		return state.item.time_ago;
// 	},
// 	contentPoints(state) {
// 		return state.item.points;
// 	},
// };

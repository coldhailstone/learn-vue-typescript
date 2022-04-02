import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState, state } from './state';
import getters from './getters.js';
import { mutations } from './mutations';
import actions from './actions.js';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	strict: process.env.NODE_ENV !== 'production',
	state,
	getters,
	mutations,
	actions,
};

export default new Vuex.Store(store);

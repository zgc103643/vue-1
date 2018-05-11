import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { 
	//在此放置状态值
	count:0
}

const mutations = {
	changeLogin(state){
		state.count = 1;
	}
}

export default new Vuex.Store({
	state,
	mutations
});



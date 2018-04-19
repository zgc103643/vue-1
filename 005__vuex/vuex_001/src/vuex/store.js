import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { 
	//在此放置状态值
	count:1,
	stateObj:'jscyl',
	age:22
}

const mutations = {
	//如果要对状态值进行操作,必须用此方法 
	// const mutations = {//此处写方法}
	add(state){
		state.count++;
	},
	reduce(state){
		state.count--;
	},
	//state 为默认值 num 为传递的参数
	addAge(state,num){
		state.age+=num;
	}
}

const getters = {
	count:function (state) {
		return state.count+=100;
	}
}


export default new Vuex.Store({
	state,
	mutations,
	getters
});



import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state, { StateInterface } from './state';



Vue.use(Vuex);

const store = new Vuex.Store<StateInterface>({
  modules: {

  },
  state,
  actions,
  mutations,
});

export default store;

import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state, { StateInterface } from './state';
import expenses from './expenses';

Vue.use(Vuex);


export enum MODULES {
  'EXPENSES'='expenses',
  'CALCULATOR'='calculate',

}

const store = new Vuex.Store<StateInterface>({
  modules: {
    expenses,
  },
  state,
  actions,
  mutations,
});

export default store;

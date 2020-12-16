import { Module } from 'vuex';
import { StateInterface } from 'src/store/state';
import state, { ExpensesInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const  expenses: Module< ExpensesInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default  expenses;









import { MutationTree } from 'vuex';

import { ExpensesInterface} from './state'

export enum EXPENSES_MUTATIONS {
     CURRENT_EXPENSE  = "current_expense",
     ALL_EXPENSES  = "all_expenses",
     ACTIVE_SUB_MODULE  = "active_sub_module",
    
}

const mutations: MutationTree< ExpensesInterface > = {
  [EXPENSES_MUTATIONS.CURRENT_EXPENSE](state:ExpensesInterface, payload){
      state.current_expense = payload;
  },
  [EXPENSES_MUTATIONS.ALL_EXPENSES](state:ExpensesInterface, payload){
      state.all_expenses = payload;
  },
  [EXPENSES_MUTATIONS.ACTIVE_SUB_MODULE](state:ExpensesInterface, payload){
      state.active_sub_module = payload;
  },

}

export default mutations;
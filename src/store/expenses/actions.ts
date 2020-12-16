import { ActionTree } from 'vuex';

import { StateInterface } from 'src/store/state'
import { EXPENSES_MUTATIONS } from './mutations';

import { ExpensesInterface} from './state'

export enum EXPENSES_ACTIONS {
  CURRENT_EXPENSE  = "current_expense",
   ALL_EXPENSES  = "all_expenses",
  ACTIVE_SUB_MODULE  = "active_sub_module",
  
}

const actions: ActionTree< ExpensesInterface, StateInterface > = {
    [EXPENSES_ACTIONS.CURRENT_EXPENSE](context, payload){
        context.commit(EXPENSES_MUTATIONS.CURRENT_EXPENSE, payload)
    },
      [EXPENSES_ACTIONS.ALL_EXPENSES](context, payload){
        context.commit(EXPENSES_MUTATIONS.ALL_EXPENSES, payload)
    },
      [EXPENSES_ACTIONS.ACTIVE_SUB_MODULE](context, payload){
        context.commit(EXPENSES_MUTATIONS.ACTIVE_SUB_MODULE, payload)
    },
   
    
}

export default actions;
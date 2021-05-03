import { ActionTree } from "vuex";

import { StateInterface } from "src/store/state";
import { EXPENSES_MUTATIONS } from "./mutations";

import { ExpensesInterface } from "./state";
import { fetchExpenses } from "@/core/supabase_handlers/expenses/fetch_expenses";

export enum EXPENSES_ACTIONS {
  CURRENT_EXPENSE = "current_expense",
  ALL_EXPENSES = "all_expenses",
  ACTIVE_SUB_MODULE = "active_sub_module"
}

const actions: ActionTree<ExpensesInterface, StateInterface> = {
  [EXPENSES_ACTIONS.CURRENT_EXPENSE](context, payload) {
    context.commit(EXPENSES_MUTATIONS.CURRENT_EXPENSE, payload);
  },
  [EXPENSES_ACTIONS.ALL_EXPENSES](context) {
    fetchExpenses().then(val => {
      context.commit(EXPENSES_MUTATIONS.ALL_EXPENSES, val?.data);
    });
  },
  [EXPENSES_ACTIONS.ACTIVE_SUB_MODULE](context, payload) {
    context.commit(EXPENSES_MUTATIONS.ACTIVE_SUB_MODULE, payload);
  }
};

export default actions;

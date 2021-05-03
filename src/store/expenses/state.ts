import { Expenses } from "@/core/types/Expenses.model";

export interface ExpensesInterface {
  current_expense: any;
  all_expenses: null | Expenses[];
  active_sub_module: any;
}

const state: ExpensesInterface = {
  current_expense: null as null | any,
  all_expenses: null as null | Expenses[],
  active_sub_module: null as null | any
};

export default state;

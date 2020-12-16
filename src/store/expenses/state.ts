export interface ExpensesInterface {
   current_expense  : any,
   all_expenses  : any,
   active_sub_module  : any,
}

const state:  ExpensesInterface = {
   current_expense  : null as null | any,
   all_expenses  : null as null | any,
   active_sub_module  : null as null | any,
};



export default state;
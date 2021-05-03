import { Expenses } from "@/core/types/Expenses.model";
import { supabase } from "..";

export async function addExpense(Expense: Expenses) {
  try {
    const data = await supabase
      .from<Expenses>("expenses")
      .insert(Expense)
      .single();
    return data;
  } catch (err) {
    console.log(err);
  }
}

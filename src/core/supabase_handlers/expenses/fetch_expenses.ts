import { Expenses } from "@/core/types/Expenses.model";
import { supabase } from "..";

export async function fetchExpenses() {
  try {
    const data = await supabase
      .from<Expenses>("expenses")
      .select("*")
      .order("date");
    return data;
  } catch (err) {
    console.log(err);
  }
}

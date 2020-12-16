import { Expenses } from '@/core/types/Expenses.model';
import { supabase } from '..';


export async function fetchExpenses() {
  try {
    const data = await supabase.from<Expenses>('expenses').select('*');
    return data;
  } catch (err) {
    console.log(err);
  }
}



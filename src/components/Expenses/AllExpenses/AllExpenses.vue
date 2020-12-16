<template>
  <div>
    {{expenses}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Expenses } from '@/core/types/Expenses.model';
import { fetchExpenses } from '@/core/supabase_handlers/expenses/fetch_expenses';
export default Vue.extend({
  name: 'AllExpenses',
  data() {
    return {
      expenses: null as null | Expenses[],
    };
  },
  mounted() {
    fetchExpenses().then((val) => {
      if (val?.data) {
        this.expenses = val?.data;
      }
    });
  },
});
</script>

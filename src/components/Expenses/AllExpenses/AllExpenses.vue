<template>
  <div class="tw-p-3 tw-overflow-y-scroll tw-h-full">
    <div
      class="tw-flex tw-shadow-md tw-items-center tw-p-2 tw-justify-between "
      v-for="(expense, key) in expenses"
      :key="key"
    >
      <div class="tw-flex tw-flex-col tw-text-left">
        <div class="tw-font-bold tw-text-md">
          {{ expense.title }}
        </div>
        <div class="tw-font-light tw-text-sm">
          {{ expense.description }}
        </div>
        <div class="tw-font-semibold tw-text-md tw-text-gray-400">
          {{ expense.amount }}
        </div>
      </div>
      <div class="tw-flex">
        <i
          v-if="expense.action === 'out'"
          class="material-icons tw-text-red-300"
          >navigate_next</i
        >
        <i
          v-else-if="expense.action === 'in'"
          class="material-icons tw-text-green-300"
          >navigate_before</i
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import { Expenses } from "@/core/types/Expenses.model";
import { fetchExpenses } from "@/core/supabase_handlers/expenses/fetch_expenses";
import { MODULES } from "@/store";
import { ExpensesInterface } from "@/store/expenses/state";
import { EXPENSES_ACTIONS } from "@/store/expenses/actions";

export default Vue.extend({
  name: "AllExpenses",
  mounted() {
    const action = `${MODULES.EXPENSES}/${EXPENSES_ACTIONS.ALL_EXPENSES}`;

    this.$store.dispatch(action);
  },
  computed: {
    ...mapState(MODULES.EXPENSES, {
      expenses(state: ExpensesInterface) {
        return state.all_expenses as Expenses[];
      }
    })
  }
});
</script>

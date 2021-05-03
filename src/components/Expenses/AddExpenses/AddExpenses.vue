<template>
  <div class="tw-flex  tw-items-center  tw-flex-col ">
    <input
      type="text"
      v-model="formData.title"
      class="tw-border-2 tw-p-2 tw-w-3/4"
      placeholder="Expense title"
    />
    <input
      type="text"
      v-if="false"
      class="tw-border-2 tw-p-2 tw-w-3/4 tw-mt-1 "
      placeholder="category"
    />
    <div class="tw-flex tw-w-3/4 ">
      <input
        v-model="formData.amount"
        type="text"
        class="tw-border-2 tw-p-2 tw-w-1/2 tw-mt-1 tw-mr-1 "
        placeholder="Amount"
      />

      <select
        class="tw-border-2 tw-p-2  tw-w-1/2 tw-mt-1 tw-bg-white"
        v-model="formData.action"
        placeholder="action"
        name="cars"
      >
        <option value="in">In</option>
        <option value="out">Out</option>
      </select>
    </div>
    <textarea
      v-model="formData.description"
      class="tw-border-2 tw-p-2 tw-w-3/4 tw-mt-1"
      name=""
      id=""
      cols="30"
      rows="5"
    ></textarea>

    <button
      @click="addExpenseEvent"
      class="tw-bg-blue-900 tw-w-3/4 tw-p-3 tw-mt-3 tw-text-white"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { addExpense } from "@/core/supabase_handlers/expenses/add_expense";

export default Vue.extend({
  name: "AddExpenses",
  methods: {
    addExpenseEvent() {
      addExpense(this.formData).then(val => {
        console.log(val);
      });
    }
  },
  data() {
    return {
      formData: {
        title: "",
        amount: 0,
        action: "in",
        description: "",
        date: new Date()
      }
    };
  }
});
</script>

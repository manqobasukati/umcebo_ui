<template>
  <div class="tw-flex  tw-items-center  tw-flex-col ">
    <input
      type="text"
      class="tw-border-2 tw-p-2 tw-w-3/4"
      placeholder="Expense title"
    />
    <input
      type="text"
      class="tw-border-2 tw-p-2 tw-w-3/4 tw-mt-1 "
      placeholder="action"
    />
    <div class="tw-flex tw-w-3/4 ">
      <input
        type="text"
        class="tw-border-2 tw-p-2 tw-w-1/2 tw-mt-1 tw-mr-1 "
        placeholder="Amount"
      />
      <input
        type="text"
        class="tw-border-2 tw-p-2  tw-w-1/2 tw-mt-1"
        placeholder="Expense title"
      />
    </div>

    <button class="tw-bg-blue-900 tw-w-3/4 tw-p-3 tw-mt-3 tw-text-white">
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AddExpenses',
});
</script>

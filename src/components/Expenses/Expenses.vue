<template>
  <div class="tw-flex tw-flex-col tw-justify-center tw-h-full">
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Expenses"
});
</script>

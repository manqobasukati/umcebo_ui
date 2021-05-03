<template>
  <div
    class="tw-flex tw-flex-col tw-absolute tw-left-0 tw-top-0 tw-bg-black tw-h-full tw-w-full tw-opacity-25 tw-justify-center"
  >
    <div class="loader tw-mx-24"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "cssLoader",
  props: ["load"]
});
</script>

<style scoped>
.loader {
  border: 12px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #39393a; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

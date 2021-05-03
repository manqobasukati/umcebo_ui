<template>
  <div class="tw-h-screen">
    <div class="tw-flex tw-flex-col tw-justify-center tw-h-full tw-mx-3 ">
      <div class="tw-text-2xl tw-font-semibold tw-text-purple-700 ">
        Umcebo
      </div>
      <div class="tw-flex tw-flex-col">
        <input
          type="text"
          placeholder="username"
          class="tw-border tw-p-2 tw-m-1 tw-outline-none"
        />
        <input
          type="password"
          placeholder="password"
          class="tw-border tw-p-2 tw-m-1 tw-outline-none"
        />
        <button
          class="tw-bg-blue-900 tw-bg-opacity-75 tw-text-white tw-m-1 tw-text-lg tw-py-2 tw-outline-none"
        >
          Sign in
        </button>
        <div class="tw-justify-end">
          forgot password?
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SignIn"
});
</script>

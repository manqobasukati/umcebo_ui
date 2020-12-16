<template>
  <div class="tw-flex tw-p-2">
    <horizontal-item-slider
      :scroll_items="letters"
      :item_style="
        'tw-border tw-rounded-full tw-flex tw-justify-center tw-items-center tw-mr-1'
      "
      :item_active_class="'tw-bg-blue-200'"
      :item_style_style="'min-width:2rem; min-height:2rem'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import HorizontalItemSlider from '@/components/UIComponents/HorizontalItemSlider.vue';

export default Vue.extend({
  name: 'AllLoan',
  data() {
    return {
      letters: ['a', 'b', 'c'],
    };
  },
  components: {
    HorizontalItemSlider,
  },
});
</script>

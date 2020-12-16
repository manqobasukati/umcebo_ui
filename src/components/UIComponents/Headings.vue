<template>
  <div>
    <div
      class="tw-text-left tw-shadow-sm"
    >
      <div class="tw-text-xl tw-p-2 tw-font-thin">
        {{ items.name }}
      </div>
      <div class="tw-flex tw-overflow-y-hidden">
        <horizontal-item-slider :scroll_items="items.sub_items" :item_active_class="'tw-border-b-4'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HorizontalItemSlider from './HorizontalItemSlider.vue';
export default Vue.extend({
  components: {
    HorizontalItemSlider,
  },
  name: 'Headings',
  props: ['items'],
});
</script>

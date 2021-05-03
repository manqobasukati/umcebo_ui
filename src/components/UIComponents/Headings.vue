<template>
  <div>
    <div class="tw-text-left tw-shadow-sm">
      <div class="tw-text-xl tw-p-2 tw-font-thin">
        {{ items.name }}
      </div>
      <div class="tw-flex tw-overflow-y-hidden">
        <horizontal-item-slider
          @set_active_item="setActiveItem"
          :scroll_items="items.sub_items"
          :item_active_class="'tw-border-b-4'"
          :item_style_style="'min-width:8rem; min-height:2rem'"
        />
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
  methods:{
    setActiveItem(data:any){
    
      this.$emit('headings_set_active_item',data)
    }
  }
});
</script>

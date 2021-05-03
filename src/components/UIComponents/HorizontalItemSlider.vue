<template>
  <div
    class="tw-flex tw-w-full tw-px-1 tw-overflow-x-auto "
    style="margin-bottom:-15px; padding-bottom:15px"
  >
    <div
      v-for="(item, key) in scroll_items"
      :key="key"
      class="tw-flex tw-justify-center tw-items-center tw-text-center"
    >
      <div
        @click="changeActiveItem(item)"
        :class="[item_style, item === active_item ? item_active_class : '']"
        :style="item_style_style"
      >
        {{ item.name || item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventBus } from '@/main';
import { EVENT_BUS_EVENTS } from '@/core/events';

export default Vue.extend({
  name: 'HorizontalLetterSlider',
  props: ['scroll_items', 'item_style', 'item_active_class','item_style_style'],
  data() {
    return {
      active_item: this.scroll_items[0],
    };
  },
  methods: {
    changeActiveItem(_active_item: string) {
      this.active_item = _active_item;
      this.$emit('set_active_item', _active_item);
     
      if (this.active_item.link) {
        console.log('here');
        EventBus.$emit(EVENT_BUS_EVENTS.CHANGE_NAVIGATION, _active_item);
      }
    },
  },
});
</script>

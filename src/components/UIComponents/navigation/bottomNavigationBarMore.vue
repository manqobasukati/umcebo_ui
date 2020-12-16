<template>
  <div class="tw-h-16">
    <div
      v-if="onMore"
      style="height:min-content"
      class="tw-absolute tw-bottom-0 tw-right-0  tw-w-48 tw-bg-white tw-mb-12 tw-mr-4 tw-shadow-lg tw-flex  tw-flex-col tw-p-2"
    >
      <div
        v-for="(item, key) in more_items"
        :key="key"
        @click="selectItem(item.name)"
        class="tw-flex tw-justify-between tw-w-full"
      >
        <div class="tw-text-md">{{ item.name }}</div>
        <i class="material-icons">{{ item.icon }}</i>
      </div>
    </div>
    <div :class="bar_style">
      <div
        v-for="(item, key) in items"
        @click="selectItem(item.name)"
        :key="key"
      >
        <div
          :class="{
            'tw-flex tw-flex-col tw-text-center': true,
            'tw-shadow-inner': item.name === active_item,
          }"
        >
          <i class="material-icons icon-size">{{ item.icon }}</i>
          <div class="tw-text-xs">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'bottomNavigationBar',
  props: ['items', 'active_item', 'bar_style', 'more_items'],

  data() {
    return {
      onMore: false,
    };
  },
  methods: {
    selectItem(name: string) {
      const item = this.items.find((val: any) => {
        return val.name === name;
      });

      if (item.name === 'more') {
        this.onMore = !this.onMore;
        return;
      }

      this.$emit('select_item', item);
    },
  },
});
</script>

<style scoped>
.active-item-effect {
  filter: drop-shadow(0 0 4px 1px #0002);
}
</style>

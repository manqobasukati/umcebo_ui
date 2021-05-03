<template>
  <div class="tw-flex tw-flex-col">
    <headings
      v-if="heading"
      :items="heading"
      :active_sub_item="active_view"
      @headings_set_active_item="set_active_subitem"
      :item_active_class="
        'tw-border-b-4 tw-border-red-800 tw-border-opacity-50'
      "
    />
    <div class="tw-flex-1">
      <calculate
        @set_active_subitem="set_active_subitem"
        v-if="active_view.name === 'calculate'"
      />
      <results
        @set_active_subitem="set_active_subitem"
        v-if="active_view.name === 'results'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { MODULES } from '@/store';

import { CalculatorInterface } from '@/store/calculator/state';

import actions, { CALCULATOR_ACTIONS } from '@/store/calculator/actions';
import Headings from '@/components/UIComponents/Headings.vue';
import Calculate from './Calculate.vue';
import Results from './Results.vue';


export default Vue.extend({
  components: { Headings, Calculate, Results },
  name: 'Calculator',
  methods: {
    set_active_subitem(data: string) {
      const action = `${MODULES.CALCULATOR}/${CALCULATOR_ACTIONS.ACTIVE_VIEW}`;
      this.$store.dispatch(action, data);
    },
  },

  computed: {
    ...mapState(MODULES.CALCULATOR, {
      investment_details(state: CalculatorInterface) {
        return state.investment_details;
      },
      active_view(state: CalculatorInterface) {
        return state.active_view;
      },
      heading(state: CalculatorInterface) {
        return state.heading;
      },
    }),
  },
});
</script>

<template>
  <div class="tw-flex tw-flex-col tw-p-2 tw-text-left ">
    <div class="tw-text-md tw-font-thin tw-mt-2">
      Enter investment details here
    </div>

    <div class="tw-px-2 tw-py-1">
      <input
        v-model="investment_details.principal"
        type="text"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Principal amount"
      />
    </div>
    <div class="tw-px-2 tw-py-1">
      <input
        v-model="investment_details.time"
        type="text"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Time in years"
      />
    </div>
    <div class="tw-px-2 tw-py-1">
      <input
        v-model="investment_details.rate"
        type="text"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Interest rate"
      />
    </div>
    <div class="tw-px-2 tw-py-1">
      <select
        v-model="investment_details.compound_period"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Compund period"
        name="compund_periods"
      >
        <option value="1">Yearly</option>
        <option value="12">Monthly</option>
      </select>
    </div>
    <div class="tw-px-2 tw-py-1" v-if="more_parameters">
      <input
        v-model="investment_details.addition"
        type="text"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Yearly addition"
      />
    </div>
    <div class="tw-px-2 tw-py-1" v-if="more_parameters">
      <input
        v-model="investment_details.escalation"
        type="text"
        class="tw-border-2 tw-w-full tw-h-12 tw-p-2"
        placeholder="Yearly escalation"
      />
    </div>
    <div class="tw-text-center tw-p-2">
      <button class="tw-bg-gray-200 tw-w-full tw-p-4" @click="calculate()">
        Calculate
      </button>
    </div>
    <div class="tw-px-2 tw-text-xs  tw-text-right" v-if="!more_parameters" @click="more_parameters = !more_parameters">
      More parameters.
    </div>
     <div class="tw-px-2 tw-text-xs  tw-text-right" v-if="more_parameters" @click="more_parameters = !more_parameters">
      less parameters.
    </div>
    <css-loader v-if="load_results" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import cssLoader from '@/components/UIComponents/cssLoader.vue';
import { CALCULATOR_ACTIONS } from '@/store/calculator/actions';
import { MODULES } from '@/store';
import { InvestmentDetails } from '@/core/types/calculate.model';
export default Vue.extend({
  name: 'Calculate',
  components: {
    cssLoader,
  },
  data() {
    return {
      more_parameters: false,
      load_results: false,
      investment_details: {
        principal: '',
        rate: '',
        compound_period: 1,
        time: '',
        addition: '',
        escalation:''
      },
    };
  },
  methods: {
    calculate() {
      this.load_results = !this.load_results;
      setTimeout(() => {
        this.load_results = !this.load_results;

        const action = `${MODULES.CALCULATOR}/${CALCULATOR_ACTIONS.INVESTMENT_DETAILS}`;

        const payload: InvestmentDetails = {
          principal: parseFloat(this.investment_details.principal),
          rate: parseFloat(this.investment_details.rate),
          time: parseFloat(this.investment_details.time),
          compound_period: this.investment_details.compound_period,
          esclation:parseFloat(this.investment_details.escalation) || 0,
          addition:parseFloat(this.investment_details.addition) || 0
        };
        this.$store.dispatch(action, payload).then(() => {
          const action = `${MODULES.CALCULATOR}/${CALCULATOR_ACTIONS.ACTIVE_VIEW}`;
          this.$store.dispatch(action, {
            name: 'results',
            link: '/calculator/results',
          });

          this.$router.push({path:'/calculator/results'})
        });
      }, 2000);
    },
  },
});
</script>

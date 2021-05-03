<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <div class="tw-text-md tw-mt-12">Your investment value</div>
    <div class="tw-text-5xl tw-text-gray-500 tw-font-extrabold">
      E{{ Math.floor(investment_details.results || 0) }}
    </div>
    <div
      v-if="investment_details"
      class="tw-flex tw-flex-col tw-bg-gray-300 tw-mx-12 tw-p-2 tw-shadow-md"
    >
      <div class="tw-flex tw-font-thin tw-justify-between">
        <div>Your principal</div>
        <div>E{{ investment_details.principal }}</div>
      </div>
      <div class="tw-flex tw-font-thin tw-justify-between">
        <div>Investment time period</div>
        <div>{{ investment_details.time }}yrs</div>
      </div>
      <div class="tw-flex tw-font-thin tw-justify-between">
        <div>Interest rate</div>
        <div>{{ investment_details.rate }}%</div>
      </div>
      <div class="tw-flex tw-font-thin tw-justify-between">
        <div>Compound period</div>
        <div>
          {{ compound_period_lookup[investment_details.compound_period] }}
        </div>
      </div>

      <div
        v-if="investment_details.addition"
        class="tw-flex tw-font-thin tw-justify-between"
      >
        <div>Yearly addition</div>
        <div>E{{ investment_details.addition }}</div>
      </div>
      <div
        v-if="investment_details.esclation"
        class="tw-flex tw-font-thin tw-justify-between"
      >
        <div>Yearly escalation</div>
        <div>{{ investment_details.esclation }}%</div>
      </div>
      <div
        v-if="investment_details.total_contributions"
        class="tw-flex tw-font-thin tw-justify-between"
      >
        <div>Total contributions</div>
        <div>E{{ Math.floor(investment_details.total_contributions) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MODULES } from "@/store";
import Vue from "vue";
import { mapState } from "vuex";

import { CalculatorInterface } from "@/store/calculator/state";

import { InvestmentDetails } from "@/core/types/calculate.model";

export default Vue.extend({
  name: "Results",
  data() {
    return {
      compound_period_lookup: {
        1: "yearly",
        12: "monthly"
      } as { [name: number]: string }
    };
  },
  computed: {
    ...mapState(MODULES.CALCULATOR, {
      investment_details(state: CalculatorInterface) {
        return state.investment_details as InvestmentDetails;
      }
    })
  }
});
</script>

<template>
  <div class="tw-flex tw-flex-col tw-h-screen">
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
      <!-- <calculate
        @set_active_subitem="set_active_subitem"
        v-if="active_view.name === 'calculate'"
      />
      <results
        @set_active_subitem="set_active_subitem"
        v-if="active_view.name === 'results'"
      /> -->
      <router-view />
    </div>
    <bottom-navigation-bar-more
      @select_item="changeActiveItem"
      :bar_style="
        'tw-flex tw-justify-between tw-items-center tw-h-full tw-px-3 tw-text-white tw-bg-purple-700'
      "
      :active_item="active_bottom_item"
      :items="nav_items"
      :more_items="more_items"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import { MODULES } from "@/store";

import { CalculatorInterface } from "@/store/calculator/state";

import actions, { CALCULATOR_ACTIONS } from "@/store/calculator/actions";
import Headings from "@/components/UIComponents/Headings.vue";

import BottomNavigationBarMore from "../UIComponents/navigation/bottomNavigationBarMore.vue";

export default Vue.extend({
  components: { Headings, BottomNavigationBarMore },
  name: "Calculator",
  methods: {
    set_active_subitem(val: string) {
      const action = `${MODULES.CALCULATOR}/${CALCULATOR_ACTIONS.ACTIVE_VIEW}`;
      this.$store.dispatch(action, val).then(() => {
        this.$router.replace({ path: val.link.toString() });
      });
    },
    changeActiveItem(val: any) {
      // if (val.sub_items) {
      //   this.heading_items = val;
      // }

      this.$router.replace({ path: val.link });
    }
  },
  data() {
    return {
      active_bottom_item: "Expenses",
      more_items: [
        {
          name: "Calculators",
          link: "/calculator/calculate",
          icon: "functions"
        },
        {
          name: "Settings",
          icon: "settings"
        }
      ],
      nav_items: [
        {
          name: "Expenses",
          link: "/expenses/all-expenses",
          icon: "account_balance_wallet",
          sub_items: [
            {
              name: "all expenses",
              link: "/expenses/all-expenses",
              icon: "account_balance_wallet"
            },
            {
              name: "add expenses",
              link: "/expenses/add-expenses",
              icon: "account_balance_wallet"
            },
            {
              name: "analysis",
              link: "/expenses/analysis",
              icon: "account_balance_wallet"
            }
          ]
        },
        {
          name: "Loans",
          link: "/loans/all-loans",
          icon: "account_balance",
          sub_items: [
            {
              name: "all loans",
              link: "/loans/all-loans"
            },
            {
              link: "/loans/add-loan",
              name: "add loan"
            }
          ]
        },
        {
          name: "Profile",
          icon: "person"
        },
        {
          name: "more",
          icon: "more_horiz"
        }
      ]
    };
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
      }
    })
  }
});
</script>

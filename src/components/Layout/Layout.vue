<template>
  <div class=" tw-flex tw-flex-col tw-h-screen">
    <headings :items="heading_items" />
    <div class="tw-flex-1 tw-overflow-y-scroll">
      <router-view></router-view>
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

<script>
import { EVENT_BUS_EVENTS } from '@/core/events';
import { EventBus } from '@/main';
import Vue from 'vue';
import Headings from '../UIComponents/Headings.vue';
import bottomNavigationBarMore from '../UIComponents/navigation/bottomNavigationBarMore.vue';

export default Vue.extend({
  components: { bottomNavigationBarMore, Headings },
  name: 'Layout',
  mounted() {
    EventBus.$on(EVENT_BUS_EVENTS.CHANGE_NAVIGATION, (val) => {
      if (val.link) {
        this.changeActiveItem(val);
      }
    });
  },
  methods: {
    changeActiveItem(val) {
      if (val.sub_items) {
        this.heading_items = val;
      }

      this.$router.replace({ path: val.link });
    },
  },
  data() {
    return {
      active_bottom_item: 'Expenses',
      heading_items: {
        name: 'Expenses',
        link: '/expenses/all-expenses',
        icon: 'account_balance_wallet',
        sub_items: [
          {
            name: 'all expenses',
            link: '/expenses/all-expenses',
            icon: 'account_balance_wallet',
          },
          {
            name: 'add expenses',
            link: '/expenses/add-expenses',
            icon: 'account_balance_wallet',
          },
          {
            name: 'analysis',
            link: '/expenses/analysis',
            icon: 'account_balance_wallet',
          },
        ],
      },
      more_items: [
        {
          name: 'Calculators',
          icon: 'functions',
        },
        {
          name: 'Settings',
          icon: 'settings',
        },
      ],
      nav_items: [
        {
          name: 'Expenses',
          link: '/expenses/all-expenses',
          icon: 'account_balance_wallet',
          sub_items: [
            {
              name: 'all expenses',
              link: '/expenses/all-expenses',
              icon: 'account_balance_wallet',
            },
            {
              name: 'add expenses',
              link: '/expenses/add-expenses',
              icon: 'account_balance_wallet',
            },
            {
              name: 'analysis',
              link: '/expenses/analysis',
              icon: 'account_balance_wallet',
            },
          ],
        },
        {
          name: 'Loans',
          link: '/loans/all-loans',
          icon: 'account_balance',
          sub_items: [
            {
              name: 'all loans',
              link: '/loans/all-loans',
            },
            {
              link: '/loans/add-loan',
              name: 'add loan',
            },
          ],
        },
        {
          name: 'Profile',
          icon: 'person',
        },
        {
          name: 'more',
          icon: 'more_horiz',
        },
      ],
    };
  },
});
</script>

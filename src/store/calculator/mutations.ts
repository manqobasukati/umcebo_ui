import { MutationTree } from "vuex";

import { CalculatorInterface } from "./state";

export enum CALCULATOR_MUTATIONS {
  INVESTMENT_DETAILS = "investment_details",
  ACTIVE_VIEW = "active_view"
}

const mutations: MutationTree<CalculatorInterface> = {
  [CALCULATOR_MUTATIONS.INVESTMENT_DETAILS](
    state: CalculatorInterface,
    payload
  ) {
    state.investment_details = payload;
  },
  [CALCULATOR_MUTATIONS.ACTIVE_VIEW](state: CalculatorInterface, payload) {
    state.active_view = payload;
  }
};

export default mutations;

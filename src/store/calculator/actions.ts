import { ActionTree } from 'vuex';

import { StateInterface } from 'src/store/state';
import { CALCULATOR_MUTATIONS } from './mutations';

import { CalculatorInterface } from './state';
import { yearly_addition } from '@/core/compound_interest_functions/future_value';
import { InvestmentDetails } from '@/core/types/calculate.model';

export enum CALCULATOR_ACTIONS {
  INVESTMENT_DETAILS = 'investment_details',
  ACTIVE_VIEW = 'active_view',
}

const actions: ActionTree<CalculatorInterface, StateInterface> = {
  [CALCULATOR_ACTIONS.INVESTMENT_DETAILS](context, payload: InvestmentDetails) {

    const result = yearly_addition(
      payload.principal,
      payload.rate,
      payload.compound_period,
      payload.time,
      payload.addition,
      payload.esclation
    );

    context.commit(CALCULATOR_MUTATIONS.INVESTMENT_DETAILS, result);
  },
  [CALCULATOR_ACTIONS.ACTIVE_VIEW](context, payload) {
    context.commit(CALCULATOR_MUTATIONS.ACTIVE_VIEW, payload);
  },
};

export default actions;

import { Module } from "vuex";
import { StateInterface } from "src/store/state";
import state, { CalculatorInterface } from "./state";
import actions from "./actions";
import mutations from "./mutations";

const calculator: Module<CalculatorInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default calculator;

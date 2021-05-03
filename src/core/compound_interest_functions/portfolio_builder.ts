// lets say you have 50% equities 25% bond 25% cash

import { yearly_addition } from "./future_value";

export function build(funds: any) {
  const variables = {
    principal: 10000,
    addition: 12000
  };
  const s = [
    {
      name: "MSCI USA",
      rate: 16.21,
      principal: variables.principal * 0.2,
      time: 5,
      compound_period: 1,
      addition: variables.addition * 0.2
    },
    {
      name: "TRACI 3 months",
      rate: 6.21,
      principal: variables.principal * 0.5,
      time: 5,
      compound_period: 1,
      addition: variables.addition * 0.5
    },
    {
      name: "Gold",
      rate: 12.98,
      principal: variables.principal * 0.1,
      time: 5,
      compound_period: 1,
      addition: variables.addition * 0.1
    },
    {
      name: "GOVI",
      rate: 9.54,
      principal: variables.principal * 0.2,
      time: 5,
      compound_period: 1,
      addition: variables.addition * 0.2
    }
  ];

  const value = funds
    .map((val: any) => {
      const ans = yearly_addition(
        val.principal,
        val.rate,
        val.compound_period,
        val.time,
        val.addition,
        val.escalation || 0
      );

      console.log("ans", ans);
      return ans.results;
    })
    .reduce((a: any, b: any) => {
      return a + b;
    }, 0);

  console.log("This is value", value);

  return value;
}

function dev(devidend: number, devisor: number) {
  return devidend / devisor;
}

function add(val_1: number, val_2: number) {
  return val_1 + val_2;
}

function mult(val_1: number, val_2: number) {
  return val_1 * val_2;
}

function power(base: number, index: number) {
  return Math.pow(base, index);
}

function compound_interest(p: number, r: number, n: number, t: number) {
  return mult(p, power(add(1, dev(r / 100, n)), mult(n, t)));
}

export function yearly_addition(
  principal: number,
  rate: number,
  compound_period: number,
  time: number,
  addition = 0,
  esclation = 10
) {
  console.log(principal, rate, compound_period, time, addition, esclation);

  let total_contributions = principal;

  const years: number[] = [];

  for (let i = 1; i <= time; i++) {
    years.push(i);
  }

  const compounds: number[] = [principal];

  for (let i = 1; i <= years.length; i++) {
    const new_addition = compound_interest(addition, esclation, 1, i - 1);

    total_contributions = total_contributions + new_addition;

    const new_principal = compounds.length
      ? compounds[compounds.length - 1] + new_addition
      : principal;

    compounds.push(compound_interest(new_principal, rate, compound_period, 1));
  }

  return {
    principal: principal,
    rate: rate,
    time: time,
    addition: addition,
    esclation: esclation,
    compound_period: compound_period,
    results: compounds[compounds.length - 1],
    total_contributions: total_contributions
  };
}

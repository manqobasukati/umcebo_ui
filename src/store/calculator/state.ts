export interface CalculatorInterface {
  investment_details: any;
  active_view: { [name: string]: string };
  heading: { [name: string]: string | { [name: string]: string }[] };
}

const state: CalculatorInterface = {
  investment_details: null as null | any,
  active_view: { name: "calculate" },
  heading: {
    name: "Calculator",
    sub_items: [
      {
        name: "calculate",
        link: "/calculator/calculate"
      },
      {
        name: "results",
        link: "/calculator/results"
      }
    ]
  }
};

export default state;

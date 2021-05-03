import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/calculator",
    name: "Calculator",
    children: [
      {
        path: "/calculator/calculate",
        name: "Calculate",
        component: () => {
          return import("@/components/Compound/Calculate.vue");
        }
      },
      {
        path: "/calculator/results",
        name: "Results",
        component: () => {
          return import("@/components/Compound/Results.vue");
        }
      }
    ],
    component: () => {
      return import("@/components/Compound/Calculator.vue");
    }
  },
  {
    path: "/",
    name: "Layout",
    component: () => {
      return import("@/components/Layout/Layout.vue");
    },

    children: [
      {
        path: "/loans",
        name: "Loans",
        children: [
          {
            path: "/loans/all-loans",
            name: "AllLoans",
            component: () => {
              return import("@/components/Loans/AllLoans/AllLoans.vue");
            }
          },
          {
            path: "/loans/add-loan",
            name: "AddLoan",
            component: () => {
              return import("@/components/Loans/AddLoan/AddLoan.vue");
            }
          }
        ],
        component: () => {
          return import("@/components/Loans/Loans.vue");
        }
      },
      {
        path: "/expenses",
        name: "Expenses",
        component: () => {
          return import("@/components/Expenses/Expenses.vue");
        },
        children: [
          {
            path: "/expenses/all-expenses",
            name: "AllExpenses",
            component: () => {
              return import(
                "@/components/Expenses/AllExpenses/AllExpenses.vue"
              );
            }
          },
          {
            path: "/expenses/add-expenses",
            name: "AddExpenses",
            component: () => {
              return import(
                "@/components/Expenses/AddExpenses/AddExpenses.vue"
              );
            }
          },
          {
            path: "/expenses/analysis",
            name: "Analysis",
            component: () => {
              return import("@/components/Expenses/Analysis/Analysis.vue");
            }
          }
        ]
      }
    ]
  },
  {
    path: "/accounts",
    name: "Accounts",
    redirect: "/accounts/sign-in",
    component: () => {
      return import("@/components/Accounts/Accounts.vue");
    },
    children: [
      {
        path: "/accounts/sign-in",
        name: "SignIn",
        component: () => {
          return import("@/components/Accounts/SignIn.vue");
        }
      },
      {
        path: "/accounts/sign-up",
        name: "SignUp",
        component: () => {
          return import("@/components/Accounts/SignUp.vue");
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

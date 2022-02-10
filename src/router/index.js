import Vue from "vue";
import VueRouter from "vue-router";
import CalculatePrice from "../views/CalculatePrice.vue";
import CalculatorSetting from "../components/CalculatorSetting.vue";
import CreatePDF from "../components/CreatePDF.vue";
import FixedPrices from "../components/FixedPrices.vue";
import LoadingComponent from "../views/LoadingComponent.vue";

Vue.use(VueRouter);

const routes = [{
      path: "/login",
      name: "Login",
      component: () =>
         import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
      loading: LoadingComponent,
   },
   {
      path: "/signup",
      name: "Signup",
      component: () =>
         import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
      loading: LoadingComponent,
   },
   {
      path: "/forget-password",
      name: "forget-password",
      component: () =>
         import(/* webpackChunkName: "SignUp" */ "../views/ForgetPassword.vue"),
      loading: LoadingComponent,
   },
   {
      path: "/history",
      name: "history",
      component: () =>
         import(/* webpackChunkName: "history" */ "../views/HistoryPage.vue"),
      loading: LoadingComponent,
   },

   {
      path: "/calculate-price",
      name: "calculate-price",
      component: CalculatePrice,
      loading: LoadingComponent,
   },
   {
      path: "/calculate-price/settings",
      name: "calculator-setting",
      components: {
         default: CalculatePrice,
         modal: CalculatorSetting,
      },

   },
   {
      path: "/calculate-price/create-pdf",
      name: "create-pdf",
      components: {
         default: CalculatePrice,
         modal: CreatePDF,
      },
   },
   {
      path: "/calculate-price/fixed-prices",
      name: "fixed-prices",
      components: {
         default: CalculatePrice,
         modal: FixedPrices,
      },
   },


];


const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});


export default router;
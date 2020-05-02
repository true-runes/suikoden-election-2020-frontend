import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import IllustrationsCountingOfVotes from "./views/IllustrationsCountingOfVotes";

Vue.use(VueRouter);
Vue.config.productionTip = false;

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/illustrations_counting_of_votes",
      name: "illustrations_counting_of_votes",
      component: IllustrationsCountingOfVotes
    }
  ]
});

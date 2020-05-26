var Vue = require("vue");
var VueRouter = require("vue-router");

Vue.use(VueRouter);

var App = require("./App.vue");

const router = new VueRouter({
  routes: [
      { path: '/', component: App }
  ],
  scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      offset: { x: 0, y: 80 }
    }
  }
}
})

new Vue({ router }).$mount('#app')

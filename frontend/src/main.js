import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import AddAgama from './components/AddAgama.vue'
import UpdateAgama from './components/UpdateAgama.vue'
import ViewAgama from './components/ViewAgama.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  {
    name: 'AddAgama',
    path: '/agama/add',
    component: AddAgama
  },
  {
    name: 'UpdateAgama',
    path: '/agama/update/:id',
    component: UpdateAgama
  },
  {
    name: 'ViewAgama',
    path: '/agama/view',
    component: ViewAgama
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')
import Vue from 'vue';
import VueRouter from 'vue-router';
import Add_Exercise from '../views/Add_Exercise';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/exercise', name: 'Add_Exercise', component: Add_Exercise}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;
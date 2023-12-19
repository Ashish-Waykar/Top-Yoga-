import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signup from '../views/signup'
import signin from '../views/signin'
import userDashboard from '../views/userDashboard'
import store from "../store/index"
import purchase_yoga from  '../views/iniciate_purchase'
import purchase_completed from "../views/complete_purchase" 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  
  {
    path: '/purchase-yoga/:batch_yoga',
    name: 'purchase_yoga',
    component: purchase_yoga
  },
  {
    path: '/purchase-completed/:batch_yoga',
    name: 'purchase_completed',
    component: purchase_completed
  },
  
  {
    path: '/my-dashboard',
    name: 'my_dashboard',
    component: userDashboard,
    // meta: {
    //   requireLogin: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: '/',
})

// redirect the signin & signup url if iser is logged in already to my-dashboard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
  next({ name: 'signin', query: { to: to.path } });
} else if ((to.name === 'signin' || to.name === 'signup') && store.state.isAuthenticated) {
  
  next({ name: 'my_dashboard' });
  
} else {
  next();
}
});
export default router

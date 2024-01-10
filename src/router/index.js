// 載入vueRouter的資源
import { createRouter, createWebHashHistory } from 'vue-router';
// 載入外部元件方法一，使用 import的形式
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 路由表，開發時大多是調整此
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 載入外部元件方法二：使用箭頭函示
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/store', // 第一層最前面請加入斜線
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },
  ],
});
// 匯出給 main.js
export default router;

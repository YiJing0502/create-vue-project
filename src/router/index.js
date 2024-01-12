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
      name: 'store', // 给父路由起一个名字
      component: () => import('../views/StoreView.vue'),
      children: [
        {
          path: '/products', // 斜線可加可不加
          name: 'store-products', // 子路由的名字
          component: () => import('../components/ProductListComponent.vue'),
        },
        {
          path: '/dynamic/:id', // 斜線可加可不加
          name: 'store-dynamic', // 子路由的名字
          component: () => import('../views/DynamicRouterView.vue'),
        },
        {
          path: '/dynamicByProps/:id', // 斜線可加可不加
          name: 'store-dynamicByProps', // 子路由的名字
          component: () => import('../views/DynamicRouterByPropsView.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: '/cart', // 斜線可加可不加
          name: 'store-cart', // 子路由的名字
          component: () => import('../components/CartComponent.vue'),
        },
        {
          path: '/namedRouerViews',
          name: 'store-named',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: '1',
              name: 'store-named-1',
              components: {
                left: () => import('../components/CartComponent.vue'),
                right: () => import('../components/ReceiptInformationComponent.vue'),
              },
            },
            {
              path: '2',
              name: 'store-named-2',
              components: {
                left: () => import('../components/ProductListComponent.vue'),
                right: () => import('../components/CartComponent.vue'),
              },
            },
          ],
        },
      ],
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/RouteGuide.vue'),
    },
    // 404
    {
      path: '/:pathMach(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
    // 重新導向
    {
      path: '/about/:pathMach(.*)*',
      redirect: '/',
    },
  ],
});
// 匯出給 main.js
export default router;

<template>
  <div>
    <h4>路由導覽 Route Guide: 路由方法介紹</h4>
  </div>
  <div>
    <button type="button" @click="getRoute" class="btn btn-primary">getRoute</button>
    <button type="button" @click="push" class="btn btn-primary">Push</button>
    <button type="button" @click="replace" class="btn btn-primary">Replace</button>
    <button type="button" @click="go" class="btn btn-primary">Go</button>
    <hr>
    <button type="button" @click="addRoute" class="btn btn-primary">addRoute</button>

  </div>
</template>

<script>
export default {
  methods: {
    getRoute() {
      // 取得目前路由提供的相關資訊 this.$route
      // 目前路由下可以使用的方法 this.$router
    },
    push() {
      this.$router.push({ name: 'store-products' });
    },
    replace() {
      this.$router.replace('/products');
    },
    go() {
      this.$router.go(-1);
    },
    addRoute() {
      this.$router.addRoute({
        path: '/newProducts', // 斜線可加可不加
        name: 'newProducts', // 子路由的名字
        component: () => import('../components/ProductListComponent.vue'),
      });
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/all.scss';
</style>

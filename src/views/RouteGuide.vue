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
      console.log('getRoute');
      // 取得目前路由提供的相關資訊
      // console.log(this.$route);
      // console.log(this);
      // 目前路由下可以使用的方法
      console.log(this.$router);
    },
    push() {
      console.log('push');
      this.$router.push({ name: 'store-products' });
    },
    replace() {
      console.log('replace');
      this.$router.replace('/products');
    },
    go() {
      console.log('go');
      this.$router.go(-1);
    },
    addRoute() {
      console.log('addRoute');
      this.$router.addRoute({
        path: '/newproducts', // 斜線可加可不加
        name: 'newproducts', // 子路由的名字
        component: () => import('../components/ProductListComponent.vue'),
      });
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/all.scss';
</style>

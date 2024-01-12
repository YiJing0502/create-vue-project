<template>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <router-link :to="{name: 'store-products'}" class="navbar-brand mb-0 h1">GLOW</router-link>
        <router-link :to="{name: 'store-named-1'}" class="navbar-brand mb-0 h1">named1</router-link>
        <router-link :to="{name: 'store-named-2'}" class="navbar-brand mb-0 h1">named2</router-link>
        <router-link :to="{name: 'store-dynamic', params: {id: '611728268fcfd542'}}"
         class="navbar-brand mb-0 h1">Dynamic</router-link>
        <router-link :to="{name: 'store-dynamicByProps', params: {id: '611728268fcfd542'}}"
         class="navbar-brand mb-0 h1">DynamicByProps</router-link>
        <router-link :to="{name: 'store-cart'}" class="btn">
          購物車
          <span class="badge rounded-pill text-white bg-danger">{{cart.length}}</span>
        </router-link>
      </div>
    </nav>
</template>
<script>
// 使用 Pinia 方法取得資料狀態
import { mapState } from 'pinia';
// 匯入 store
// eslint-disable-next-line import/extensions
import cartStore from '../stores/cartStore.js';

export default {
  computed: {
    ...mapState(cartStore, ['cart']),
  },
};
</script>

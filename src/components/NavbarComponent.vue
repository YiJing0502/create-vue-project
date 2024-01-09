<template>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">GLOW</span>
        <button type="button" class="btn">
          購物車
          <span class="badge rounded-pill text-white bg-danger">{{cart.length}}</span>
        </button>
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

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ProductListComponent from './components/ProductListComponent.vue';

export default {
  components: {
    NavbarComponent,
    CartComponent,
    ProductListComponent,
  },
};
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductListComponent></ProductListComponent>
  </div>
</template>

<style lang="scss">
  @import './assets/all.scss';
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  .table-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
</style>

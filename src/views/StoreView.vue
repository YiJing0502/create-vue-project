<script>
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
};
</script>
<template>
    <NavbarComponent></NavbarComponent>
    <router-view></router-view>
</template>

<style lang="scss">
  @import '../assets/all.scss';
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

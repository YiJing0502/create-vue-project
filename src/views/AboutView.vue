<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    console.log(import.meta.env);
    const url = import.meta.env.VITE_PATH;
    this.axios.get(url)
      .then((res) => {
        this.data = res;
      })
      .catch((err) => {
        [this.data] = err;
      });
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

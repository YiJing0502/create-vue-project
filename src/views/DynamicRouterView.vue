<template>
  <div>
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
  created() {
    // const seed = '611728268fcfd542';
    const seed = this.$route.params.id;
    const url = `https://randomuser.me/api/?seed=${seed}`;
    this.axios.get(url)
      .then((res) => {
        this.data = res;
      })
      .catch((err) => {
        [this.data] = err;
      });
    // console.log(this.$route);
  },
};
</script>

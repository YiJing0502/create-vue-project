<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      data: {},
    };
  },
  created() {
    // const seed = '611728268fcfd542';
    const seed = this.id;
    const url = `https://randomuser.me/api/?seed=${seed}`;
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

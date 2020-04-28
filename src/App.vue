<template>
  <div id="app">
    <h1>{{ appMsg }}</h1>
    <img src="./logo.png" />
    <input type="text" v-model="msg" />
    <One></One>
  </div>
</template>

<script>
import getData from "./util";
import One from "./One.vue";
export default {
  name: "app",
  components: {One},
  data() {
    return {
      appMsg: "我是父组件",
      msg: "",
    };
  },
  created() {
    this.fetchData();
    console.log('23333');
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: 1px solid;

  h1 {
    color: green;
  }
}
</style>

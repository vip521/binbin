<template>
  <div>
    <div id="app-2">
      <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
      <h1 v-if="a">你好</h1>
      <ol>
        <li :key="i" v-for="(v,i) in arr">{{v.name}}</li>
      </ol>
      <button @click="add()">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ziji",
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      a: true,
      arr: [{ name: "张三老大" }, { name: "李四老二" }, { name: "王五老三" }]
    };
  },
  methods: {
    add() {
      // alert(1)
      this.arr.push({ name: "vip" });
      console.log(this.arr);
    }
  }
};
</script>
<style scoped>
#app-2 {
  margin: 0 auto;
  width: 500px;
  border: 3px solid black;
}
</style>

<template>
    <div id="two">
    <h1>小说列表页</h1>
   <router-link to="/shuihu">水浒传</router-link>
   <router-link to="/tianlong">天龙八部</router-link>
   <router-link to="/yanglai">羊来</router-link>
   <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"second"
}
</script>
<style scoped>
#two{
    border: 2px solid goldenrod;
}
</style>

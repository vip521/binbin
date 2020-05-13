<template>
    <div>
        <h1>首页</h1>
        <i class="iconfont  icon-xianxingshezhi"></i>
        <router-link to="/first">小说首页</router-link>
        <router-link to="/second">小说详情页</router-link>
        <router-link to="/ziji">vue自己联系教程</router-link>
        <el-button size="mini">ui组建   </el-button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'tz'
}
</script>
<style >
</style>

<template>
    <div>

    
    <div class="headTop">
        <span>ele.me</span>
        <span>登录/注册</span>
    </div>
    <div class="headCenter">
        <p>
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
        </p>
    </div>
    <div class="headBottom" @click="Gonext(gustCity)">
    <p v-text="gustCity.name"></p> <i  class="iconfont icon-jiantou"></i>
    </div>


    <div class="hotCityWrap">
    <p>热门城市</p>
    <div :key="i" v-for="(v,i) in hotCityList">
    <p @click="Gonext(v)">{{v.name}}</p>
    </div>
    </div>


    <div class="AllcityWrap" :key="index" v-for="(value,index) in allCityList">
    <p>{{index}}</p>
    <p v-if="index == 'A'">(按字母排序)</p>
    <div>
    <p @click="Gonext(v)" :key="i" v-for="(v,i) in value">
    {{v.name}}
    </p></div>
    </div>


    </div>
</template>
<script>
export default {
    name:"cityFirst",
    data(){
        return{
            gustCity:"",//当前城市
            hotCityList:[],//热门城市列表
            allCityList:{}//所有城市
        }
    },
    created(){
        this.GustCity();//调用获取定位城市
        this.HotCity();
        this.AllCity()
    },
    methods:{
        Gonext(v){
            console.log("调到下一级页面")
            this.$router.push({
                name:"cityserch",
                query:v
            })
        },
         //ajox请求
        GustCity(){
            const api = "https://elm.cangdu.org/v1/cities?type=guess"
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.gustCity =res.data
            })
        },
        HotCity(){
            const api = "https://elm.cangdu.org/v1/cities?type=hot";
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.hotCityList =res.data
            })
        },
        AllCity(){
            const api ="https://elm.cangdu.org/v1/cities?type=group"
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                console.log(res.data,"庞贵宾")
                var arrList = [];
                for (const key in res.data){
                    arrList.push(key)
                }
                arrList.sort();
                for(var i=0;i<arrList.length;i++){
                    this.$set(this.allCityList,arrList[i],res.data[arrList[i]])
                }
            })
        }
    },
   
}
</script>
<style scoped>
.headTop{
    background-color:#3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 4rem;
    color: white;
}
.headTop > span:nth-child(1){
    padding-left: 0.2rem;
}
.headTop > span:nth-child(2){
    padding-right: 0.2rem;
}
.headCenter,.headBottom{
    height: 0.4rem;
    background-color: #fff;
    line-height: 0.4rem;
    font-size: 0.13rem;
    border-bottom: 1px solid #f5f5f5;
}
.headCenter{
    margin-top: 0.4rem;
}
.headCenter >p{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.headCenter >p span:nth-child(1){
 padding-left: 0.2rem;
}
.headCenter >p span:nth-child(2){
 padding-right: 0.2rem;
}
.headBottom>p{
    float: left;
    margin-left: 0.2rem;
    font-size: 0.2rem;
    color: #3190e8;
}
.icon-jiantou{
    float: right;
    margin-right: 0.2rem;
    font-size: 0.3rem;
}
.hotCityWrap{
    border-top: 1px solid lightgrey;
    height: 1.2rem;
    margin-top: 0.1rem;
    background-color: #fff;
}
.hotCityWrap>div{
    margin-top: 0.15rem;
}
.hotCityWrap>div p{
    float: left;
    width: 25%;
    border: 1px solid  #f5f5f5;
    box-sizing: border-box;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    color: #3190e8;
}
.hotCityWrap>p{
   margin-top: 0.1rem;
   margin-left: 0.15rem;
   font-size: 0.15rem;
}
.AllcityWrap{
    margin-top: 0.1rem;
    background-color: #fff;
}
.AllcityWrap>p:nth-child(1){
  margin-left: 0.1rem;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.AllcityWrap>p:nth-child(2){
  color: gray;
  font-size: 0.15rem;
}
.AllcityWrap>div{
  overflow: hidden;
}
.AllcityWrap>div p{
  color: gray;
  width: 25%;
  height: 0.4rem;
  float: left;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.4rem;
  border: 1px solid lightgray;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
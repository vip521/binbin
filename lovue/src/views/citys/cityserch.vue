<template>
  <div @click="app()">
    
    <div class="headTop">
      <i @click="addBack()" class="iconfont icon-jiantou_zuo"></i>
      <span>{{cityObject.name}}</span>
      <span>切换城市</span>
    </div>

    <el-form class="el-from">
      <el-input :v-focus="v" class="el-input" v-model="inputValue" size="mini" placeholder="请输入学校、商务楼、地址">
      </el-input>
      <i  :class="v?a:b"></i>
      <el-button @click.stop="GetJwd()"  type="primary" class="el-button" size="mini">提交</el-button>
    </el-form>

    <p v-if="v" style="fontSize:0.1rem;margin:0.05rem 0.1rem 0.05rem;">搜索历史</p>

    <ol :key="i" v-for="(v,i) in searchArr" >
      <li @click="tableCell(v)">
        <p>{{v.name}}</p>
        <p>{{v.address}}</p>
      </li>
    </ol>
    <div v-if="historyHide">
     <ol  :key="index+value" v-for="(value,index) in historyDataA" >
      <li @click="tableCell(value)">
        <p>{{value.name}}</p>
        <p>{{value.address}}</p>
      </li>
      </ol>
      <p @click="dele()" class="Text">清空所有</p>
      </div>
     
    <div class="dialog" v-if="dialogVisible">
      <p :key="i" v-for="(v,i) in arr" @mouseenter="mouseEnter(i)" @mouseleave="mouseLeave" :class="{active:i==isActive}">
          {{v}}
          </p>
    </div>
    

  </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
  name: "cityserch",
  data() {
    return {
      cityObject: this.$route.query, //城市首页传过来到值，为城市对象
      inputValue: "" ,//搜索 输入框人为输入到内容
      searchArr:[],//搜索出来的信息数组
      historyArr:[],//存历史数据的数据
      historyData:"",//存储历史数据
      dialogVisible:false,
      active: "",
      isActive:false,
      arr:"",
      v:true,
      a:"iconfont icon-error",
      b:"P"
    };
  },
  created() {
    
  },
  methods: {
        //   鼠标移入
    mouseEnter(i){
        this.isActive = i;
        this.inputValue=this.arr[i]
       },
       //   鼠标移除
    mouseLeave(){
          this.isActive=null;
       },
    //返回上一页
    addBack() {
      this.$router.back();
    },
    //请求获取经纬度
    GetJwd() {
      if(this.inputValue===""){
        this.dialogVisible=true;
        console.log("俩了",JSON.parse(localStorage.getItem("historyArr")))
        this.arr=JSON.parse(localStorage.getItem("historyArr"))
      }else{
        const api ="https://elm.cangdu.org/v1/pois?city_id="+this.cityObject.id+"&keyword="+this.inputValue+"&type=search"
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.searchArr = res.data;
        this.history();
      });
      }
      
    },
    //存数据数、取数据
    history(){
      this.historyArr.push(this.inputValue)
      // console.log(this.historyArr,"你看看")
       localStorage.setItem("historyArr", JSON.stringify(this.historyArr));
    },
    app(){
      this.dialogVisible=false;
    },
    //点击跳转详情页1.将数据对象存到存储器的一个公共数组里2.传递给下一轮播页面
    tableCell(v){
      this.$store.commit("historyFn",v);
      this.$router.push({
        name:"cityInfor",
        query:v
      })
    },
    //清空历史数据
    dele(){
      console.log("删除")
      this.$store.commit("dele")
    }
  },
  computed: {
    ...mapState(['historyHide',"historyDataA"]),
  },
};
</script>
<style  scoped>
.headTop {
  background-color: #3190e8;
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
.headTop > span:nth-child(2) {
  font-size: 0.22rem;
}
.headTop > span:nth-child(3) {
  margin-right: 0.1rem;
  font-size: 0.15rem;
}
.icon-jiantou_zuo {
  margin-right: 0.2rem;
  font-size: 0.3rem;
}
.icon-error{
  position: absolute;
  top: 0.15rem;
  right: 0.25rem;
  font-size: 0.2rem;
  opacity: 1;
}
.P{
  opacity: 0;
}
.el-from {
  margin-top: 0.5rem;
  height: 0.9rem;
  background-color: #fff;
  border: 1px solid lightgray;
  position: relative;
}
.el-from > .el-input {
  margin: 0.1rem 0.2rem;
  width: 3.3rem;
}
.el-input :focus {
  border: 1px solid lightgray;
}
.el-from > .el-button {
  margin: 0rem 0.2rem 0.1rem 0.2rem;
  width: 3.3rem;
  color: white;
  font-size: 0.15rem;
}
ol{
  background-color: #fff;
  border-top: 0.5px solid lightgray;
}
ol>li{
  height: 0.6rem;
}
ol>li p{
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  font-weight: 300;
}
ol>li p:nth-child(2){
  margin-top: 0.1rem;
  font-weight: 200;
  font-size: 0.1rem;
  color: #999999;
}
.dialog{
  position: fixed;
  top:1rem;
  left: 0.5rem;
  border: 1px solid black;
  width: 3rem;
  height: 2rem;
  background-color: #fff;
}
.dialog>p{
  height: 0.3rem;
  padding-top: 0.1rem;
  padding-left: 0.1rem;
}
.active{
  background-color:gray; 
}
.Text{
  height:0.6rem;
  line-height:0.6rem;
  background-color:white;
  border-top:1px solid lightgray;
  text-align: center;
}
</style>
<template>
    <div>
        
    <div class="headTop">
      <i class="iconfont icon-xianxingsousuo"></i>
      <span @click="a()" >{{cityInforeData.name}}</span>
      <span>登录/注册</span>
    </div> 

    <div class="divSwiper" style=" margin-top: 0.4rem;" >
    <swiper  v-show="listArr.length > 0" class="swiper" :options="swiperOption">
    <swiper-slide class=" swiperSlide" v-show="listArr.length > 0"  :key="i" v-for="(v,i) in listArr">
        <div  :key="ind" v-for="(va,ind) in v">
           <img :src="'https://fuss10.elemecdn.com'+va.image_url" alt />
           <p>{{va.title}}</p>
          </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   </div>
   <shopList></shopList>
    </div>
</template>
<script>
import shopList from "./shopList"
export default {
    name:"cityInfor",
    components:{shopList},
    data(){
        return{
            cityInforeData:this.$route.query,
            swiperOption:{
                loop: true, // 循环模式选项
                // autoplay:true,
               // 如果需要分页器
              pagination: {
                el: ".swiper-pagination"
                }
            },
            listArr:[],//存放轮播图里边的数组
        }
    },
    created(){
      this.plantingList()
    },
    methods:{
        a(){
            // console.log(this.cityInforeData)
        },
        plantingList(){
          const api = "https://elm.cangdu.org/v2/index_entry"
          this.$http({
            url:api,
            method: "get"
          }).then(res=>{
            // console.log(res.data,"贵宾-轮播")
            const one = [];
            const two = [];
        for (let i = 0; i < res.data.length; i++) {
          if (i < 8) {
            one.push(res.data[i]);
          } else {
            two.push(res.data[i]);
          }
        }
            this.listArr.push(one);
            this.listArr.push(two);
            // console.log(this.listArr,"dddddd")
                      })
        }
    }
}
</script>
<style lang="scss" scoped>
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
  font-weight: 2rem;
  color: white;
}
.headTop > span:nth-child(2) {
  font-size: 0.18rem;
}
.headTop > span:nth-child(3) {
  margin-right: 0.1rem;
  font-size: 0.15rem;
}
.icon-xianxingsousuo {
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
.divSwiper{
    border: 1px solid lightgray;
    background-color: #fff;
}
.swiper{
height: 2rem;
}
.swiperSlide {
  display: flex;
  flex-wrap: wrap;
}
.swiperSlide div {
  width: 25%;
  margin-bottom: 0.1rem;
  text-align: center;
}
.swiperSlide>div img {
  width: 0.5rem;
}
.swiperSlide>div p{
  margin: 0.1rem;
  font-weight: 0.01rem;
 font-size: 0.12rem;
}
</style>

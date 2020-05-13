<template>
    <div>
        <p>附近商家</p>
        <ul :key="i" v-for="(v,i) in shoplistArr">
           <li>
              <img :src="'//elm.cangdu.org/img/'+v.image_path" alt />
              <span>{{v.name}}</span> 
               
               </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"shopList",
    data() {
        return {
            latitude:this.$route.query.latitude,
            longitude:this.$route.query.longitude,
            shoplistArr:[],
        }
    },
    created(){
    this.shoplist()
    },
    methods:{
        shoplist(){
         const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude;
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                console.log(res.data,"商店列表")
                this.shoplistArr = res.data
            })
        }
    }
}
</script>
<style lang="scss" scoped>
ul>li{
    height: 0.7rem;
    margin: 0.2rem 0;
    img{
        height: 100%;
    }
}
</style>
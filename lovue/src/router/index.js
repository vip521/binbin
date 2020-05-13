import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import First from "@/components/first";
import Second from "@/components/second";
import Shuihu from "@/components/shuihu";
import Tianlong from "@/components/tianlong";
import Yanglai from "@/components/yanglai";
import Ziji from "@/components/ziji";
//城市引入路径
import CityFirst from "@/views/citys/cityFirst"
import Cityserch from "@/views/citys/cityserch"
import CityInfor from "@/views/citys/cityInfor"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "cityFirst",
      component: CityFirst
    },
    {
      path: "/cityFirst",
      name: "cityFirst",
      component: CityFirst
    },
    {
      path: "/cityserch",
      name: "cityserch",
      component: Cityserch
    },
    {
      path: "/cityInfor",
      name: "cityInfor",
      component: CityInfor
    },
    {
      path: "/first",
      name: "first",
      component: First
    },
    {
      path: "/second",
      name: "second",
      component: Second,
      children: [
        {
          path: "/shuihu",
          name: "shuihu",
          component: Shuihu
        },
        {
          path: "/tianlong",
          name: "tianlong",
          component: Tianlong
        },
        {
          path: "/yanglai",
          name: "yanglai",
          component: Yanglai
        }
      ]
    },
    {
      path: "/ziji",
      name: "ziji",
      component: Ziji
    }
  ]
});

<template>
  <div class="login-content">
    <div class="loginTop">
       <i class="iconfont icon-jiantou_zuo" @click="back"></i>
       <div class="loginText">密码登录</div>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="60px" class="login-from">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
     <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item> 
      <el-form-item>
        <el-col :span="8">
            <el-input v-model="form.captcha_code"   type="code" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <img  :src="form.code&&form.code" alt />
        </el-col>
        <el-col :span="8" class="textCode">
            <p>看不清</p>
            <p class="img_b" @click="getChangecode()">换一张</p>
        </el-col>
        
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {login,getCode} from "../../api/login"
export default {
    name:"denglu",
    data() {
    return {
      dialogVisible:false,
      form: {
        username: "",
        password: "",
        code:"",
        captcha_code:""
      },
      rules:{
          username:[
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
           password:[
         { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
      }
    };
    
  },
   created(){
    this.getcode()
  },
  methods:{
      async getUserinfo(){
         const res = await login(this.form.username,this.form.password,this.form.captcha_code);
         console.log(res.data)
      },
      async getcode(){
        const res =await getCode()
        console.log(res.data.code)
        this.form.code=res.data.code
      },
       getChangecode(){
         this.getcode()
       },
      submitForm(){
        this.getUserinfo()
       this.$router.push({
         name:"cityFirst"
       })
      },
      back(){
          this.$router.back(-1)
      }
  }
}
</script>
<style lang="scss" scoped>
.login-content{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    .loginTop{
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.4rem;
        display: flex;
        align-items: center;
        font-weight: 400;
        color: white;
        .icon-jiantou_zuo{
            font-size: 0.3rem;
            color: black;
        }
        .loginText{
            font-size: 0.2rem;
            margin: 0 auto;
        }
    }
    .login-from{
    margin: 0.4rem 0;
    background-color: rgba(255,255,255,0.8);
    padding: 30px;
    border-radius: 20px;
                }
    }
.textCode{
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 direction: column;
 font-size: 0.15rem;
 &>p:nth-child(1){
   line-height: 17px;
 }
  &>p:nth-child(2){
  color: red;
   line-height: 15px;
   margin-bottom: 0px;
 }
}
</style>
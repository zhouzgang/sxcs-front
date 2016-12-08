<template>
    <div class="login">
        <div class="login-body">
            <header>
                <span><i class="glyphicon glyphicon-user"></i> 用户登录</span>
            </header>
            <el-form class="login-form"  ref="form" :model="user" label-width="80px">
                <el-form-item label="用户名" style="margin-bottom: 0px">
                    <el-input size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" style="margin-bottom: 0px">
                    <el-input size="small" type="password" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item  label="验证码" style="margin-bottom: 0px">
                    <el-input class="verify-input" size="small"  v-model="user.name"></el-input>
                    <img class="verify-img" src="" alt="验证码" height="30px" width="30%">
                </el-form-item>
                <el-form-item style="margin-left: -40px; margin-bottom: 0px;">
                    <router-link to="/" class="to-login">登陆</router-link>
                    <router-link to="/register" class="to-register">注册账号</router-link>
                    <router-link to="/qrcode" class="to-qrcode">手机APP下载</router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user: {
                    name: '',
                    passwd: ''
                }
            }
        },
        components:{
        }
    }
</script>

<style>
    .login {
        display: flex;
        width:500px;
        height:300px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.08);
    }

    .login-body {
        width: 95%;
        height: 95%;
        margin: auto;
        border-radius: 6px;
        background-color: #f9fafc;
    }

    header {
        display:block;
        height:36px;
        line-height:36px;
        font-family:Microsoft Yahei;
        font-size:18px;
        padding: 5px 0 20px 38px;
        font-weight:normal;
        color:#005b86;
    }

    .login-form {
        width: 80%;
        margin: auto;
    }

    .el-form-item {
        height:45px;
    }

    .el-input {
        width:90%;
        line-height:32px;
        margin-bottom: 0px;
        text-align:right; padding-right:10px;
        color:#666;
    }

    .el-input--small .el-input__inner {
        height: 40px;
    }

    .verify-input {
        width:55%;
        display: inline-flex;
    }

    .verify-img {
        position: absolute;
        top: 0.8px;
    }

    .to-qrcode, .to-register, .return-login{
        text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
        background-image: linear-gradient(to bottom,#e69e58,#c37317);
        line-height: 40px;
        border-radius: 4px;
        padding: 10px 12px;
        font-size: 12px;
        margin-left: 20px;
    }

    .to-qrcode:hover , .to-register:hover {
        color: #fff;
        background-color: #d3832d;
    }

    .to-login{
        text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
        background-image: linear-gradient(to bottom,#dd5d5d,#b53434);
        line-height: 40px;
        border-radius: 4px;
        padding: 10px 12px;
        font-size: 12px;
        margin-left: 20px;
    }

</style>

<template>
    <div class="register">
        <div class="register-body">
            <header>
                <span><i class="glyphicon glyphicon-user"></i> 用户注册</span>
            </header>
            <el-form class="register-form" ref="form" :model="user" label-width="70px">
                <el-form-item label="区域筛选" style="margin-bottom: 0px; ">
                    <el-input size="small" ></el-input>
                </el-form-item>
                <el-form-item class="item" label="真实姓名" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="item" label="用户名" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="item" label="密码" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="item" label="确认密码" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="item" label="电话" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item class="item" label="邮箱" style="margin-bottom: 0px">
                    <el-input class="item-input" size="small" v-model="user.name"></el-input>
                </el-form-item>
                <dev style="margin-left:30%; margin-top: 20px;">
                    <el-button type="danger" @click="" style="margin-right: 100px;">提交</el-button>
                    <router-link to="/login" class="return-login" style="margin-left: 20px;">返回登陆</router-link>
                </dev>
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
    .register {
        display: flex;
        width:600px;
        height:400px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.08);
        font-size: 12px;
    }

    .register-body {
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

    .register-form {
        width: 90%;
        margin: auto;
    }

    .item {
        width: 48%;
        display: inline-table;
    }

    .item-input {

    }
</style>

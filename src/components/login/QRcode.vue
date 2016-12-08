<template>
    <div class="qrcode">
        <div class="qrcode-body">
            <div id="longgangORCode" style="">
                <img class="qrcode-img" alt="扫一扫下载" src="../../assets/images/android_lg.png">
                <img class="qrcode-img" alt="扫一扫下载" src="../../assets/images/android_lh.png" style="margin-left:20px">
            </div>
            <router-link to="/login" class="return-login" style="margin-left: 42%;">返回登陆</router-link>
        </div>
    </div>
</template>

<script> 
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{ 
        }
    }
</script>

<style>
    .qrcode {
        display: flex;
        width:600px;
        height:350px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.08);
        font-size: 12px;
    }

    .qrcode-body {
        width: 95%;
        height: 95%;
        margin: auto;
        border-radius: 6px;
        background-color: #f9fafc;
    }
    .qrcode-img{
        width: 270px;
        height: 270px;
    }

    .return-login {


    }
</style>

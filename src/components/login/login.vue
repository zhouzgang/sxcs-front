<template>
    <div class="index">
        <p class="index-logo"></p>
        <div class="index-content">
            <router-view></router-view>
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
    p {
      margin: 0 auto 0;
    }
    .index {
        height: 100%;
        display: flex;
        background-image: url("../../assets/images/login/login_background.jpg");
    }


    .index-logo{
        position:absolute;
        width:524px;
        height:105px;
        top:20%;
        left:50%;
        margin-left:-262px;
        margin-top:-30px;
        background:url("../../assets/images/login/login_logo.png") no-repeat;
    }
    .index-content{
        margin: auto;
    }
</style>

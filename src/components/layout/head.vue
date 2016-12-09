<template>
    <div class="head">
        <div class="head-logo"><a href="#" title="三小场所安全管理系统"></a></div>
        <div class="head-menu">
            <sxcsMenu></sxcsMenu>
        </div>
        <div class="head-sys-operate">
        <sysOperate></sysOperate>
    </div>
</template>
<script>
    import sxcsMenu from "./sxcsMenu.vue"
    import sysOperate from "./sysOperate.vue"
    export default{
        data(){
            return{
                msg:'this is head'
            }
        },
        components:{
            sxcsMenu,
            sysOperate
        }
    }
</script>

<style>
    .head {
        width:100%;
        height:60px;
        background:#a51717 url(../../assets/images/head_bg.jpg) no-repeat;
    }
    .head-logo {
        float:left;
        width:300px;
        height:50px;
        margin:5px 0 0 10px;
        background:url(../../assets/images/logo.png) no-repeat;
    }
    .head-menu {
        float:left;
        width:550px;
        height:60px;
        margin-left: 100px;
    }
    .head-sys-operate {
        float: right;
        margin-right: 100px;
        height: 60px;
        width: 350px;
    }
</style>

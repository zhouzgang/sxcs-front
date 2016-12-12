<template>
    <div class="head">
        <div class="head-logo"><a href="#" title="三小场所安全管理系统"></a></div>
        <div class="head-menu">
            <sxcsMenu></sxcsMenu>
        </div>
        <div class="head-sys-operate">
            <sysOperate></sysOperate>
        </div>
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
    }
    .head-logo {
        float:left;
        height:50px;
        width: 300px;
        margin:5px 0 0 10px;
        background:url(../../assets/images/logo.png);
    }
    .head-menu {
        float: left;
        margin-left: 10%;
    }
    .head-sys-operate {
        float: right;
        margin-right: 5%;
    }
</style>

<template>
    <div class="content">
        <el-row>
            <div class="content-head">
                <span class="glyphicon glyphicon-home"></span>
                <span><a href="infoManagement.html">首页</a></span> >
                <span><a href="user.html">权限管理--当前路由页</a></span>
            </div>
            <div class="content-body">

            </div>
        </el-row>
    </div>
</template>

<script>
    export default{
        name: "content",
        data(){
            return{
                msg:'this is content'
            }
        },
        components:{
        }
    }
</script>


<style>
    .content-head {
        height:42px;
        line-height:42px;
        background:#F6F6F6 url(../../assets/images/content_top.jpg) repeat-x;
        border-bottom:1px solid #e5b3b3;
        padding:0 20px;
        color:#999;
        font-size:12px;
    }
    .content-head span{
        padding:0 3px;
    }
    .content-head span a{
        color:#666;
    }

</style>

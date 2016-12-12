<template>
    <div class="sxcs-nav">
        <ul class="uli meun_list" style="padding-left: 0px">
            <li class="">
                <a href="#">查询</a>
            </li>
            <li class="">
                <a href="#">地图</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: "sxcs-nav",
        data(){
            return{
                msg:'this is nav'
            }
        },
        components:{
        }
    }
</script>


<style>
    .sxcs-nav ul{
        width: 155px;
        margin: 20px auto;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 5px #05274d;
    }
    .sxcs-nav ul li {
        height: 40px;
        margin: 0 auto 0;
        border-radius: 0px;
        overflow: hidden;
        border-bottom: 1px solid #FFF;
        border-top: 1px solid #e5b3b3;
    }

    .sxcs-nav ul li a {
        /*width: 155px;*/
        font-size: 14px;
        display: block;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        cursor: pointer;
        color: #444;
        background: url(../../assets/images/stab.jpg) no-repeat -15px center;
        -webkit-transition: background 0.3s;
        -moz-transition: background 0.3s;
        -o-transition: background 0.3s;
        transition: background 0.3s;
    }
    .sxcs-nav ul li a:hover {
        text-decoration: none;
        color: #FFF;
        background: url(../../assets/images/stab_hover.jpg) no-repeat -15px center;
    }


</style>

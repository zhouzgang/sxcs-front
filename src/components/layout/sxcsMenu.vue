<template>
    <div class="sxcsMenu">
        <ul>
            <li><a href="#">信息管理</a></li>
            <li><a href="#">menu2</a></li>
            <li><a href="#"> menu3</a></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "sxcsMenu",
        data(){
            return {
                msg: 'this is menu'
            }
        },
        components: {}
    }
</script>

<style>
    .sxcsMenu ul {
        margin: 0;
        padding: 0;
    }
    .sxcsMenu li{
        float: left;
        width: 100px;
        height: 36px;
        text-align: center;
        margin: 12px 10px 0 0;
    }
    .sxcsMenu li a {
        display: block;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #b82d2d;
        background: url(../../assets/images/menu_a_bg.png) no-repeat;
        border-radius: 25px;
        -webkit-transition: background 0.2s;
        -moz-transition: background 0.2s;
        -o-transition: background 0.2s;
        transition: background 0.2s;
    }
    .sxcsMenu li a:hover {
        background: #d78226 url(../../assets/images/menu_a_bg_hover.png) no-repeat;
        color: #a10f0f;
        border: 1px solid #FFF;
        text-decoration: none;
    }
</style>

<template>
    <div class="left">
        <img src="../../assets/images/snav.jpg" style="width: 100%; height: 42px;">
        <div>
            <sxcsNav></sxcsNav>
        </div>
    </div>
</template>

<script>
    import sxcsNav from "./sxcsNav.vue"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            sxcsNav
        }
    }
</script>

<style>
    .left {
        background:url(../../assets/images/left_bg.jpg) no-repeat;
        background-size: cover;
        height: 890px;
    }
</style>

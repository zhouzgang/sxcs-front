<template>
    <div>
        <div>{{ msg }}</div>
        <ul>
            <li><router-link to="content">数据展示</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style>
    body{
    }
</style>
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

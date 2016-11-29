<template>
  <div >
    <my-header></my-header>
    <h1>{{ msg }}</h1>
    <a v-link="{ path: '/header'}">Header</a>
    <a v-link="{ path: '/footer'}">Footer</a>
    <!--用于渲染匹配的组件-->
    <router-view></router-view>

    <my-footer></my-footer>
  </div>
  <hr/>

</template>

<script>
  export default{
      data(){
          return{
              msg:'hello vue'
          }
      },
      components:{
          'my-header': require('components/login/my-header.vue'),
          'my-footer': require('components/login/my-footer.vue'),
      }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

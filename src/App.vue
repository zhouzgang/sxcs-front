<template>
  <div id="app">
    <!--<my-header></my-header>-->
    <h1>{{ msg }}</h1>
    <!--<a v-link="{ path: '/header'}">Header</a>-->
    <!--<a v-link="{ path: '/footer'}">Footer</a>-->
    <!--&lt;!&ndash;用于渲染匹配的组件&ndash;&gt;-->
    <!--<router-view></router-view>-->

    <!--<my-footer></my-footer>-->
  </div>
  <hr/>

</template>

<script>

 import myHeader from './components/login/my-header.vue'
 import myFooter from './components/login/my-footer.vue'

  export default{
      data(){
          return{
              msg:'hello vue'
          }
      },
      components:{
          'my-header': myHeader,
          'my-footer': myFooter,
      }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

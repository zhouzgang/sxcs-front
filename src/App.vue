<template>
  <div>
    <div class="app-head">
        <router-view name="head"></router-view>
    </div>

    <div>
      <div class="app-left">
          <router-view name="left"></router-view>
      </div>
      <div class="app-content">
        <router-view name="content"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      active: '',
      search_text: ''
    }
  },
  ready: function () {
    this.active = this.$route.params.type || ''
  },
  methods: {
    searchTotal: function (searchText) {
      this.$route.router.go(`/search/1?q=${searchText}`)
    }
  },
  watch: {
    '$route': function (to, from) {
      this.active = to.path.split('/')[1] || ''
    }
  }
}
</script>


<style>
  .app-head {
    width: 100%;
    height:60px;
    background:#a51717 url(./assets/images/head_bg.jpg) no-repeat;
    background-size: cover;
  }
  .app-left {
    float:left;
    width: 10%;
  }

  .app-content {
    width: 90%;
    float:left;
    background:#FFF;
    overflow:auto;
  }
</style>

























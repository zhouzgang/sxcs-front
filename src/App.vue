<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <router-view name="head"></router-view>
      </div></el-col>
    </el-row>

    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <router-view name="left"></router-view>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <router-view name="content"></router-view>
        </div>
      </el-col>
    </el-row>
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


</style>

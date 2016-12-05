<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <left-module v-bind:active="active"></left-module>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <sxcs-head></sxcs-head>
      </div></el-col>
    </el-row>

    <el-row>
      <el-col :span="3"><div class="grid-content bg-purple">fasdfafsfafds</div></el-col>
      <el-col :span="21"><div class="grid-content bg-purple-light">fasdfsa2werqwe4234</div></el-col>
    </el-row>
  </div>
</template>

<script>
import LeftModule from './components/left.vue'
import NavModule from './components/nav.vue'
import SxcsHead from './components/layout/head.vue'

export default {
  name: 'App',
  components: {
    LeftModule,
    NavModule,
    SxcsHead
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
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>

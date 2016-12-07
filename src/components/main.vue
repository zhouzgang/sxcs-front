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

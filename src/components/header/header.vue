<template>
  <div class="header-wrapper">
    <div class="layout">
      <el-row>
        <el-col :span="3"><a href="" class="logo"></a></el-col>
        <el-col :span="2"><a href="">统计列表</a></el-col>
        <el-col :span="2"><a href="#/expenditure">消费列表</a></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  };
</script>
<style scoped>
  .header-wrapper{
    width: 100%;
    background-color: #474758;
    position: fixed;
    z-index: 500;
  }
  .logo{
    background-image: url("../../assets/logo.png");
    background-position:left;
    background-size:30px 30px;
    background-repeat:no-repeat;
  }
  .el-col {
    font-size: 14px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
  .el-col a{
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
  .el-col:hover{
    color: #00CFFF;
    cursor: pointer;
  }
</style>

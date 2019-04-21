<template>
  <div class="expenditure-wrapper">
    <div class="layout">
      <el-row>
        <el-col :span="2"><span>消费类型 ：</span></el-col>
        <el-col :span="4">
          <el-select v-model="queryData.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <mu-button color="primary" @click="commitInfo">查询</mu-button>
        <mu-button color="primary" @click="insertStatus = true">新增</mu-button>
        <mu-button color="primary" @click="clearInfo">重置</mu-button>
      </el-row>
      <el-table :data="tableData" stripe>
        <el-table-column prop="title" label="标题" width="200"></el-table-column>
        <el-table-column prop="type" label="类型" :formatter="stateFormat" width="150"></el-table-column>
        <el-table-column prop="money" label="金额" width="150"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"  :formatter="dateFormat" width="200"></el-table-column>
        <el-table-column prop="remark" label="详细描述"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增消费记录" :visible.sync="insertStatus">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="金额" :label-width="formLabelWidth">
          <el-input type="number" v-model="form.money"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submitInfo(false)">取 消</el-button>
        <el-button type="primary" @click="submitInfo(true)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {select,save} from '../../api/api';
  export default {
    name: "expenditure",
    data(){
      return{
        //查询参数
        queryData:{
          pageNum: 1,
          pageSize: 20,
          type: ''
        },
        //消费类型
        options: [
          {value:1, label:"餐饮"},
          {value:2, label:"服饰"},
          {value:3, label:"交通"},
          {value:4, label:"娱乐"},
          {value:5, label:"住房"},
        ],
        //列表数据
        tableData: [],
        insertStatus: false,
        form:{
          title:'',
          type:'',
          money:'',
          remark:'',
        },
        formLabelWidth: '100px'
      }
    },
    methods:{
      //查询
      commitInfo: function(){
        select(this.queryData).then((res) => {
          if(res != null && res.data.code === "0"){
            this.tableData = res.data.data.list;
          }else{
            this.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch((res) => {
          console.error(res);
        });
      },
      //重置
      clearInfo: function(){
        this.queryData.type = '';
      },
      submitInfo: function (isSub) {
        if(isSub){
          save(this.form).then((res) =>{
            if(res != null && res.data.code === "0"){
              this.$message({
                message: '操作成功',
                type: 'success'
              });
              //刷新数据
              this.commitInfo();
            }else{
              this.$message({
                message: res.data.message,
                type: 'warning'
              });
            }
            this.form.title = '';
            this.form.type = '';
            this.form.money = '';
            this.form.remark = '';
          }).catch((res) => {
            console.error(res);
          })
        }
        this.insertStatus = false;
      },
      dateFormat: function (row, column) {
        const date = row[column.property];
        if (date == undefined) {
          return "";
        }
        const time = new Date(date);
        const year = time.getFullYear();
        const month = time.getMonth()+1;
        const day = time.getDate();
        const hh = time.getHours();
        const mm = time.getMinutes();
        const ss = time.getSeconds();
        return year+"-"+month+"-"+day+" "+hh+":"+mm+":"+ss;
      },
      stateFormat:function (row, column) {
        const state = row[column.property];
        if (state == undefined) {
          return "";
        }
        switch (state) {
          case 1:
            return "餐饮";
          case 2:
            return "服饰";
          case 3:
            return "交通";
          case 4:
            return "娱乐";
          case 5:
            return "住房";
        }
      }
    },
    //初始化
    created(){
      this.commitInfo();
    }
  }
</script>

<style scoped>
  .expenditure-wrapper {
    padding-top: 50px;
  }
  .el-row{
    height: 50px;
    line-height: 50px;
  }
  .el-col span {
    font-weight: bold;
  }
  .el-col select {
    width: 100%;
  }
  .mu-button{
    height: 35px;
    margin-right: 20px;
  }
  .el-table{
    width: 100%;
  }
</style>

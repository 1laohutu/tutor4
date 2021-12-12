<template>
  <div>
    <el-table
    :data="msg.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="#"
      prop="id">
    </el-table-column>
    <el-table-column
      label="菜单名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="菜单等级"
      prop="level">
    </el-table-column>
    <el-table-column
      label="父菜单id"
      prop="parant">
    </el-table-column>
    <el-table-column
      label="序列"
      prop="sequence">
    </el-table-column>
    <el-table-column
      label="路径"
      prop="address">
    </el-table-column>
    <el-table-column
      label="平台"
      prop="platform">
    </el-table-column>
    <el-table-column
      label="图标"
      prop="icon">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)">添加</el-button>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg: null
        }
    },
    mounted(){
        this.rege()
    },
    methods:{
        rege(){
             this.$http({
                 method: 'post',
                 url: 'http://127.0.0.1:8088/home/sousuo'
             }).then(response=>{
                 this.msg=response.data.data
             })
        }
    }
}
</script>

<style>

</style>
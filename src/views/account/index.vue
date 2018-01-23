<template>
<div>
  <el-table :data="AccountTableData" style="width: 100%" stripe height="400">
    <el-table-column fixed prop="name" label="賬號" align="center"></el-table-column>
    <el-table-column fixed prop="nickname" label="昵称" align="center"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100" align="center">
      <template slot-scope="scope">
        <el-button class="el-icon-edit" size="mini" @click="handleEdit(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
   </el-table>
   <el-dialog title="賬號編輯" :visible.sync="dialogFormVisible" width="70%">
    <el-form :model="AccountData">
      <el-form-item label="賬號" :label-width="formLabelWidth">
        <el-input class='editInput' v-model="AccountData.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth">
        <el-input class='editInput' v-model="AccountData.nickname" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">確 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    handleEdit (index, row) {
      this.AccountData = row
      this.dialogFormVisible = true
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      AccountData: {
        name: '',
        password: '',
        nickname: ''
      },
      AccountTableData: [
        {
          name: 'admin',
          nickname: '系統管理員'
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>

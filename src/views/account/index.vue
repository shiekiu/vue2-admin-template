<template>
<div>
  <div style="display:flex;justify-content: space-between;align-items: center;">
    <div>
    </div>
    <div>
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-search">查询</el-button>
      <el-button style="margin-left: 10px;" type="success" icon="el-icon-edit-outline">新增</el-button>
    </div>
  </div>
  <el-table :data="AccountTableData" style="width: 100%" stripe height="400">
    <el-table-column fixed prop="user_name" label="賬號" align="center"></el-table-column>
    <el-table-column fixed prop="nickname" label="昵称" align="center"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100" align="center">
      <template slot-scope="scope">
        <el-button class="el-icon-edit" type="info" size="mini" @click="handleEdit(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
   </el-table>
   <el-dialog title="賬號編輯" :visible.sync="dialogFormVisible" width="70%">
    <el-form :model="AccountData">
      <el-form-item label="賬號" :label-width="formLabelWidth">
        <el-input class='editInput' v-model="AccountData.user_name" auto-complete="off"></el-input>
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
import { getAccoutList, getAccountById } from '../../api/account'
import statuscode from '../../utils/code.json'
export default {
  mounted () {
    getAccoutList().then((res) => {
      let data = res.data
      if (data.statuscode === statuscode.Success) {
        this.AccountTableData = data.data.userList
      }
    }).catch(function (error) {
      this.$message.error(error)
    })
  },
  methods: {
    handleEdit (index, row) {
      getAccountById(row.id).then((res) => {
        let data = res.data
        if (data.statuscode === statuscode.Success) {
          this.AccountData = data.data.user
          this.dialogFormVisible = true
        }
      }).catch(function (error) {
        this.$message.error(error)
      })
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      AccountData: {
        user_name: '',
        password: '',
        nickname: ''
      },
      AccountTableData: [
        {
          user_name: '',
          nickname: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>

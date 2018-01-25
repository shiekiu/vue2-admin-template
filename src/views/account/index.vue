<template>
<div>
  <div class="search-container">
    <div>
      <el-button style="margin-left: 10px;" type="success" icon="el-icon-edit-outline" @click="handleAdd">新增</el-button>
    </div>
    <div>
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="handleSearch"></el-button>
    </div>
  </div>
  <el-table :data="listData"
    style="width: 100%" stripe height="400">
    <el-table-column fixed prop="user_name" label="賬號" align="center"></el-table-column>
    <el-table-column fixed prop="nickname" label="昵称" align="center"></el-table-column>
    <el-table-column label="操作" width="150" align="center" fixed="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="el-icon-edit"></el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" class="el-icon-delete"></el-button>
      </template>
    </el-table-column>
   </el-table>
   <el-dialog title="賬號編輯" :visible.sync="dialogFormVisible" width="70%">
    <el-form :model="formData" ref="formData">
      <el-form-item label="賬號" :label-width="formLabelWidth">
        <el-input class='editInput' v-model="formData.user_name" auto-complete="off" placeholder="賬號" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname" :rules="[ { required: true, message: '请输入昵称', trigger: 'blur' } ]">
        <el-input class='editInput' v-model="formData.nickname" auto-complete="off" placeholder="昵称"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSave('formData')">確 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script type="text/ecmascript-6">
import { getAccoutList, getAccountById } from '../../api/account'
import statuscode from '../../utils/code.json'
export default {
  name: 'account',
  data () {
    return {
      listData: [
        {
          user_name: '',
          nickname: ''
        }
      ],
      dialogFormVisible: false,
      formLabelWidth: '80px',
      formData: {
        id: 0,
        user_name: '',
        password: '',
        nickname: ''
      }
    }
  },
  mounted () {
    this.handleSearch()
  },
  methods: {
    handleEdit (index, row) {
      getAccountById(row.id).then((res) => {
        let data = res.data
        if (data.statuscode === statuscode.Success) {
          this.formData = data.data.user
          this.dialogFormVisible = true
        }
      }).catch(function (error) {
        this.$message.error(error)
      })
    },
    handleSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
        } else {
          return false
        }
      })
    },
    handleAdd () {
      this.dialogFormVisible = true
    },
    handleSearch () {
      getAccoutList().then((res) => {
        let data = res.data
        if (data.statuscode === statuscode.Success) {
          this.listData = data.data.userList
        }
      }).catch(function (error) {
        this.$message.error(error)
      })
    }
  }
}
</script>
<style scoped>
</style>

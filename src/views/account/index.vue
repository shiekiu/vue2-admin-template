<template>
<div>
  <div class="search-container">
    <div>
      <el-button style="margin-left: 10px;" type="success" icon="el-icon-edit-outline">新增</el-button>
    </div>
    <div>
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-search">查询</el-button>
      <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出excel</el-button>
    </div>
  </div>
  <el-table :data="AccountTableData"
    v-loading.fullscreen.lock="listLoading"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%" stripe height="400">
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
        <span>{{AccountData.user_name}}</span>
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
// import exportExcel from '../../utils/ExportExcel'
export default {
  mounted () {
    getAccoutList().then((res) => {
      let data = res.data
      if (data.statuscode === statuscode.Success) {
        this.AccountTableData = data.data.userList
        this.listLoading = false
      }
    }).catch(function (error) {
      this.$message.error(error)
      this.listLoading = false
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
    },
    handleDownload () {
      this.downloadLoading = true
      /* exportExcel.then(excel => {
        const tHeader = ['账号', '昵称']
        const filterVal = ['user_name', 'nickname']
        const list = this.AccountTableData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel(tHeader, data, this.filename)
        this.downloadLoading = false
      }) */
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
      listLoading: true,
      downloadLoading: false,
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

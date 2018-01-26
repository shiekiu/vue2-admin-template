<template>
<div>
    <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出excel</el-button>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column  prop="address" label="地址"></el-table-column>
    </el-table>
</div>
</template>
<script>
let { exportJsonToExcel } = require('@/utils/Export2Excel')
export default {
  methods: {
    handleDownload () {
      this.downloadLoading = true
      require.ensure([], () => {
        const tHeader = ['日期', '姓名', '地址']
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        exportJsonToExcel(tHeader, data, '列表excel')
        this.downloadLoading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  },
  data () {
    return {
      tableData: [
        {
          date: '1997-01-01',
          name: 'test',
          address: 'testaddress'
        }
      ],
      downloadLoading: false
    }
  }
}
</script>

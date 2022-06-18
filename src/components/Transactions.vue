<template>
  <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="hash" label="Hash" width="600"> </el-table-column>
    <el-table-column prop="amount" label="金额"> </el-table-column>
    <el-table-column prop="status" label="状态"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (row.status === 'Unconfirmed') {
        return 'warning-row'
      } else if (row.status === 'Confirmed') {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        hash: '51a4ee9451865919eaff94f440619bad6f6cc0fbe0b28f96b9679f5ab9bf2b25',
        amount: '0.001 BTC',
        status: 'Unconfirmed'
      },
      {
        date: '2022-01-11',
        hash: '40d7c9cd7d8c96b3fa62b10090321eed3a78af096b2fb734cb5e4c87fcd4c7c8',
        amount: '0.01353285 BTC',
        status: 'Unconfirmed'
      },
      {
        date: '2022-03-14',
        hash: '3d420c994d1eb3635e158b4c80c3e71ff8f1138798affaf58d69ca9ea9333c69',
        amount: '0.00815100 BTC',
        status: 'Confirmed'
      }]
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<template>
  <div class="dashboard-container">
    <FilterPane :filterData="filterData"/>
    <TablePane :dataSource="dataSource"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterPane from '@/components/FilterPane'
import TablePane from '@/components/TablePane'

export default {
  name: 'CardTable',
  components: {
    FilterPane,
    TablePane
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
       dataSource: {
         tool:[
           {
             name: '新增用户', //按钮名称
             key: 1,  // 唯一标识符
             permission: 2010106, // 权限点
             type: '',  // 使用element自带按钮类型
             bgColor: '#67c23a', // 自定义背景色
             handleClick: this.handleAdd //自定义事件
           },
         ],
        data: [], // 表格数据
        cols: [], // 表格的列数据
        handleSelectionChange:(val)=>{} ,//点击行选中多选返回选中数组
        isSelection: false, // 表格有多选时设置
        isOperation: true, // 表格有操作列时设置
        isIndex: true, // 列表序号
        loading: true, // loading
        pageData: {
         total: 0, // 总条数
         pageSize: 10, // 每页数量
         pageNum: 1, // 页码
         pageSize:[5,10,15,20]// 每页数量
        },
        operation: {
          // 表格有操作列时设置
          label: '操作', // 列名
          width: '350', // 根据实际情况给宽度
          data: [
            {
              label: '冻结', // 操作名称
              permission:'', //权限点
              type: 'info', //按钮类型
              handleRow: function(){} // 自定义事件
            },
          ]
        }
      },
  filterData:{
  timeSelect:true,
  elinput:[
    {
      name:'姓名',
      key:'userName'
    }
  ],
  elselect:[
    {
      name:'部门',
      key:'department',
      option:[{
        key:1,
        value:'技术部'
      }]
    }
  ]
}
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

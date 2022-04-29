<template>
  <div>
    <TablePane :dataSource="dataSource" />
  </div>
</template>

<script>
import TablePane from '@/components/TablePane'

export default {
  name: 'CardList',
  components: {
    TablePane
  },
  data() {
    return {
      dataSource: {
        tool: [
          {
            name: '新增用户', //按钮名称
            key: 1, // 唯一标识符
            permission: 2010106, // 权限点
            type: '', // 使用element自带按钮类型
            bgColor: '#67c23a', // 自定义背景色
            handleClick: this.handleAdd //自定义事件
          }
        ],
        data: [], // 表格数据
        cols: [
          {
            label: '操作',
            prop: 'action',
            width: 100
          },
          {
            label: 'MISIDN',
            prop: '',
            width: 100
          },
          {
            label: 'ICCID',
            prop: '',
            width: 300
          },
          {
            label: 'IMSI',
            prop: '',
            width: 100
          },
          {
            label: 'SIM卡状态',
            prop: '',
            width: 100
          },
          {
            label: '流量套餐',
            prop: '',
            width: 200
          },
          {
            label: '总流量',
            prop: '',
            width: 100
          },
          {
            label: '已用流量',
            prop: '',
            width: 100
          },
          {
            label: '剩余流量',
            prop: '',
            width: 100
          },
          {
            label: '沉默到期时间',
            prop: '',
            width: 150
          },
          {
            label: '计费到期时间',
            prop: '',
            width: 150
          },
          {
            label: '运营商',
            prop: '',
            width: 100
          },
          {
            label: '出库时间',
            prop: '',
            width: 150
          },
          {
            label: '激活时间',
            prop: '',
            width: 150
          },
          {
            label: '备注',
            prop: '',
            width: 200
          },
          {
            label: '短信操作',
            prop: '',
            width: 100
          },
          {
            label: '停机复机',
            prop: '',
            width: 100
          },
          {
            label: '二维码',
            prop: '',
            width: 100
          }
        ], // 表格的列数据
        handleSelectionChange: (val) => {}, //点击行选中多选返回选中数组
        isSelection: false, // 表格有多选时设置
        isOperation: true, // 表格有操作列时设置
        isIndex: true, // 列表序号
        loading: false, // loading
        pageData: {
          total: 0, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1, // 页码
          pageSize: [5, 10, 15, 20] // 每页数量
        },
        operation: {
          // // 表格有操作列时设置
          // label: '操作', // 列名
          // width: '350', // 根据实际情况给宽度
          // data: [
          //   {
          //     label: '冻结', // 操作名称
          //     permission:'', //权限点
          //     type: 'info', //按钮类型
          //     handleRow: function(){} // 自定义事件
          //   },
          // ]
        }
      }
    }
  }
}
</script>

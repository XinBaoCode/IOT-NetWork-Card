<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <el-dialog title="筛选器"
             :visible.sync="dialogVisible"
             @close="closeDialog">
    <GridPane :gridValue="gridValue" />
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="closeDialog"
                 size="small">取 消</el-button>
      <el-button type="primary"
                 @click="closeDialog"
                 size="small">查 询</el-button>
    </span>
  </el-dialog>

</template>

<script>
import GridPane from '@/components/GridPane'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GridPane
  },
  data() {
    return {
      gridValue: {
        gridSplitVal: 2,
        selectList: [
          {
            label: 'MSISDN',
            value: ''
          },
          {
            label: 'ICCID号段',
            range: true,
            rangeValue: {
              from: '',
              to: ''
            }
          },
          {
            label: 'SIM卡状态',
            key: 'SIMStatus',
            select: true,
            option: [
              {
                key: '1',
                value: '全部'
              },
              {
                key: '2',
                value: '库存'
              },
              {
                key: '3',
                value: '待激活'
              },
              {
                key: '4',
                value: '在用'
              },
              {
                key: '5',
                value: '停机'
              }
            ]
          },
          {
            label: '运营商',
            key: 'Operator',
            select: true,
            option: [
              {
                key: '6',
                value: '全部'
              },
              {
                key: '7',
                value: '移动'
              },
              {
                key: '8',
                value: '联通'
              },
              {
                key: '9',
                value: '电信'
              }
            ]
          },
          {
            label: '剩余流量<=',
            key: 'leaveM',
            select: true,
            option: [
              {
                key: '10',
                value: '100%'
              },
              {
                key: '11',
                value: '90%'
              },
              {
                key: '12',
                value: '80%'
              },
              {
                key: '13',
                value: '70%'
              }
            ]
          },
          {
            label: '流量套餐',
            value: '',
            placeholder: '请输入关键字'
          },
          {
            label: '备注：',
            value: ''
          },
          {
            label: '到期时间',
            key: 'endTime',
            select: true,
            option: [
              {
                key: '14',
                value: '未到期'
              },
              {
                key: '15',
                value: '1个月内'
              },
              {
                key: '16',
                value: '2个月内'
              },
              {
                key: '17',
                value: '3个月内'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('changeDialog', false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

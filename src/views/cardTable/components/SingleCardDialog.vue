<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <el-dialog title="卡信息"
             :visible.sync="dialogVisible"
             @close="closeDialog">
    <GridPane :gridValue="gridValue" />
    <GraphPane :tabGraph="tabGraphs[0]" />
  </el-dialog>
</template>

<script>
import GridPane from '@/components/GridPane'
import GraphPane from '@/components/GraphPane'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GridPane,
    GraphPane
  },
  data() {
    return {
      gridValue: {
        gridSplitVal: 3,
        selectList: [
          {
            label: 'ICCID',
            value: '',
            labelWidth: 150,
            readonly: true
          },
          {
            label: 'MSISDN',
            value: '',
            labelWidth: 150,
            readonly: true
          },
          {
            label: 'ICCID号段',
            labelWidth: 150,
            readonly: true
          },
          {
            label: 'SIM卡状态',
            key: 'SIMStatus',
            value: '激活中',
            labelWidth: 150,
            readonly: true,
            tag: true,
            tagType: 'warning'
          },
          {
            label: '运营商',
            key: 'Operator',
            value: '中国移动',
            labelWidth: 150,
            readonly: true,
            tag: true,
            tagType: 'success'
          },
          {
            label: '剩余流量<=',
            key: 'leaveM',
            labelWidth: 150,
            readonly: true
          },
          {
            label: '流量套餐',
            value: '',
            value: '30M新客专享',
            labelWidth: 150,
            readonly: true,
            tag: true
          },
          {
            label: '备注：',
            value: '',
            labelWidth: 150,
            readonly: true
          },
          {
            label: '到期时间',
            key: 'endTime',
            width: 150,
            labelWidth: 150,
            readonly: true
          }
        ]
      },
      tabGraphs: [
        {
          tabLabel: '日流量统计',
          chartOptions: {
            chart: {
              id: 'day'
            },
            xaxis: {
              categories: Array.from({ length: 30 }, (_, i) => i + 1)
            }
          },
          series: [
            {
              name: '该日使用量',
              data: Array.from({ length: 30 }, (_, i) =>
                Math.floor(Math.random() * 40)
              )
            }
          ]
        }
      ]
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

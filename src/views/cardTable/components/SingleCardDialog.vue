<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <el-dialog title="卡信息"
             :visible.sync="dialogVisible"
             @close="closeDialog">
    <GridPane :gridValue="gridValue" />
    <el-tabs v-model="activeName"
             @tab-click="handleTabClick"
             class="graph-panel">
      <el-tab-pane v-for="(item) in tabList"
                   :key="item.name"
                   :label="item.tabLabel"
                   :name="item.name">
        <GraphPane v-if="tabList[tabIndex].chartOptions"
                   :tabGraph="tabList[tabIndex]" />

      </el-tab-pane>
    </el-tabs>
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
            readonly: true
          },
          {
            label: 'MSISDN',
            value: '',
            readonly: true
          },
          {
            label: 'ICCID号段',
            readonly: true
          },
          {
            label: 'SIM卡状态',
            key: 'SIMStatus',
            value: '激活中',
            readonly: true,
            tag: true,
            tagType: 'warning'
          },
          {
            label: '运营商',
            key: 'Operator',
            value: '中国移动',
            readonly: true,
            tag: true,
            tagType: 'success'
          },
          {
            label: '剩余流量<=',
            key: 'leaveM',
            readonly: true
          },
          {
            label: '流量套餐',
            value: '',
            value: '30M新客专享',
            readonly: true,
            tag: true
          },
          {
            label: '备注：',
            value: '',
            inputWidt: 250,
            readonly: true
          },
          {
            label: '到期时间',
            key: 'endTime',
            width: 250,
            readonly: true
          }
        ]
      },
      activeName: 'first', // 默认展示tab第一页
      tabList: [
        {
          tabLabel: '日流量统计',
          name: 'first',
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
        },
        {
          tabLabel: '月流量统计',
          name: 'second',
          chartOptions: {
            chart: {
              id: 'month'
            },
            xaxis: {
              categories: Array.from({ length: 11 }, (_, i) => i + 1)
            }
          },
          series: [
            {
              name: '该月使用量',
              data: Array.from({ length: 11 }, (_, i) =>
                Math.floor(Math.random() * 40)
              )
            }
          ]
        }
      ],
      tabIndex: 0
    }
  },
  methods: {
    closeDialog() {
      this.$emit('changeDialog', false)
    },
    handleTabClick() {
      this.tabIndex = this.tabList.findIndex(
        (item) => item.name === this.activeName
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.graph-panel {
  margin-top: 30px;
  padding-left: 20px;
}
</style>

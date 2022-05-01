<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <div>
    <div v-for="(item) in tabList"
         :key="item.name"
         :name="item.name">
      <div class="graph-label">{{item.label}}</div>
      <GraphPane :tabGraph="item" />
    </div>
  </div>
</template>

<script>
import GraphPane from '@/components/GraphPane'
import { chartOptionsDonut } from '@/utils/apexcharts.js'

export default {
  components: {
    GraphPane
  },
  data() {
    return {
      tabList: [
        {
          label: 'SIM卡状态分布',
          name: 'first',
          chartOptions: chartOptionsDonut({
            labels: ['在用', '停机', '待激活', '销户', '库存'],
            series: Array.from({ length: 5 }, (_, i) =>
              Math.floor(Math.random() * 40)
            ),
            total: 'SIM状态'
          })
        },
        {
          label: 'SIM卡告警详情',
          name: 'second',
          chartOptions: chartOptionsDonut({
            labels: ['正常使用', '流量告警', '短信告警', '停机告警'],
            series: Array.from({ length: 4 }, (_, i) =>
              Math.floor(Math.random() * 40)
            ),
            total: 'SIM警告'
          })
        },
        {
          label: '付费到期详情',
          name: 'third',
          chartOptions: chartOptionsDonut({
            labels: ['已过期', '0-5天到期', '6-10天到期', '11-15天到期'],
            series: Array.from({ length: 4 }, (_, i) =>
              Math.floor(Math.random() * 40)
            ),
            total: '付费到期'
          })
        }
      ],
      tabIndex: 0
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.graph-label {
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 7px;
  background-color: rgb(242, 247, 245);
  padding-left: 10px;
}
</style>

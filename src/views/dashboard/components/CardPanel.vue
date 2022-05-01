<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <div>
    <GraphPane v-for="(item) in tabList"
               :key="item.name"
               :name="item.name"
               :tabGraph="item" />
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
          name: 'first',
          chartOptions: chartOptionsDonut({
            labels: ['在用', '停机', '待激活', '销户', '库存'],
            series: Array.from({ length: 5 }, (_, i) =>
              Math.floor(Math.random() * 40)
            ),
            label: 'SIM状态'
          })
        },
        {
          name: 'second',
          chartOptions: chartOptionsDonut({
            labels: ['已过期', '0-5天到期', '6-10天到期', '11-15天到期'],
            series: Array.from({ length: 4 }, (_, i) =>
              Math.floor(Math.random() * 40)
            ),
            label: 'SIM警告'
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
</style>

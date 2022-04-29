<template>
  <div>
    <FilterPane :filterData="filterData"
                ref="child" />
  </div>
</template>

<script>
import FilterPane from '@/components/FilterPane'
let _ = require('lodash')

export default {
  name: 'CardFilterPane',
  components: {
    FilterPane
  },
  data() {
    return {
      // 搜索栏组件
      filterData: {
        elinput: [
          {
            key: 'searchInput', //字段名
            width: 170 //宽度
          }
        ],
        elselect: [
          {
            key: 'department',
            width: 100,
            default: true, // 默认选中第一个
            option: [
              {
                key: 'cardNum',
                value: '卡号'
              },
              {
                key: 'ICCID',
                value: 'ICCID'
              },
              {
                key: 'IMSI',
                value: 'IMSI'
              }
            ]
          }
        ],
        elbutton: [
          {
            name: '筛选器',
            type: 'warning',
            handleClick: () => {}
          },
          {
            name: '搜索',
            type: 'primary',
            handleClick: () => {
              this.filterData = []
            }
          },
          {
            name: '重置',
            type: 'none',
            handleClick: () => {
              const data = _.cloneDeep(this.$refs.child.listQuery)
              Object.keys(data).forEach(function (key) {
                data[key] = ''
              })
              this.$refs.child.listQuery = data
              this.$refs.child.getDefaultSelect()
              this.$refs.child.dateRange = ['', '']
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

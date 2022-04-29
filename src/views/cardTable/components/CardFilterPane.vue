<template>
  <div>
    <FilterPane :filterData="filterData" />
  </div>
</template>

<script>
import FilterPane from '@/components/FilterPane'

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
            name: '', //提示语
            key: 'searchInput', //字段名
            width: 170 //宽度
          }
        ],
        elselect: [
          {
            name: '部门',
            key: 'department',
            width: 100,
            default: true, // 默认选中第一个
            option: [
              {
                key: 1,
                value: '卡号'
              },
              {
                key: 2,
                value: 'ICCID'
              },
              {
                key: 3,
                value: 'IMSI'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<!--搜索层的组件 参考地址：https://juejin.cn/post/6951564460964347912-->
<template>
  <div>
    <div class="filter-container">
      <el-date-picker v-if="filterData.timeSelect"
                      v-model="dateRange"
                      style="width: 300px"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="['', '']"
                      :picker-options="pickerOptions"
                      class="filter-item" />
      <template v-if="filterData.elselect">
        <el-select v-for="(item,index) in filterData.elselect"
                   :key="index"
                   v-model="listQuery[item.key]"
                   :size="item.size ? item.size : 'small'"
                   :style="{'width':item.width?item.width+'px':'90px'}"
                   class="filter-item">
          <el-option v-for="i in item.option"
                     :key="i.key"
                     :label="i.value"
                     :value="i.key" />
        </el-select>
      </template>
      <template v-if="filterData.elinput">
        <el-input v-for="(item,index) in filterData.elinput"
                  :key="index"
                  v-model="listQuery[item.key]"
                  :placeholder="item.name"
                  :size="item.size ? item.size : 'small'"
                  :style="{'width':item.width?item.width+'px':'200px'}" />
      </template>
      <div class="btn">
        <el-button v-for="(item,index) in filterData.elbutton"
                   class="filter-item"
                   :key="index"
                   :type="item.type"
                   :size="item.size ? item.size : 'small'"
                   @click="item.handleClick">
          {{item.name}}
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
let _ = require('lodash')
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    filterData: {
      type: Object
    }
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      dateRange: ['', ''],
      listQuery: {}
    }
  },
  created() {
    this.getDefaultSelect()
  },
  watch: {
    filterData(val) {
      console.log(val)
      if (val.elinput.length > 0) {
        val.elinput.map((item) => {
          this.listQuery[item.key] = ''
        })
      }
      if (val.elselect.length > 0) {
        val.elinput.map((item) => {
          this.listQuery[item.key] = ''
        })
      }
    },
    //缓存进页面想清空可用
    'filterData.rest': {
      handler: function (val) {
        if (val) {
          this.handleRest()
        }
      },
      deep: true
    }
  },
  methods: {
    // 是否采用第一个作为默认选择s
    getDefaultSelect() {
      const data = {}
      const elselect = this.filterData.elselect
      for (let item of elselect) {
        if (item.default) {
          data[item.key] = item.option[0].key
        }
      }
      this.listQuery = _.cloneDeep(data) // 利用深克隆保留getter和setter属性
    },
    handleSearch() {
      console.log('搜索成功', this.listQuery)
      const data = _.cloneDeep(this.listQuery)
      if (this.dateRange && this.dateRange[0] !== '') {
        const startTime =
          this.$moment(this.dateRange[0]).format('YYYY-MM-DD') + ' 00:00:00'
        const endTime =
          this.$moment(this.dateRange[1]).format('YYYY-MM-DD') + ' 23:59:59'
        data.beginDate = startTime
        data.endDate = endTime
      }
      Object.keys(data).forEach(function (key) {
        if (data[key] === '') {
          delete data[key]
        }
      })
      this.$emit('filterMsg', data)
    }
  }
}
</script>

<style  scoped lang='scss'>
.filter-item {
  margin-left: 5px;
  margin-top: 3px;
  display: inline-block;
}

.filter-container .filter-item:nth-of-type(1) {
  margin-left: 5px;
}
.btn {
  display: inline-block;
  margin-left: 10px;
}
</style>


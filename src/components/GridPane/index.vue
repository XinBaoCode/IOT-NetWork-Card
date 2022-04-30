<template>
  <div class="dialog-content"
       :style="cssProps">
    <div v-for="(item,idx) in gridValue.selectList"
         :key="idx">
      <div class="dialog-input">
        <!-- Label -->
        <label>{{item.label}}</label>
        <!--ICCID有两个输入框 -->
        <div v-if="item.range"
             style="display:flex">
          <el-input v-model="item.rangeValue.from"
                    :size="item.size? item.size: 'small'"
                    :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
          <div class="border-line"></div>
          <el-input v-model="item.rangeValue.to"
                    :size="item.size? item.size: 'small'"
                    :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
        </div>
        <!-- 选择框 -->
        <el-select v-else-if="item.select"
                   v-model="listQuery[item.key]"
                   :size="item.size ? item.size : 'small'"
                   :style="{'width':item.width?item.width+'px':'90px'}">
          <el-option v-for="i in item.option"
                     :key="i.key"
                     :label="i.value"
                     :value="i.key" />
        </el-select>
        <!-- tag -->
        <el-tag v-else-if="item.tag"
                :size="item.size? item.size: 'small'"
                :type="item.tagType ? item.tagType : 'primary'">
          {{ item.value }}
        </el-tag>
        <!-- 输入框 -->
        <el-input v-else
                  v-model="item.value"
                  :placeholder="item.placeholder"
                  :size="item.size? item.size: 'small'"
                  :disabled="item.inputDisable ? true:false"
                  :readonly="item.readonly ? true:false"
                  :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridPane',
  props: {
    gridValue: {
      type: Object,
      default: []
    }
  },
  data() {
    return {
      tagColorList: ['', 'success', 'info', 'danger', 'warning'],
      listQuery: {}
    }
  },
  created() {
    this.getDefaultSelect()
  },
  computed: {
    // 得到UI属性,从而对grid布局
    cssProps() {
      return {
        '--width-percen':
          Math.floor(100 / this.gridValue.gridSplitVal - 1) + '%'
      }
    }
  },
  methods: {
    // 是否采用第一个作为默认选择s
    getDefaultSelect() {
      const data = {}
      const elselect = this.gridValue.selectList
      for (let item of elselect) {
        if (item.select) {
          data[item.key] = item.option[0].key
        }
      }
      this.listQuery = _.cloneDeep(data) // 利用深克隆保留getter和setter属性
    }
  }
}
</script>

<style  scoped lang='scss'>
.root {
  --text: 45%;
}
.dialog-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--width-percen));
  grid-gap: 5px;
  grid-auto-rows: 40px;
}

.dialog-input {
  display: flex;
  align-items: center;
}

.dialog-input label {
  font-size: 12px;
  margin-right: 5px;
  width: 80px;
  text-align: right;
  font-weight: 400;
}

.border-line {
  height: 1px;
  width: 5px;
  border-top: solid #acc0d8 1px;
  margin-top: 15px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>


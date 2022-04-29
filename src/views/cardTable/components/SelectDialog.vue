<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <el-dialog title="筛选器"
             :visible.sync="dialogVisible"
             @close="closeDialog">
    <div class="dialog-content">
      <div v-for="(item,idx) in selectList"
           :key="idx">
        <div class="dialog-input">
          <label>{{item.label}}</label>
          <!--ICCID有两个输入框 -->
          <div v-if="item.range"
               style="display:flex">
            <el-input v-model="item.rangeValue.from"
                      size="small"
                      :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
            <div class="border-line"></div>
            <el-input v-model="item.rangeValue.to"
                      size="small"
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
          <!-- 输入框 -->
          <el-input v-else
                    v-model="item.value"
                    :placeholder="item.placeholder"
                    size="small"
                    :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
        </div>
      </div>
    </div>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary"
                 @click="closeDialog">查 询</el-button>
    </span>
  </el-dialog>

</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectList: [
        {
          label: 'MSISDN',
          value: '',
          labelWidth: 160
        },
        {
          label: 'ICCID号段',
          labelWidth: 160,
          range: true,
          rangeValue: {
            from: '',
            to: ''
          }
        },
        {
          label: 'SIM卡状态',
          key: 'SIMStatus',
          labelWidth: 100,
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
          labelWidth: 100,
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
          value: '',
          labelWidth: 100
        },
        {
          label: '流量套餐',
          value: '',
          labelWidth: 160,
          placeholder: '输入关键字后自动搜索'
        },
        {
          label: '备注：',
          value: '',
          labelWidth: 160
        },
        {
          label: '到期时间',
          value: '',
          labelWidth: 100
        }
      ],
      listQuery: {}
    }
  },
  created() {
    this.getDefaultSelect()
  },
  methods: {
    closeDialog() {
      this.$emit('changeDialog', false)
    },
    // 是否采用第一个作为默认选择s
    getDefaultSelect() {
      const data = {}
      const elselect = this.selectList
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

<style lang="scss" scoped>
.dialog-content {
  display: grid;
  grid-template-columns: 260px 420px auto;
  grid-gap: 5px;
  grid-auto-rows: 50px;
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

.hengan {
  text-align: center;
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

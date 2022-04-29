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
          <el-input v-if="!item.select"
                    v-model="item.value"
                    :placeholder="item.placeholder"
                    size="small"
                    :style="{'width':item.labelWidth ? item.labelWidth+'px': '90px'}" />
          <el-select v-else
                     v-model="listQuery[item.key]"
                     :size="item.size ? item.size : 'small'"
                     :style="{'width':item.width?item.width+'px':'90px'}">
            <el-option v-for="i in item.option"
                       :key="i.key"
                       :label="i.value"
                       :value="i.key" />
          </el-select>
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
          labelWidth: 200
        },
        {
          label: 'ICCID号段',
          value: '',
          labelWidth: 200,
          range: true,
          rangeValue: {
            from: '',
            to: ''
          }
        },
        {
          label: 'SIM卡状态',
          value: '',
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
          value: '',
          labelWidth: 100,
          select: true,
          option: [
            {
              key: '1',
              value: '全部'
            },
            {
              key: '2',
              value: '移动'
            },
            {
              key: '3',
              value: '联通'
            },
            {
              key: '4',
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
          labelWidth: 200,
          placeholder: '输入关键字后自动搜索'
        },
        {
          label: '备注：',
          value: '',
          labelWidth: 200
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
  methods: {
    closeDialog() {
      this.$emit('changeDialog', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-content {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-auto-flow: row;
  grid-gap: 5px;
  grid-auto-rows: 100px;
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
</style>

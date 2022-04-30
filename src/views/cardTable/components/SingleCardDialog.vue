<!-- 数据在子组件，到时候搜索上传给父组件 -->

<template>
  <el-dialog title="卡信息"
             :visible.sync="dialogVisible"
             @close="closeDialog">
    <GridPane :selectList="selectList" />
  </el-dialog>
</template>

<script>
import GridPane from '@/components/GridPane'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GridPane
  },
  data() {
    return {
      selectList: [
        {
          label: 'ICCID',
          value: '',
          labelWidth: 250,
          readonly: true
        },
        {
          label: 'MSISDN',
          value: '',
          labelWidth: 250,
          readonly: true
        },
        {
          label: 'ICCID号段',
          labelWidth: 250,
          readonly: true
        },
        {
          label: 'SIM卡状态',
          key: 'SIMStatus',
          value: '激活中',
          labelWidth: 250,
          readonly: true,
          tag: true,
          tagType: 'warning'
        },
        {
          label: '运营商',
          key: 'Operator',
          value: '中国移动',
          labelWidth: 250,
          readonly: true,
          tag: true,
          tagType: 'success'
        },
        {
          label: '剩余流量<=',
          key: 'leaveM',
          labelWidth: 250,
          readonly: true
        },
        {
          label: '流量套餐',
          value: '',
          value: '30M新客专享',
          labelWidth: 250,
          readonly: true,
          tag: true
        },
        {
          label: '备注：',
          value: '',
          labelWidth: 250,
          readonly: true
        },
        {
          label: '到期时间',
          key: 'endTime',
          width: 150,
          labelWidth: 250,
          readonly: true
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

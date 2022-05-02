<template>
  <el-card class="box-card"
           shadow="always">
    <template #header>
      <div class="notice">
        <!-- 需要 display根据权限设置 -->
        <div class="notice-text">公告</div>
        <span>发布哈士奇的公告，让大家都看到吧</span>
        <div class="notice-input">
          <el-tag type="none"
                  style="color:black"> 内容</el-tag>
          <el-input v-model="inputNotice"
                    placeholder="输入你想发布的内容"
                    clearable
                    size="small" />
          <el-button size="small"
                     type='primary'
                     @click="noticePublish">发布</el-button>
        </div>
      </div>
    </template>
    <div style="overflow-y:auto;height:160px;">
      <div v-for="(item,index) in noticeList"
           :key="item.id"
           class="item-text">
        <el-tag effect="light"
                round
                size="small">{{index+1}}</el-tag>
        <span>{{item.text}}</span>
        <i class="el-icon-delete icon-delete"
           @click="removeNotice(item.id)"></i>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      inputNotice: '',
      noticeList: [
        {
          id: 1,
          time: '2022-5-4',
          text: '哈士奇欢迎你的来访订购'
        },
        {
          id: 2,
          time: '2022-4-4',
          text: '清明节特惠,办卡优惠9折起,快快来订购把'
        },
        {
          id: 3,
          time: '2022-4-4',
          text: '国庆节卡大甩卖,购卡10000以上享受8折优惠'
        }
      ]
    }
  },
  methods: {
    noticePublish() {
      this.noticeList.unshift({
        id: this.noticeList.length + 1,
        text: this.inputNotice
      })
      this.inputNotice = ''
    },

    removeNotice(id) {
      console.log(this.noticeList.findIndex((item) => item.id === id))
      this.noticeList.splice(
        this.noticeList.findIndex((item) => item.id === id),
        1
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 90%;
}

.el-card ::v-deep .el-card__header {
  background-color: rgb(192, 241, 192);
}

.notice-text {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(41, 184, 41);
}

.notice span {
  font-size: 12px;
  color: rgb(41, 184, 41);
}

.notice-input {
  margin-top: 15px;
  display: flex;
}

.item-text {
  position: relative;
  font-size: 14px;
  margin-bottom: 18px;
}

.item-text span {
  padding-left: 7px;
}

.icon-delete {
  position: absolute;
  right: 0;
}
</style>

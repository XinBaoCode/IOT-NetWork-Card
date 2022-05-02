<template>
  <el-card class="box-card"
           shadow="always"
           :body-style="{ padding: '0px' }">
    <img :src="imgUrl"
         class="image" />
    <div class="blessing-word">
      <div>{{whoBlessing}}</div>
      <p>{{blessingWord}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: 'https://api.vvhan.com/api/bing',
      whoBlessing: '哈士奇在这里祝福您',
      blessingWord:
        '祝你在新的一年里：身体健康平安，生活充实饱满，事业步步高升，心情阳光灿烂，财运滚滚而来，家庭美满幸福，新年开心快乐！ 祝您新年快乐！'
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 90%;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}

.blessing-word {
  padding: 13px;
  padding-top: 5px;
}

.blessing-word div {
  height: 30px;
  font-size: 17px;
  font-weight: bold;
  color: #409eff;
  line-height: 30px;
  width: 100%;
  text-align: center;
}

.blessing-word p {
  text-indent: 2em;
  margin: 0;
}
</style>

<template>
  <div class="dashboard-container">
      <CardList />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from './components/CardList.vue'

export default {
  name: 'CardTable',
  components: {
    CardList
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<template>
  <div class="dashboard">
    <CardPanel class="card-panel" />
    <div class="right">
      <Notice class="notice-panel" />
      <BlessingCard class="blessingcard-panel item-card" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPanel from './components/CardPanel.vue'
import Notice from './components/Notice.vue'
import BlessingCard from './components/BlessingCard.vue'

export default {
  name: 'Dashboard',
  components: {
    CardPanel,
    Notice,
    BlessingCard
  },
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  margin-top: 10px;
  padding-left: 10px;
}

.card-panel {
  width: 50%;
}

.right {
  flex: 1;
  margin-left: 7%;
}

.item-card {
  margin-top: 15px;
}
</style>

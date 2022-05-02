<template>
  <div class="dashboard">
    <CardPanel class="card-panel" />
    <div class="right">
      <Notice class="notice-panel" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPanel from './components/CardPanel.vue'
import Notice from './components/Notice.vue'

export default {
  name: 'Dashboard',
  components: {
    CardPanel,
    Notice
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
</style>

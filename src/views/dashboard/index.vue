<template>
  <div>
    <CardPanel class="card-panel" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPanel from './components/CardPanel.vue'

export default {
  name: 'Dashboard',
  components: {
    CardPanel
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
.card-panel {
  width: 40%;
}
</style>

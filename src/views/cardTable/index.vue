<template>
  <div>
    <CardFilterPane />
    <CardList />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from './components/CardList.vue'
import CardFilterPane from './components/CardFilterPane.vue'

export default {
  name: 'CardTable',
  components: {
    CardList,
    CardFilterPane
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
</style>

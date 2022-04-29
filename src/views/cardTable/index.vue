<template>
  <div>
    <CardFilterPane :dialogVisible="showDialog"
                    @changeDialog="changeDialog" />
    <CardList />
    <SelectDialog :dialogVisible="showDialog"
                  @changeDialog="changeDialog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from './components/CardList.vue'
import CardFilterPane from './components/CardFilterPane.vue'
import SelectDialog from './components/SelectDialog.vue'

export default {
  name: 'CardTable',
  components: {
    CardList,
    CardFilterPane,
    SelectDialog
  },
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    changeDialog(dialog) {
      this.showDialog = dialog
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

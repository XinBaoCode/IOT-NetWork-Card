<template>
  <div>
    <CardFilterPane :dialogVisible="showSelectDialog"
                    @changeDialog="changeSelectDialog" />
    <CardList :singleCardVisible="showSingleCardDialog"
              @changeSingleCardDialog="changeSingleCardDialog" />
    <SelectDialog :dialogVisible="showSelectDialog"
                  @changeDialog="changeSelectDialog" />
    <SingleCardDialog :dialogVisible="showSingleCardDialog"
                      @changeDialog="changeSingleCardDialog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from './components/CardList.vue'
import CardFilterPane from './components/CardFilterPane.vue'
import SelectDialog from './components/SelectDialog.vue'
import SingleCardDialog from './components/SingleCardDialog.vue'

export default {
  name: 'CardTable',
  components: {
    CardList,
    CardFilterPane,
    SelectDialog,
    SingleCardDialog
  },
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {
      showSelectDialog: false,
      showSingleCardDialog: false
    }
  },
  methods: {
    changeSelectDialog(dialog) {
      this.showSelectDialog = dialog
    },
    changeSingleCardDialog(dialog) {
      this.showSingleCardDialog = dialog
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <apexchart width="100%"
               :height="tabGraph.height ? tabGraph.height : '270'"
               :options="tabGraph.chartOptions"
               :series="tabGraph.chartOptions.series"></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    tabGraph: {
      type: Object
    }
  },
  data: function () {
    return {}
  }
}
</script>



<style  scoped lang='scss'>
</style>

<template>
  <div>
    <apexchart height="300"
               type="bar"
               :options="tabGraph.chartOptions"
               :series="tabGraph.series"></apexchart>
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

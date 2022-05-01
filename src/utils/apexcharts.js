// 这个是基于apexcharts组件得到chartOptions的公有方法
export function chartOptionsDonut({labels,series,width=200,total="总共"}) {
  return {
    labels: labels,
    series: series,
    chart:{
      type:'donut'
    },
    legend: {
      width:width,
      fontSize: '13px',
      itemMargin: {
        vertical: 6
      },
      formatter: function(seriesName, opts) {
        return '<div class="legend-info">' + '<span>' + seriesName + '：</span>' + '<span>' + opts.w.globals.series[opts.seriesIndex] + ' 张</span>' + '</div>'
      }
    },
    dataLabels: { // 是否显示百分比
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '28px',
              fontFamily: 'Rubik',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '25px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: total,
              color: 'black',
              fontWeight: 600,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    }
  }
}

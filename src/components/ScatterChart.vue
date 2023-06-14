<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { ScatterChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { defineProps, ref, provide } from 'vue'

const props = defineProps({
  title: String,
  dataAntelopes: {
    type: Array,
    required: true
  }
})

use([CanvasRenderer, ScatterChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'dark')

const option = ref({
  title: {
    text: props.title,
    left: 'center'
  },
  legend: {
    right: 10,
    data: ['default', 'primary']
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: 'Height'
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    name: 'Weight'
  },
  series: [
    {
      name: 'default',
      data: props.dataAntelopes[0],
      type: 'scatter',
      emphasis: {
        label: {
          show: true,
          formatter({ data }) {
            return `${data[3]}:\n${data[1]} pounds, ${data[0]} inches`
          },
          position: 'top'
        }
      }
    },
    {
      name: 'primary',
      data: props.dataAntelopes[1],
      type: 'scatter',
      itemStyle: {
        color: 'red'
      },
      emphasis: {
        label: {
          show: true,
          formatter({ data }) {
            return `${data[3]}:\n${data[1]} pounds, ${data[0]} inches`
          },
          position: 'top'
        }
      }
    }
  ]
})
</script>

<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>

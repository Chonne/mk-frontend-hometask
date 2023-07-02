<script setup>
import { defineProps, ref } from 'vue'
import PieChart from './PieChart.vue'
import ScatterChart from './ScatterChart.vue'
import TableAntelopes from './TableAntelopes.vue'

const props = defineProps({
  dataAntelopes: {
    type: Array,
    required: true
  },
  dataAggregated: {
    type: Object,
    required: true
  }
})

// todo: the data stuff should be managed by the store
function extractCountDataForPieChart(initialData, { name, count }) {
  return initialData.map((item) => {
    return {
      name: item[name],
      value: item[count]
    }
  })
}

function extractDataForScatter(initialData, key1, key2, key3) {
  const defaultData = initialData
    .filter((item) => !item.primary)
    .map((item) => {
      return [item[key1], item[key2], key3 ? item[key3] : 1, item.name, 'default']
    })

  const primaryData = initialData
    .filter((item) => item.primary)
    .map((item) => {
      return [item[key1], item[key2], key3 ? item[key3] : 1, item.name, 'primary']
    })

  return [defaultData, primaryData]
}

const dataForAntelopesPerContinent = ref(
  extractCountDataForPieChart(props.dataAggregated.continents, {
    name: 'continentName',
    count: 'nbAntelopes'
  })
)
const dataForHornTypes = ref(
  extractCountDataForPieChart(props.dataAggregated.horns, {
    name: 'hornsShape',
    count: 'nbAntelopes'
  })
)
const dataForScatter = ref(extractDataForScatter(props.dataAntelopes, 'height', 'weight'))
</script>

<template>
  <div class="container">
    <section class="table-container">
      <TableAntelopes :dataAntelopes="dataAntelopes" />
    </section>
    <section class="charts-container">
      <PieChart :dataAntelopes="dataForAntelopesPerContinent" title="Antelopes per continent" />
      <PieChart :dataAntelopes="dataForHornTypes" title="Horn types" />
      <ScatterChart :dataAntelopes="dataForScatter" title="Weight and Height" />
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.table-container {
  width: 600px;
  margin-right: 20px;
}

.charts-container {
  flex: 1;
}

.charts-container > * {
  margin-bottom: 20px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import ListPanels from './components/ListPanels.vue'

// todo: the data stuff should be managed by the store
function prepareData(data) {
  const preparedData = data.map((item) => {
    return {
      primary: item.name.toLowerCase() === 'greater kudu',
      ...item
    }
  })

  return preparedData
}

const fetchData = async () => {
  try {
    // todo: move this to a config file
    const response = await fetch('http://localhost:3000/antelopes?limit=50')
    const data = await response.json()
    return prepareData(data)
  } catch (error) {
    console.error(error)
  }
}

const fetchAggregatedData = async () => {
  try {
    // todo: move this to a config file
    const response = await fetch('http://localhost:3000/antelopes/aggregated')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// fetch data onMount
const dataAntelopes = ref([])
const dataAggregated = ref({})
onMounted(async () => {
  dataAntelopes.value = await fetchData()
  dataAggregated.value = await fetchAggregatedData()
})
</script>

<template>
  <header>
    <h1>Antelopes</h1>
  </header>

  <main>
    <ListPanels :dataAntelopes="dataAntelopes" :dataAggregated="dataAggregated" v-if="dataAntelopes.length > 0 && Object.keys(dataAggregated).length > 0" />
  </main>
</template>

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

// fetch data onMount
const dataAntelopes = ref([])
onMounted(async () => {
  dataAntelopes.value = await fetchData()
})
</script>

<template>
  <header>
    <h1>Antelopes</h1>
  </header>

  <main>
    <ListPanels :dataAntelopes="dataAntelopes" v-if="dataAntelopes.length > 0" />
  </main>
</template>

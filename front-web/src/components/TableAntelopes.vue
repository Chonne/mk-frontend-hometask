<script setup>
defineProps({
  dataAntelopes: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((antelope) => {
        return (
          typeof antelope.name === 'string' &&
          typeof antelope.continent === 'string' &&
          typeof antelope.weight === 'number' &&
          typeof antelope.height === 'number' &&
          typeof antelope.horns === 'string' &&
          typeof antelope.picture === 'string'
        )
      })
    }
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Continent</th>
        <th>Weight</th>
        <th>Height</th>
        <th>Horns</th>
        <th>Picture</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="antelope in dataAntelopes"
        :key="antelope.name"
        :class="antelope.primary ? 'primary' : ''"
      >
        <th>{{ antelope.name }}</th>
        <td>{{ antelope.continent }}</td>
        <td>{{ antelope.weight }}</td>
        <td>{{ antelope.height }}</td>
        <td>{{ antelope.horns }}</td>
        <td><img :src="antelope.picture" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  /* width: 100%; */
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

tr.primary > th,
tr.primary > td {
  font-weight: bold;
}

/* make images smaller */
img {
  max-width: 100px;
}
</style>

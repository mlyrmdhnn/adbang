<!-- <script setup>
import { ref, onMounted } from 'vue'

const tableData = ref([])

const fetchData = async () => {
  try {
    console.log('Fetching data...')
    const response = await fetch('http://localhost:5000/data')
    const result = await response.json()
    console.log('Data diterima:', result)

    if (Array.isArray(result)) {
      tableData.value = result
    } else if (result.data && Array.isArray(result.data)) {
      tableData.value = result.data
    } else {
      throw new Error('Format data tidak sesuai yang diharapkan.')
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="chart-table">
    <table>
      <thead>
        <tr>
          <th class="th" colspan="13">Bulan</th>
        </tr>
        <tr class="th">
          <th>Tahun</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>Mei</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.tahun">
          <td>{{ row.tahun }}</td>
          <td v-for="(value, index) in row.bulan || []" :key="index">
            {{ value || '-' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.chart-table {
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: Arial, sans-serif;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
}

.th {
  background: linear-gradient(135deg, rgb(139, 71, 156), rgb(99, 55, 168));
  color: white;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #ddd;
  cursor: pointer;
}
@media (max-width: 768px) {
  table {
    width: 100%;
  }
  .chart-table {
    min-width: 70%;
  }
}
</style> -->
<script setup></script>
<template>
  <div class="card-body" style="padding-bottom: 0"></div>
</template>
<style scoped></style>

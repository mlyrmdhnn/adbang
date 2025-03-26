<script setup>
defineProps({
  indikator: String,
})
</script>
<template>
  <div class="card-content-table">
    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Indikator</th>
          <th>Satuan</th>
          <th>Target Kinerja</th>
          <th>Tipe</th>
          <th>status</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{{ indikator }}</td>
          <td>Dokumen</td>
          <td>5</td>
          <td>akumulatif</td>
          <td>aktif</td>

          <td>
            <button
              class="btn btn-focus btn-sm"
              style="font-size: 8pt; padding: 3px 10px"
              title="Edit data"
            >
              <i class="fa fa-edit fa-fw"></i> Edit
            </button>
            <button
              class="btn btn-danger btn-sm"
              style="font-size: 8pt; padding: 3px 10px"
              title="Edit data"
            >
              <i class="fa fa-trash fa-fw"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.btn-focus {
  background-color: rgb(80, 80, 80);
  color: white;
  margin-right: 1rem;
}
.card-content {
  margin-top: 2rem;
  /* border: 1px solid green; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.card-content-table {
  margin-top: 1rem;
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  white-space: nowrap;
}

thead {
  background-color: #009879;
  color: white;
}
@media (max-width: 768px) {
  .card-content-table {
    overflow-x: auto;
  }

  table {
    min-width: 600px;
  }

  th,
  td {
    font-size: 12px;
    padding: 5px;
  }

  .btn {
    font-size: 10px;
    padding: 2px 5px;
  }
}
</style>

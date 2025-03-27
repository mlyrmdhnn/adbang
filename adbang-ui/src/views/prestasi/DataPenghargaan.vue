<script setup>
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            Daftar Penghargaan Pada Tahun 2024
            <div class="btn-actions-pane-right">
              <div class="nav">
                <a
                  href="http://localhost:8074/adbang/capkin/penghargaan/add"
                  class="btn-pill btn-wide active btn btn-outline-alternate btn-sm"
                >
                  <i class="fa fa-plus-square pr-1"></i> Tambah Penghargaan
                </a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form method="get" action="">
              <div class="row g-3">
                <div class="col-7 col-sm-7 col-xs-4 pe-0">
                  <select class="form-control" name="dinas_id" style="border-radius: 0px">
                    <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option>
                  </select>
                </div>
                <div class="col p-0">
                  <select class="form-control" name="id_tahun" style="border-radius: 0px">
                    <option value="1">2019</option>
                    <option value="2">2020</option>
                    <option value="3">2021</option>
                    <option value="4">2022</option>
                    <option value="5">2023</option>
                    <option value="6" selected="">2024</option>
                    <option value="7">2025</option>
                  </select>
                </div>
                <div class="col ps-0">
                  <button
                    class="btn btn-outline-alternate form-control"
                    type="submit"
                    id="button-addon2"
                    style="border-radius: 0px"
                  >
                    <i class="fa fa-search"></i> Pencarian
                  </button>
                </div>
              </div>
            </form>

            <br />
            <div id="myTable_wrapper" class="dataTables_wrapper no-footer">
              <table
                class="table table-hover my-0 dataTable no-footer"
                width="100%"
                id="myTable"
                aria-describedby="myTable_info"
                style="width: 100%"
              >
                <thead>
                  <tr id="myTable">
                    <td
                      class="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style="width: 63px"
                      aria-sort="ascending"
                      aria-label="No: activate to sort column descending"
                    >
                      No
                    </td>
                    <td
                      class="sorting"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style="width: 415px"
                      aria-label="Nama Kegiatan Penghargaan: activate to sort column ascending"
                    >
                      Nama Kegiatan Penghargaan
                    </td>
                    <td
                      class="sorting"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style="width: 341px"
                      aria-label="Tingkatan Penghargaan: activate to sort column ascending"
                    >
                      Tingkatan Penghargaan
                    </td>
                    <td
                      class="sorting"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style="width: 260px"
                      aria-label="File Sharing (Link): activate to sort column ascending"
                    >
                      File Sharing (Link)
                    </td>
                    <td
                      class="sorting"
                      tabindex="0"
                      aria-controls="myTable"
                      rowspan="1"
                      colspan="1"
                      style="width: 77px"
                      aria-label="Aksi: activate to sort column ascending"
                    >
                      Aksi
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd">
                    <td valign="top" colspan="5" class="dataTables_empty">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="dataTables_info" id="myTable_info" role="status" aria-live="polite">
                Showing 0 to 0 of 0 entries
              </div>
              <div class="dataTables_paginate paging_full_numbers" id="myTable_paginate">
                <a
                  class="paginate_button first disabled"
                  aria-controls="myTable"
                  data-dt-idx="0"
                  tabindex="-1"
                  id="myTable_first"
                  >First</a
                ><a
                  class="paginate_button previous disabled"
                  aria-controls="myTable"
                  data-dt-idx="1"
                  tabindex="-1"
                  id="myTable_previous"
                  >Previous</a
                ><span></span
                ><a
                  class="paginate_button next disabled"
                  aria-controls="myTable"
                  data-dt-idx="2"
                  tabindex="-1"
                  id="myTable_next"
                  >Next</a
                ><a
                  class="paginate_button last disabled"
                  aria-controls="myTable"
                  data-dt-idx="3"
                  tabindex="-1"
                  id="myTable_last"
                  >Last</a
                >
              </div>
            </div>

            <br />
            <p>
              Untuk mengunduh semua foto dokumentasi pada Dinas Pekerjaan Umum Dan Penataan Ruang
              [Tahun 2024] Silahkan klik tombol di ini.
              <a
                href="http://localhost:8074/adbang/capkin/penghargaan/downloadZip/2024/Dinas-Pekerjaan-Umum-Dan-Penataan-Ruang"
                class="badge bg-danger"
                target="_blank"
              >
                <i class="fa fa-download"></i> Download
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.row {
  /* border: 1px solid black; */
  min-width: 100%;
}
.card {
  /* border: 1px solid black; */
  min-width: 100%;
}
</style>

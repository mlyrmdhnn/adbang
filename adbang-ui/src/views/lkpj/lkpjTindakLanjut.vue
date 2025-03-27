<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
</script>
<template>
  <ContentTemplate>
    <AppHeader text="/LKPJ/" textBlue="Tindak Lanjut Rekomendasi"></AppHeader>
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-2 p-0">
          <div class="card-body">
            <form action="http://localhost:5173/adbang/lkpj/tindaklanjut" method="get">
              <!-- <input type="hidden" name="_token" value="wadUxlXCrJZOrduoNrhHF98F3JUFCUacQ7M8mfae" /> -->
              <div class="row">
                <div class="col-md-6">
                  <select type="select" name="dinas_id" class="form-control" required="">
                    <!-- eslint-disable-next-line vue/require-v-for-key -->
                    <option v-for="d in dinasDanKecamatan" :value="d">{{ d }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <div class="input-group select2-bootstrap-append">
                    <select type="select" name="tahun_id" class="form-control" required="">
                      <option value="5">Tahun 2023</option>
                      <option value="6" selected="">Tahun 2024</option>
                      <option value="7">Tahun 2025</option>
                    </select>
                    <div class="input-group-append">
                      <button type="submit" style="width: 200px" class="btn btn-alternate">
                        <i class="fa-eye fa"></i> Lihat Laporan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="card mt-0">
          <div class="card-header">
            Data Tindak Lanjut Rekomendasi Tahun 2024
            <div class="btn-actions-pane-right">
              <div class="nav">
                <a
                  href="http://localhost:8074/adbang/lkpj/tindaklanjut_report/3/6"
                  target="_blank"
                  class="btn-pill btn-wide btn btn-outline-success btn-sm"
                  style="margin-right: 2px"
                >
                  <i class="fa fa-download"></i> Download Semua Data <b> 2024 </b>
                </a>

                <button
                  onclick="$.fn.tambah()"
                  class="btn-pill btn-wide btn btn-outline-info btn-sm"
                >
                  <i class="fa fa-plus"></i> Tambah Data
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="tb_list_wrapper" class="dataTables_wrapper no-footer">
              <div class="dataTables_scroll">
                <div
                  class="dataTables_scrollHead"
                  style="overflow: hidden; position: relative; border: 0px; width: 100%"
                >
                  <div
                    class="dataTables_scrollHeadInner"
                    style="box-sizing: content-box; width: 1140px; padding-right: 0px"
                  >
                    <table
                      class="table table-bordered dataTable no-footer"
                      style="margin-left: 0px; width: 1140px"
                    >
                      <thead>
                        <tr>
                          <th
                            style="
                              text-align: center !important;
                              vertical-align: middle;
                              width: 62.9667px;
                            "
                            width="50px;"
                            class="sorting sorting_asc"
                            tabindex="0"
                            aria-controls="tb_list"
                            rowspan="1"
                            colspan="1"
                            aria-label="No: activate to sort column descending"
                            aria-sort="ascending"
                          >
                            No
                          </th>
                          <th
                            style="
                              text-align: center !important;
                              vertical-align: middle;
                              width: 398.667px;
                            "
                            width="400px"
                            class="text-left sorting"
                            tabindex="0"
                            aria-controls="tb_list"
                            rowspan="1"
                            colspan="1"
                            aria-label="Rekomendasi DPRD: activate to sort column ascending"
                          >
                            Rekomendasi DPRD
                          </th>
                          <th
                            style="
                              text-align: center !important;
                              vertical-align: middle;
                              width: 139.717px;
                            "
                            class="text-left sorting"
                            tabindex="0"
                            aria-controls="tb_list"
                            rowspan="1"
                            colspan="1"
                            aria-label="Tindak Lanjut: activate to sort column ascending"
                          >
                            Tindak Lanjut
                          </th>
                          <th
                            style="
                              text-align: center !important;
                              vertical-align: middle;
                              width: 337.933px;
                            "
                            class="text-left sorting"
                            tabindex="0"
                            aria-controls="tb_list"
                            rowspan="1"
                            colspan="1"
                            aria-label="Tujuan/Masalah Yang Diselesaikan: activate to sort column ascending"
                          >
                            Tujuan/Masalah Yang Diselesaikan
                          </th>
                          <th
                            style="
                              text-align: center !important;
                              vertical-align: middle;
                              width: 99.7167px;
                            "
                            width="100px"
                            class="sorting"
                            tabindex="0"
                            aria-controls="tb_list"
                            rowspan="1"
                            colspan="1"
                            aria-label="#: activate to sort column ascending"
                          >
                            #
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div
                  class="dataTables_scrollBody"
                  style="position: relative; overflow: auto; width: 100%"
                >
                  <table
                    id="tb_list"
                    class="table table-bordered dataTable no-footer"
                    aria-describedby="tb_list_info"
                    style="width: 100%"
                  >
                    <thead>
                      <tr style="height: 1.83333px">
                        <th
                          style="
                            text-align: center !important;
                            vertical-align: middle;
                            width: 62.9667px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top-width: 0px;
                            border-bottom-width: 0px;
                            height: 0px;
                          "
                          width="50px;"
                          class="sorting sorting_asc"
                          aria-controls="tb_list"
                          rowspan="1"
                          colspan="1"
                          aria-label="No: activate to sort column descending"
                          aria-sort="ascending"
                        >
                          <div class="dataTables_sizing" style="height: 0px; overflow: hidden">
                            No
                          </div>
                        </th>
                        <th
                          style="
                            text-align: center !important;
                            vertical-align: middle;
                            width: 398.667px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top-width: 0px;
                            border-bottom-width: 0px;
                            height: 0px;
                          "
                          width="400px"
                          class="text-left sorting"
                          aria-controls="tb_list"
                          rowspan="1"
                          colspan="1"
                          aria-label="Rekomendasi DPRD: activate to sort column ascending"
                        >
                          <div class="dataTables_sizing" style="height: 0px; overflow: hidden">
                            Rekomendasi DPRD
                          </div>
                        </th>
                        <th
                          style="
                            text-align: center !important;
                            vertical-align: middle;
                            width: 139.717px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top-width: 0px;
                            border-bottom-width: 0px;
                            height: 0px;
                          "
                          class="text-left sorting"
                          aria-controls="tb_list"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tindak Lanjut: activate to sort column ascending"
                        >
                          <div class="dataTables_sizing" style="height: 0px; overflow: hidden">
                            Tindak Lanjut
                          </div>
                        </th>
                        <th
                          style="
                            text-align: center !important;
                            vertical-align: middle;
                            width: 337.933px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top-width: 0px;
                            border-bottom-width: 0px;
                            height: 0px;
                          "
                          class="text-left sorting"
                          aria-controls="tb_list"
                          rowspan="1"
                          colspan="1"
                          aria-label="Tujuan/Masalah Yang Diselesaikan: activate to sort column ascending"
                        >
                          <div class="dataTables_sizing" style="height: 0px; overflow: hidden">
                            Tujuan/Masalah Yang Diselesaikan
                          </div>
                        </th>
                        <th
                          style="
                            text-align: center !important;
                            vertical-align: middle;
                            width: 99.7167px;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top-width: 0px;
                            border-bottom-width: 0px;
                            height: 0px;
                          "
                          width="100px"
                          class="sorting"
                          aria-controls="tb_list"
                          rowspan="1"
                          colspan="1"
                          aria-label="#: activate to sort column ascending"
                        >
                          <div class="dataTables_sizing" style="height: 0px; overflow: hidden">
                            #
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="odd">
                        <td valign="top" colspan="5" class="dataTables_empty">No Data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="dataTables_info" id="tb_list_info" role="status" aria-live="polite">
                Showing 0 to 0 of 0 entries
              </div>
              <div class="dataTables_paginate paging_simple_numbers" id="tb_list_paginate">
                <a
                  class="paginate_button previous disabled"
                  aria-controls="tb_list"
                  data-dt-idx="0"
                  tabindex="-1"
                  id="tb_list_previous"
                  >Back</a
                ><span></span
                ><a
                  class="paginate_button next disabled"
                  aria-controls="tb_list"
                  data-dt-idx="1"
                  tabindex="-1"
                  id="tb_list_next"
                  >Next</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.card {
  /* border: 1px solid green; */
  width: 100%;
}
.row {
  width: 100%;
}
</style>

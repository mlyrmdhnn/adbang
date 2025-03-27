<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import '@/assets/min.css'
import '@/assets/my.css'
import '@/assets/utils.css'
</script>
<template>
  <ContentTemplate>
    <AppHeader text="/ Anggaran Kas/ " textBlue="Mengisi Laporan"></AppHeader>
    <div class="card-body" style="min-height: 190px">
      <form action="http://localhost:5173/adbang/apbd/kas" method="get">
        <div class="row">
          <div class="col-md-6">
            <select type="select" name="dinas_id" class="form-control" required="">
              <!-- eslint-disable-next-line vue/require-v-for-key -->
              <option v-for="d in dinasDanKecamatan" :value="d">{{ d }}</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="input-group select2-bootstrap-append">
              <select
                type="select"
                name="activeProgram"
                id="activeProgram"
                class="form-control"
                required=""
              >
                <option value="517" selected="">
                  2.12.01 PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA
                </option>
                <option value="518">2.12.02 PROGRAM PENDAFTARAN PENDUDUK</option>
                <option value="519">2.12.03 PROGRAM PENCATATAN SIPIL</option>
                <option value="520">
                  2.12.04 PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN
                </option>
                <option value="521">2.12.05 PROGRAM PENGELOLAAN PROFIL KEPENDUDUKAN</option>
              </select>
              <div class="input-group-append">
                <button type="submit" class="btn btn-primary">Lihat Laporan</button>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" name="" value="" />
      </form>
      <hr />

      <div class="table-responsive" style="overflow-x: auto">
        <table class="mb-0 table table-bordered table-hover" id="tb-kiki">
          <thead>
            <tr>
              <th rowspan="2" style="width: 90px">#</th>
              <th rowspan="2" style="width: 350px">Uraian</th>
              <th rowspan="2" class="text-center">Anggaran</th>
              <th rowspan="2" class="text-center" style="width: 70px">#</th>
            </tr>
          </thead>
          <tbody>
            <tr class="keg" style="background-color: #e9ecef">
              <td class="text">1.1.1.1</td>
              <td class="text" colspan="1">test</td>
              <td></td>
              <td class="text-center">ksong</td>
            </tr>

            <tr class="sub">
              <form action="#" method="post" onsubmit="" autocomplete="off"></form>
              <td class="text">2.2.2.2</td>
              <td class="text">tes2</td>

              <td class="text-center" id="pengeluaran5344">0</td>
              <td style="text-align: center">
                <button class="btn-info btn-sm btn">
                  <i class="fa fa-save"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.col-md-6 {
  background-color: black;
  display: flex;
  width: 95% !important;
  align-items: center;
  height: 5rem;
}
</style>

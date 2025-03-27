<script setup>
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
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
                    <option value="1">Dinas Pendidikan</option>
                    <option value="2">Dinas Kesehatan</option>
                    <option value="3" selected="">Dinas Pekerjaan Umum Dan Penataan Ruang</option>
                    <option value="5">Dinas Perumahan, Kawasan Permukiman Dan Pertanahan</option>
                    <option value="6">Satuan Polisi Pamong Praja</option>
                    <option value="7">Badan Penanggulangan Bencana Daerah</option>
                    <option value="8">Dinas Pemadam Kebakaran</option>
                    <option value="9">Dinas Sosial</option>
                    <option value="10">Dinas Tenaga Kerja</option>
                    <option value="11">
                      Dinas Pemberdayaan Perempuan Dan Perlindungan Anak, Pengendalian Penduduk Dan
                      Keluarga Berencana
                    </option>
                    <option value="12">Dinas Ketahanan Pangan</option>
                    <option value="13">Dinas Lingkungan Hidup</option>
                    <option value="14">Dinas Kependudukan Dan Pencatatan Sipil</option>
                    <option value="15">Dinas Pemberdayaan Masyarakat Dan Desa</option>
                    <option value="16">Dinas Perhubungan</option>
                    <option value="17">Dinas Komunikasi Dan Informatika</option>
                    <option value="18">Dinas Koperasi, Usaha Kecil Dan Menengah</option>
                    <option value="19">
                      Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu
                    </option>
                    <option value="20">Dinas Pemuda Dan Olahraga</option>
                    <option value="21">Dinas Kebudayaan Dan Pariwisata</option>
                    <option value="22">Dinas Arsip Dan Perpustakaan</option>
                    <option value="23">Dinas Perikanan Dan Peternakan</option>
                    <option value="24">Dinas Tanaman Pangan, Hortikultura Dan Perkebunan</option>
                    <option value="25">Dinas Perdagangan Dan Perindustrian</option>
                    <option value="26">Sekretariat Daerah</option>
                    <option value="27">Sekretariat Dprd</option>
                    <option value="28">
                      Badan Perencanaan Pembangunan, Penelitian Dan Pengembangan Daerah
                    </option>
                    <option value="29">Badan Pengelolaan Keuangan Dan Aset Daerah</option>
                    <option value="30">Badan Pengelolaan Pendapatan Daerah</option>
                    <option value="31">
                      Badan Kepegawaian Dan Pengembangan Sumber Daya Manusia
                    </option>
                    <option value="32">Inspektorat</option>
                    <option value="33">Kecamatan Cibinong</option>
                    <option value="34">Kecamatan Gunung Putri</option>
                    <option value="35">Kecamatan Citeureup</option>
                    <option value="36">Kecamatan Sukaraja</option>
                    <option value="37">Kecamatan Babakan Madang</option>
                    <option value="38">Kecamatan Jonggol</option>
                    <option value="39">Kecamatan Cileungsi</option>
                    <option value="40">Kecamatan Cariu</option>
                    <option value="41">Kecamatan Sukamakmur</option>
                    <option value="42">Kecamatan Parung</option>
                    <option value="43">Kecamatan Gunung Sindur</option>
                    <option value="44">Kecamatan Kemang</option>
                    <option value="45">Kecamatan Bojonggede</option>
                    <option value="46">Kecamatan Leuwiliang</option>
                    <option value="47">Kecamatan Ciampea</option>
                    <option value="48">Kecamatan Cibungbulang</option>
                    <option value="49">Kecamatan Pamijahan</option>
                    <option value="50">Kecamatan Rumpin</option>
                    <option value="51">Kecamatan Jasinga</option>
                    <option value="52">Kecamatan Parung Panjang</option>
                    <option value="53">Kecamatan Nanggung</option>
                    <option value="54">Kecamatan Cigudeg</option>
                    <option value="55">Kecamatan Tenjo</option>
                    <option value="56">Kecamatan Ciawi</option>
                    <option value="57">Kecamatan Cisarua</option>
                    <option value="58">Kecamatan Megamendung</option>
                    <option value="59">Kecamatan Caringin</option>
                    <option value="60">Kecamatan Cijeruk</option>
                    <option value="61">Kecamatan Ciomas</option>
                    <option value="62">Kecamatan Dramaga</option>
                    <option value="63">Kecamatan Tamansari</option>
                    <option value="64">Kecamatan Klapanunggal</option>
                    <option value="65">Kecamatan Ciseeng</option>
                    <option value="66">Kecamatan Rancabungur</option>
                    <option value="67">Kecamatan Sukajaya</option>
                    <option value="68">Kecamatan Tanjungsari</option>
                    <option value="69">Kecamatan Tajurhalang</option>
                    <option value="70">Kecamatan Cigombong</option>
                    <option value="71">Kecamatan Leuwisadeng</option>
                    <option value="72">Kecamatan Tenjolaya</option>
                    <option value="73">Badan Kesatuan Bangsa Dan Politik</option>
                    <option value="74">Rsud Cibinong</option>
                    <option value="75">Rsud Ciawi</option>
                    <option value="76">Rsud Cileungsi</option>
                    <option value="77">Rsud Leuwiliang</option>
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
<style scoped></style>

<script setup></script>
<template>
  <NavAndSide></NavAndSide>
  <section class="content-header">
    <section class="house"><i class="bi bi-house-fill"></i></section>
    <section class="text">
      <span class="text-1">Dashboard</span>
      <span class="text-2">Silahkan pilih menu di bawah ini</span>
    </section>
  </section>

  <div class="row goks">
    <div class="col-md-12 col-lg-12">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title">
            <i class="header-icon lnr-rocket fa fa-fax"></i> Pendapatan Daerah ( Kabupaten Bogor )
          </div>
        </div>
        <div class="card-body" style="padding-bottom: 0">
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div class="card mb-3 widget-content bg-arielle-smile">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div class="widget-heading">Rp.438.959.274.554</div>
                    <div class="widget-subheading">PENDAPATAN ASLI DAERAH</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white"><span>PAD</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="card mb-3 widget-content bg-mixed-hopes">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Rp.1.256.481.627.443</div>
                    <div class="widget-subheading">PENDAPATAN TRANSFER</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>TRANSFER</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <figure class="highcharts-figure">
                <div id="container_pie2"></div>
              </figure>
            </div>
            <div class="col-8">
              <figure class="highcharts-figure">
                <div id="container2"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-mixed-hopes {
  background: linear-gradient(135deg, #ff758c, #ff7eb3); /* Gradasi pink ke merah muda */
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.goks {
  margin-left: 3rem;
}
/* Warna latar belakang untuk bg-arielle-smile */
.bg-arielle-smile {
  background: linear-gradient(135deg, #42e695, #3bb2b8); /* Gradasi hijau ke biru */
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Widget content wrapper */
.widget-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Memisahkan kiri & kanan */
  padding: 1rem 1.5rem;
}

/* Bagian kiri */
.widget-content-left {
  display: flex;
  flex-direction: column;
}

.widget-heading {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 3px;
}

.widget-subheading {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Bagian kanan (PAD) */
.widget-content-right {
  display: flex;
  align-items: center;
}

.widget-numbers {
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  text-align: center;
}

.content {
  border: 1px solid black;
  margin-left: 3rem;
  /* min-width: vw; */
}
.content-header {
  width: 100%;
  min-width: 100vw;
  display: flex;
  align-items: center;
  background: rgba(213, 210, 247, 0.4);
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  gap: 1rem;
  margin-left: 3rem;
}

.house {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1.5rem;
}

.text {
  display: flex;
  flex-direction: column;
}

.text-1 {
  font-size: 1.4rem;
  font-weight: bold;
}

.text-2 {
  font-size: 1rem;
  color: rgb(58, 58, 58);
}

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
  .widget-numbers {
    font-size: 1rem;
  }
  .fa-bullhorn {
    display: none;
  }

  .house {
    display: none;
  }

  .text {
    /* transform: translateX(7rem); */
  }

  .footer {
    transform: translateY(1rem);
  }
  .content-header {
    margin-left: 0rem;
    display: flex;
    justify-content: center;
  }
  .goks {
    margin-left: 0;
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ContentTemplate from '@/template/ContentTemplate.vue';
import CardBelanja from '@/components/belanja/CardBelanja.vue';
import ChartLine from '@/components/APBD/ChartLine.vue';
</script>

<template>
  <ContentTemplate>
    <div class="md:px-0 mt-10">
      <div class="bg-neutral-200 mx-auto rounded-[5px] shadow-lg">
        <div class="text-[1.1rem] text-gray-700 font-semibold text-center lg:text-start px-5 py-2">
          <h1 class="inline-block">
            <h1 class="hidden lg:inline-block"><i class="fa fa-fax mr-2"></i></h1>BELANJA DAERAH (KABUPATEN BOGOR)
          </h1>
        </div>
        <hr class="bg-neutral-300 h-[1px] border-0">
        <div class="grid grid-cols-1 p-5 pb-10 lg:grid-cols-4 gap-2">
          <CardBelanja color="bg-gradient-to-r from-purple-300 to-purple-400" value="2.062.535.763.149" label="PAGU" />
          <CardBelanja color="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400" value="1.463.985.862.108"
            label="REALISASI" />
          <CardBelanja color="bg-gradient-to-b from-purple-400 to-purple-500" value="66.5%" label="PENYERAPAN" />
          <CardBelanja color="bg-gradient-to-b from-green-600 via-lime-500 to-green-500" value="598.549.901.041"
            label="SISA PAGU" />
        </div>
      </div>
    </div>
    <ChartLine></ChartLine>
  </ContentTemplate>
</template>
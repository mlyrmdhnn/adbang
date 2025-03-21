<script setup></script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="main-content">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.content {
  background:
    url('/public/image/gedung.png') top / 100vw 80vh,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  margin-top: 3rem;
  border: 1px solid black;
  margin-left: 3.8rem;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-content {
  margin-top: 2rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  min-width: 90vw !important;
}
</style>

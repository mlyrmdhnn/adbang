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
/* /public/image/gedung.png */
.content {
  background:
    url('/public/image/gedung.png') top / 100vw 100vh,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;

  margin-left: 3.75rem;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-content {
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  min-width: 90vw !important;
  align-items: center;
}
@media (max-width: 768px) {
  .content {
    margin-left: 0rem;
  }
}
</style>

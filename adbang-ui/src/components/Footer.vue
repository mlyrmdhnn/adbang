<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <span class="app">APP</span>
    <span class="version">version 2.0</span>
  </footer>
</template>
<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  padding: 0 2rem;
  background-color: rgb(238, 238, 238);
  border-top: 1px solid #ddd;
}

.app {
  cursor: pointer;
  font-weight: bold;
  border-bottom: 2px solid blue;
  color: blue;
  font-size: 1rem;
}

.version {
  background-color: rgb(92, 223, 92);
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>

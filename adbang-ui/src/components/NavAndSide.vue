<script setup></script>
<template>
  <nav>
    <div class="card">
      <div class="card-header">
        <button
          class="btn btn-warning"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
        >
          ☰
        </button>
        <section><span class="name">Mulya</span><br /><span class="role">Admin</span></section>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="sidebarMenu">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Menu</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group">
        <li class="list-group-item bg-dark text-white">
          <a href="#" class="text-white text-decoration-none">Home</a>
        </li>
        <li class="list-group-item bg-dark text-white">
          <a href="#" class="text-white text-decoration-none">About</a>
        </li>
        <li class="list-group-item bg-dark text-white">
          <a href="#" class="text-white text-decoration-none">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.offcanvas {
  transition: transform 0.2s ease-in-out;
  width: 300px;
}

.card {
  display: flex;
  background: linear-gradient(to right, #c09853, #a67c00);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  background: linear-gradient(to right, #c09853, #a67c00);
}

.name {
  font-weight: 600;
  cursor: pointer;
}

.role {
  font-size: 90%;
}
</style>

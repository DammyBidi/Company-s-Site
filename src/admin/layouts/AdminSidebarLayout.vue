<template>
  <div class="admin-sidebar-layout">
    <AdminSidebar />
    <div class="admin-main-content">
      <router-view />
      <!-- Dynamic child components will be rendered here -->
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from "../components/AdminSidebar.vue";
</script>

<style scoped>
.admin-sidebar-layout {
  display: flex;
  height: 100vh;
  /* max-width: 1440px;
  margin: 0 auto; */
}
.admin-main-content {
  margin-left: 15rem;
  margin-top: 1rem;
  flex: 1;
  padding: 1rem; /* Add padding if necessary */
  overflow-y: auto;
}
</style>

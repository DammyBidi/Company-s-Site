<template>
    <div class="admin-layout">
      <AdminSidebar />
      <div class="admin-main">
        <AdminHeader />
        <router-view /> <!-- Dynamic child components will be rendered here -->
      </div>
    </div>
  </template>
  
  <script setup >
  import AdminHeader from '../components/AdminHeader.vue'
  import AdminSidebar from '../components/AdminSidebar.vue'
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
    /* height: 100vh; */
    /* max-width: 1440px; */
    margin: 0 auto;
  }
  .admin-main {
    display: flex;
    flex-direction: column;
    
    /* margin: O auto; */
    margin-left: 15rem;
    margin-top: 5rem;
    
    flex: 1;
  }
  </style>
  
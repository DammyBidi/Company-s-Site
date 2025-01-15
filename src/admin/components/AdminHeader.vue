<template>
  <header class="header">
    <div>
      <h1>Blog Management</h1>
      <p>Manage all your blog post here</p>
    </div>
    <div class="header-controls">
      <input type="text" placeholder="Search" class="search-bar" />
      <img src="../assets/images/search.svg" alt="" />
    </div>
    <router-link to="/admin/sidebar/create-blog">
      <button class="create-btn">Create Blog</button>
    </router-link>
    <!-- <button class="create-btn">Create Blog</button> -->
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "../assets/views-styles/header.css";
</style>

<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <img src="/src/assets/images/logo.svg" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/admin/overview">Overview</router-link>
        </li>
        <li>
          <router-link to="/admin/draft">Draft</router-link>
        </li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <div class="user-info">
        <div class="avatar"><img src="../assets/images/avatar.svg" alt=""></div>
        <div>
          <p>{{ userName }}</p>
          <p>{{ userEmail }}</p>
        </div>
      </div>
      <div class="logout">
        <img src="../assets/images/exitimg.svg" alt="">
        <button class="logout-btn"  @click="handleSignOut">Sign Out</button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userName = ref(localStorage.getItem("userName") || sessionStorage.getItem("userName") || "Guest");
const userEmail = ref(localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail") || "Not available");

const handleSignOut = () => {
  localStorage.clear();
  sessionStorage.clear();
  router.push("/admin/login");
};


</script>

<style scoped>
@import "../assets/views-styles/sidebar.css";
</style>

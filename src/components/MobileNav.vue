<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/images/mobilenavlogo.svg" alt="">
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <img
        v-if="!menuOpen"
        src="../assets/images/hamburger.svg"
        alt="Hamburger Icon"
      />
      <img
        v-if="menuOpen"
        src="../assets/images/cancellogo.svg"
        alt="Cancel Icon"
      />
    </div>
    <ul :class="{ 'nav-items': true, open: menuOpen }">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/services">Services</router-link>
      </li>
      <li>
        <router-link to="/about">About Us</router-link>
      </li>
      <li>
        <router-link to="/blog">Blog</router-link>
      </li>
      <router-link to="/contact-us"><button>Get in touch with us</button></router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};



</script>

<style scoped>
@import "../components/mobilenav.css";

</style>

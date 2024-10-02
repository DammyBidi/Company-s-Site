<template>
  <div id="portfolio">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <img src="../assets/images/TTS Logo.svg" alt="" />
          <div>
            <h3>Trailblazing</h3>
            <p>TECHNOLOGY SOLUTIONS</p>
          </div>
        </div>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link class="portfolio-link" to="/portfolio"
            >Portfolio</router-link
          >
          <router-link to="/services">Services</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
        <router-link to="/contact-us"
          ><button>Get in touch with us</button></router-link
        >
      </nav>
      <hr />
    </div>

    <div :class="{ blurred: isNavOpen }">
      <!-- Hero -->
      <div class="hero">
        <h1>Portfolio</h1>
        <p>
          Explore our portfolio to see how we've helped businesses achieve their
          digital goals. From web development and UI/UX design to AI solutions,
          our work showcases the creativity and precision we bring to every
          project. Discover how we turn ideas into impactful digital
          experiences.
        </p>
      </div>

      <!-- Portfolio -->
      <div class="portfolio">
        <div class="top-section">
          <div class="portfolio-images">
            <img
              src="../assets/images/portfolio-image.svg"
              alt="portfolio-image"
            />
          </div>
          <div class="portfolio-images">
            <img
              src="../assets/images/portfolio-image.svg"
              alt="portfolio-image"
            />
          </div>
        </div>
        <div class="bottom-section">
          <div class="portfolio-images">
            <img
              src="../assets/images/portfolio-image.svg"
              alt="portfolio-image"
            />
          </div>
          <div class="portfolio-images">
            <img
              src="../assets/images/portfolio-image.svg"
              alt="portfolio-image"
            />
          </div>
        </div>
      </div>

      <div class="mobile-portfolio">
        <img src="../assets/images/Frame20.svg" alt="portfolio-images" />
        <img src="../assets/images/Frame20.svg" alt="portfolio-images" />
        <img src="../assets/images/Frame20.svg" alt="portfolio-images" />
        <img src="../assets/images/Frame20.svg" alt="portfolio-images" />
      </div>

      <!-- Footer -->
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "../components/MobileNav.vue";
import FooterComponent from "../components/FooterComponent.vue";

const isNavOpen = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};
</script>

<style scoped>
@import "../assets/views-styles/portfolio.css";
</style>

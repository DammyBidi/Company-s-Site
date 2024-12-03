<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        <div class="logo">
          <router-link to="/"
            ><img src="../assets/images/TTS Logo-06.svg" alt=""
          /></router-link>
        </div>
        <div class="socials">
          <a href="http://x.com" target="_blank" rel="noopener noreferrer"
            ><img src="../assets/images/logo-twitter.svg" alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61563659004858&mibextid=ZbWKwL"
            ><img src="../assets/images/logo-facebook.svg" alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.instagram.com/trailblazing_tech_solutions?igsh=MTgzN212Z2FtemRzbg=="
            ><img src="../assets/images/logo-instagram.svg" alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/trailblazing-technology-solutions"
            ><img src="../assets/images/logo-linkedin.svg" alt=""
          /></a>
          <a target="_blank" href="mailto:trailblazingtechsolutions@gmail.com"
            ><img src="../assets/images/logo-email.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="right">
        <div class="footer-links">
          <h4>Company</h4>
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact-us">Contact us</router-link>
          <!-- <router-link to="/blog">Blog</router-link> -->
          <router-link to="/services">Services</router-link>
        </div>
        <div class="legal">
          <h4>Legal</h4>
          <!-- <router-link to="/privacy-policy">Privacy Policy</router-link> -->
          <router-link to="/privacy-policy" @click="openInNewTab">
            Privacy Policy
          </router-link>
          <!-- <a
            :href="$router.resolve({ path: '/privacy-policy' }).href"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a> -->
          <!-- <a
            :href="$router.resolve({ path: '/terms-of-services' }).href"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a> -->
          <router-link target="_blank" to="/terms-of-services"
            >Terms of Service</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// Access the Vue Router instance
const router = useRouter();

// Define the function to open the link in a new tab
const openInNewTab = (event: MouseEvent): void => {
  event.preventDefault(); // Prevent the default behavior of <router-link>
  const url = router.resolve({ path: "/privacy-policy" }).href; // Resolve the route URL
  window.open(url, "_blank"); // Open the resolved URL in a new tab
};
</script>

<style scoped>
@import "../components/footer.css";
</style>

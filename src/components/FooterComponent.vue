<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        <div class="logo">
          <router-link to="/">LOGO</router-link>
        </div>
        <div class="socials">
          <a href="http://x.com" target="_blank" rel="noopener noreferrer"
            ><img src="../assets/images/logo-twitter.svg" alt=""
          /></a>
          <a
            target="_blank"
            href=""
            ><img src="../assets/images/logo-facebook.svg" alt=""
          /></a>
          <a
            target="_blank"
            href=""
            ><img src="../assets/images/logo-instagram.svg" alt=""
          /></a>
          <a
            target="_blank"
            href=""
            ><img src="../assets/images/logo-linkedin.svg" alt=""
          /></a>
          <a target="_blank" href=""
            ><img src="../assets/images/logo-email.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="right">
        <div class="footer-links">
          <h4>Company</h4>
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact-us">Contact us</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/services">Services</router-link>
        </div>
        <div class="legal">
          <h4>Legal</h4>
          <router-link  to="/">Privacy Policy</router-link>
          <router-link to="/">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "../components/footer.css";
</style>

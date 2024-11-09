<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        <div class="logo">
          <router-link  to="/"><img src="../assets/images/TTS Logo-06.svg" alt=""></router-link>  
          <!-- <img src="../assets/images/TTS Logo.svg" alt="" />
          <div>
            <h3>Trailblazing</h3>
            <p>TECHNOLOGY SOLUTIONS</p>
          </div> -->
        </div>
        <div class="socials">
          <img src="../assets/images/logo-twitter.svg" alt="" />
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61563659004858&mibextid=ZbWKwL"><img src="../assets/images/logo-facebook.svg" alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/trailblazing_tech_solutions?igsh=MTgzN212Z2FtemRzbg=="><img src="../assets/images/logo-instagram.svg" alt="" /></a>
          <a target="_blank" href="https://www.linkedin.com/company/trailblazing-technology-solutions"><img src="../assets/images/logo-linkedin.svg" alt="" /></a>
          <a target="_blank" href="mailto:trailblazingtechsolutions@gmail.com"><img src="../assets/images/logo-email.svg" alt="" /></a>
          
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
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/terms-of-services">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import "../components/footer.css"; 

</style>

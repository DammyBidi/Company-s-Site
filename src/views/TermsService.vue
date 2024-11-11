<template>
  <div id="terms-service">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link to="/"
            ><img src="../assets/images/navlogo.svg" alt=""
          /></router-link>
        </div>
      </nav>
    </div>

    <div :class="{ blurred: isNavOpen }">
      <div class="terms-service-container">
        <div class="sidebar">
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#service">Use of service</a></li>
            <li><a href="#third-party">Third-party service</a></li>
            <li><a href="#changes">Changes to Terms</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <main class="content">
          <section id="introduction">
            <h3>Terms Of Service</h3>
            <h1>
              These Terms of Service ("Terms") govern your use of Trailblazing
              Technology Solutions's website and services. By accessing or using
              our website and services, you agree to these Terms. If you do not
              agree, you may not use our services.
            </h1>
          </section>

          <section id="service">
            <h2>1. Use of service</h2>
            <p>
              You agree to use our website and services only for lawful purposes
              and following these Terms. You may not use our services to:
            </p>
            <ul>
              <li>Engage in any illegal or fraudulent activity.</li>
              <li>Distribute malware, viruses, or harmful code.</li>
              <li>Interfere with the operation of our website or services.</li>
            </ul>
          </section>

          <section id="third-party">
            <h2>2. Third-party service</h2>
            <p>
              Our website may include links to third-party websites or services.
              Trailblazing Technology Solutions is not responsible for the
              content, functionality, or privacy practices of third-party
              services. You access third-party services at your own risk
            </p>
          </section>

          <section id="changes">
            <h2>3. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              posted on this page with the revised date. Continued use of our
              services after such changes constitutes acceptance of the new
              Terms.
            </p>
          </section>

          <section id="contact">
            <h2>4. Contact us</h2>
            <p>
                If you have any questions or concerns about these Terms, please contact us at trailblazingtechsolutions@gmail.com
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "../components/MobileNav.vue";

const isNavOpen = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};
</script>

<style scoped>
@import "../assets/views-styles/termservice.css";
</style>

<template>
  <div id="services">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link to="/"
            ><img src="../assets/images/navlogo.svg" alt=""
          /></router-link>
          <!-- <img src="../assets/images/TTS Logo.svg" alt="" />
          <div>
            <h3>Trailblazing</h3>
            <p>TECHNOLOGY SOLUTIONS</p>
          </div> -->
        </div>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <!-- <router-link to="/portfolio">Portfolio</router-link> -->
          <router-link class="services-link" to="/services"
            >Services</router-link
          >
          <router-link to="/about">About Us</router-link>
          <!-- <router-link to="/blog">Blog</router-link> -->
        </div>
        <router-link to="/contact-us"
          ><button>Get in touch with us</button></router-link
        >
      </nav>
      <hr />
    </div>

    <div :class="{ blurred: isNavOpen }">
      <!-- hero -->

      <div class="hero">
        <h1>Our Services</h1>
        <p>
          At Trailblazing Technology Solutions, we offer a full spectrum of
          software development services designed to meet the unique needs of
          businesses across various industries. From conceptualization to
          deployment and beyond, our team is dedicated to delivering solutions
          that enhance operational efficiency, drive innovation, and support
          business growth.
        </p>
      </div>

      <!-- Services -->
      <div class="our-services">
        <h1>Explore our services</h1>
        <div class="services">
          <div class="service">
            <div class="image">
              <img src="../assets/images/service1.webp" alt="service-img" />
            </div>
            <div class="text">
              <h3>Web development</h3>
              <p>
                We develop dynamic, responsive, and visually appealing websites
                that align with your brand and business objectives. Our
                expertise covers everything from simple corporate websites to
                complex web applications, ensuring high performance, security,
                and an exceptional user experience.
              </p>
            </div>
          </div>
          <div class="service mobile-service">
            <div class="text">
              <h3>Mobile app development</h3>
              <p>
                Our team creates intuitive, user-friendly mobile apps for both
                iOS and Android platforms. From consumer-facing apps to
                enterprise mobile solutions, we design and develop mobile
                applications that offer seamless user experiences, high
                performance, and scalability.
              </p>
            </div>
            <div class="image">
              <img
                src="../assets/images/service2.webp"
                alt="service-img"
              />
            </div>
          </div>
          <div class="service">
            <div class="image">
              <img src="../assets/images/service3.webp" alt="service-img" />
            </div>
            <div class="text">
              <h3>Consulting</h3>
              <p>
                Our consultation services are designed to provide you with
                expert guidance throughout the entire software development
                lifecycle—from initial planning to post-launch optimization. We
                help you make informed decisions, streamline your processes, and
                ensure that your software investments drive real results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="contact">
        <div><img src="../assets/images/TTS Logo-06.svg" alt="" /></div>
        <div class="buttons">
          <router-link to="/contact-us"
            ><button class="btn1">Contact us</button></router-link
          >
          <router-link to="/about"
            ><button class="btn2">About us</button></router-link
          >
        </div>
      </div>

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
@import "../assets/views-styles/services.css";
</style>

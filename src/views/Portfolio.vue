<template>
  <div id="portfolio">
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
          <router-link class="portfolio-link" to="/portfolio"
            >Portfolio</router-link
          >
          <router-link to="/services">Services</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/blog-page">Blog</router-link>
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
          Our portfolio showcases various projects across various industries,
          demonstrating our commitment to quality, innovation, and excellence.
          Each project is a testament to our ability to understand our client's
          unique challenges and deliver solutions that drive growth, efficiency,
          and success. Explore how we have helped businesses streamline
          operations, enhance user experiences, and achieve digital
          transformation goals. Each project represents a journey of
          collaboration, innovation, and success, and we are excited to continue
          creating solutions that make a real impact.
        </p>
      </div>

      <!-- Portfolio -->
      <div class="portfolio">
        <div class="top-section">
          <div class="portfolio-card">
            <div class="card-content">
              <h2 class="card-title">Albarka TopUp</h2>
              <p class="card-paragraph">
                Albarka TopUp is a digital VTU and bill payment application
                designed to make essential services easily accessible. The app
                allows users to purchase airtime and mobile data, pay
                electricity bills, and manage TV subscriptions directly from
                their mobile device. Users create accounts to securely manage
                transactions, view payment history, and receive instant
                confirmations. 
              </p>
              <button class="card-button">Digital VTU & Bill Payment</button>
            </div>
            <div class="card-image">
              <img
                src="../assets/images/portfolio-image.svg"
                alt="Albarka TopUp"
              />
            </div>
          </div>
          <div class="portfolio-card">
            <div class="card-content">
              <h2 class="card-title">NewCity University Web Platform</h2>
              <p class="card-paragraph">
                A comprehensive university web platform built to handle online
                admissions, student and lecturer portals, and public-facing
                academic information. The system supports admission
                applications, student access to academic records, lecturer
                management tools, and administrative workflows, alongside a
                responsive public website for programs, news, and institutional
                updates.
              </p>
              <button class="card-button">University Platform</button>
            </div>
            <div class="card-image">
              <img
                src="../assets/images/portfolio-image.svg"
                alt="University Platform"
              />
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="portfolio-card">
            <div class="card-content">
              <h2 class="card-title">Edquity</h2>
              <p class="card-paragraph">
                Edquity is a civic-tech digital platform designed to empower
                active citizens to report the state of schools in their
                communities. The aim is to bridge the communication gap between
                citizens and governing bodies by providing a centralized system
                for documenting and sharing school-related issues.
              </p>
              <button class="card-button">Civic-Tech</button>
            </div>
            <div class="card-image">
              <img src="../assets/images/portfolio-image.svg" alt="Edquity" />
            </div>
          </div>
          <div class="portfolio-card">
            <div class="card-content">
              <h2 class="card-title">Glam Connect</h2>
              <p class="card-paragraph">
                Glam Connect is a beauty-tech platform that connects makeup
                artists with potential clients through a seamless booking
                experience. The platform simplifies how customers discover and
                engage with makeup artists by providing personalized artist
                listings, booking options, and direct communication tools. For
                makeup artists, it removes the hassle of client acquisition by
                showcasing their work and making their services accessible to a
                wider audience.
              </p>
              <button class="card-button">Beauty-Tech</button>
            </div>
            <div class="card-image">
              <img
                src="../assets/images/portfolio-image.svg"
                alt="Glam Connect"
              />
            </div>
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

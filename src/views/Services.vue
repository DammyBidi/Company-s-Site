<template>
  <div id="services">
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
        <router-link to="/contact">Portfolio</router-link>
        <router-link class="services-link" to="/services">Services</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact-us">Contact us</router-link>
      </div>
      <button>Get in touch with us</button>
    </nav>
    <hr />

    <!-- hero -->

    <div class="hero">
      <h1>Our Services</h1>
      <p>
        At Trailblazing Technology Solutions, we provide cutting-edge technology
        solutions designed to empower your business and drive success. Our
        expert team is dedicated to delivering customized services that address
        your unique challenges, ensuring that your operations are more
        efficient, secure, and scalable.
      </p>
    </div>

    <!-- Services -->
    <div class="our-services">
      <h1>Explore our services</h1>
      <div class="services">
        <div class="service">
          <div class="image">
            <img src="../assets/images/webcodeimg.svg" alt="chooseimg" />
          </div>
          <div class="text">
            <h3>Web development</h3>
            <p>
              We create responsive, user-friendly websites that not only look
              great but also perform exceptionally well. From custom designs to
              complex web applications, our web development services are
              tailored to your unique business needs.
            </p>
          </div>
        </div>
        <div class="service">
          <div class="text">
            <h3>Mobile app development</h3>
            <p>
              Our mobile app development team specializes in creating seamless,
              intuitive apps for both iOS and Android platforms. Whether you
              need a customer-facing app or an internal tool, we ensure a smooth
              and engaging user experience.
            </p>
          </div>
          <div class="image">
            <img src="../assets/images/mobileappcodeimg.svg" alt="chooseimg" />
          </div>
        </div>
        <div class="service">
          <div class="image">
            <img src="../assets/images/choose3.svg" alt="chooseimg" />
          </div>
          <div class="text">
            <h3>Consulting</h3>
            <p>
              Leverage our expertise to make informed technology decisions that
              align with your business goals. Our consulting services include IT
              strategy, digital transformation, and process optimization,
              helping you navigate the complexities of the tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>

     <!-- Contact -->
     <div class="contact">
      <div><img src="../assets/images/TTS Logo-06.svg" alt="" /></div>
      <div class="buttons">
        <button>Contact us</button>
        <button>About us</button>
      </div>
    </div>

    <FooterComponent />


  </div>
</template>

<script setup lang="ts">
import FooterComponent from "../components/FooterComponent.vue";


</script>

<style scoped>
@import "../assets/views-styles/services.css";
</style>

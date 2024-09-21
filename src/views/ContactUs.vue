<template>
  <div id="Contact-us">
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
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link class="contact-link" to="/contact-us"
          >Contact us</router-link
        >
      </div>
      <button>Get in touch with us</button>
    </nav>
    <hr />

    <!-- Hero -->
    <div class="hero">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our
        services, want to collaborate on a project, or just want to say hello,
        we're here to help. Reach out to us using the form below, and we'll get
        back to you as soon as possible.
      </p>
    </div>

    <div class="contact-container">
      <div class="text">
        <h2>Get in touch with us</h2>
        <div class="info-container">
          <div>
            <img src="../assets/images/callicon.svg" alt="" />
            <p>+2349010825406</p>
          </div>
          <div>
            <img src="../assets/images/emailicon.svg" alt="" />
            <p>InfoTTS@gmail.com</p>
          </div>
          <div>
            <img src="../assets/images/locationicon.svg" alt="" />
            <p>
              Trailblazing Technology Solutions, <br />
              123 Main Street, Lagos, Nigeria
            </p>
          </div>
        </div>
        <div class="socials">
          <p>Social Media</p>
          <div class="socials-icons">
            <img src="../assets/images/logo-twitter.svg" alt="" />
            <img src="../assets/images/logo-facebook.svg" alt="" />
            <img src="../assets/images/logo-instagram.svg" alt="" />
            <img src="../assets/images/logo-linkedin.svg" alt="" />
            <img src="../assets/images/logo-email.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="form">
        <h2>Send us a message</h2>
        <form action="">
          <div class="input">
            <label for="name">Name</label>
            <input placeholder="Fill in your full name" type="text" id="name" />
          </div>
          <div class="input">
            <label for="email">Email</label>
            <input placeholder="abu@mail.com" type="email" id="email" />
          </div>
          <div class="input">
            <label for="phonenumber">Phone Number</label>
            <input placeholder="+234006677755" type="number" id="number" />
          </div>
          <div class="input">
            <label for="message">Message</label>
            <textarea
              placeholder="Write your message here"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="btn"><button>Send Message</button></div>
        </form>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "../components/FooterComponent.vue";
</script>

<style scoped>
@import "../assets/views-styles/contact-us.css";
</style>

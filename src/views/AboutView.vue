<template>
  <div class="about">
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
        <router-link class="aboutlink" to="/about">About Us</router-link>
        <router-link to="/contact">Contact us</router-link>
      </div>
      <button>Get in touch with us</button>
    </nav>
    <hr />

    <!-- Hero -->
    <div class="hero">
      <h1>About Us</h1>
      <p>
        Trailblazing Technology Solutions is a forward-thinking software
        development company on a mission to redefine innovation in the tech
        world. With a relentless pursuit of excellence, dynamic creativity, and
        a deep commitment to customer-centric innovation, we're not just
        problem-solvers; we're trailblazers.
      </p>
    </div>

    <!-- Mission -->
    <div class="mission">
      <div class="mission-card">
        <h3>Our Mission</h3>
        <p>
          Our mission is to simplify the digital world for businesses, with our
          commitment to delivering high-quality and creative solutions that meet
          our client's needs; sometimes its a website, other times its a mobile
          app, a web app, or some other digital product, all in all helping them
          enhance their online presence, and drive their success in the digital
          space
        </p>
      </div>
      <div class="mission-image">
        <img src="../assets/images/mission-image.svg" alt="" />
      </div>
    </div>

    <!-- Value -->
    <div class="brand-value">
      <h1>Our Brand Values</h1>
      <div class="values">
        <div class="value">
          <div class="image">
            <img src="../assets/images/choose1.svg" alt="chooseimg" />
          </div>
          <div class="text">
            <h3>Excellence</h3>
            <p>
              We combine years of experience with cutting-edge technology to
              deliver solutions that are not just functional but transformative.
              Our team stays ahead of the curve, integrating the latest trends
              in web development, UI/UX design, and AI to ensure that your
              business is always a step ahead
            </p>
          </div>
        </div>
        <div class="value">
          <div class="text">
            <h3>Customer-Centric Approach</h3>
            <p>
              Your success is our mission. We prioritize understanding your
              unique needs and tailor our services to meet them. From the
              initial consultation to the final delivery, we work closely with
              you to ensure that the end product not only meets but exceeds your
              expectations
            </p>
          </div>
          <div class="image">
            <img src="../assets/images/choose2.svg" alt="chooseimg" />
          </div>
        </div>
        <div class="value">
          <div class="image">
            <img src="../assets/images/choose3.svg" alt="chooseimg" />
          </div>
          <div class="text">
            <h3>Collaboration</h3>
            <p>
              We have a history of delivering high-quality, reliable solutions
              across various industries. Our portfolio speaks for
              itself—successful projects that have helped businesses enhance
              their digital presence, improve user engagement, and drive growth
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Meet the time -->
    <div class="team">
      <h1>Meet The Team</h1>
      <p>
        At Trailblazing, our team is the heart of everything we do. A diverse
        group of skilled professionals, we bring together a wealth of experience
        and passion for technology. Whether it's innovative web development,
        intuitive UI/UX design, or groundbreaking AI solutions, our team
        collaborates closely to turn your ideas into reality. We're not just
        problem solvers—we're partners in your success
      </p>
      <div>
        <p>Designers still working on team members section</p>
      </div>
    </div>

    <!-- Contact -->
    <div class="contact">
      <div><img src="../assets/images/TTS Logo-06.svg" alt="" /></div>
      <div class="buttons">
        <button>Contact us</button>
        <button>Explore our services</button>
      </div>
    </div>


    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "../components/FooterComponent.vue";


</script>

<style scoped>
@import "../assets/views-styles/about.css";
</style>

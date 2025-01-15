<template>
  <div class="about">
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
          <router-link to="/services">Services</router-link>
          <router-link class="aboutlink" to="/about">About Us</router-link>
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
        <h1>About Us</h1>
        <p>
          Trailblazing Technology Solutions is a forward-thinking software
          development company on a mission to redefine innovation in the tech
          world. With a relentless pursuit of excellence, dynamic creativity,
          and a deep commitment to customer-centric innovation, we are not just
          problem-solvers but trailblazers.
        </p>
      </div>

      <!-- Mission -->
      <div class="mission">
        <div class="mission-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to simplify the digital world for businesses, with
            our commitment to delivering high-quality and creative solutions
            that meet our client's needs; sometimes its a website, other times
            its a mobile app, a web app, or some other digital product, all in
            all helping them enhance their online presence, and drive their
            success in the digital space
          </p>
        </div>
        <div class="mission-image">
          <img src="../assets/images/mission-image.webp" alt="mission-image" />
        </div>
      </div>

      <!-- Value -->
      <div class="brand-value">
        <h1>Our Brand Values</h1>
        <div class="values">
          <div class="value">
            <div class="image">
              <img src="../assets/images/choose1.webp" alt="choose-img" />
            </div>
            <div class="text">
              <h3>Excellence</h3>
              <p>
                Our commitment to excellence drives everything we do. From the
                moment we engage with you, our focus is on delivering
                high-quality, innovative solutions that not only meet but exceed
                your expectations. With years of experience and a team of highly
                skilled developers, designers, and project managers, we follow
                industry best practices and cutting-edge technologies to ensure
                that your software is reliable, scalable, and future-proof. We
                don't just build software; we craft solutions that empower your
                business to grow and thrive in the digital age.
              </p>
            </div>
          </div>
          <div class="value mobile-value">
            <div class="text">
              <h3>Customer-Centric Approach</h3>
              <p>
                You are at the center of everything we do. We take the time to
                understand your business, industry, and unique challenges so
                that we can develop tailored solutions that align with your
                goals. Your feedback is invaluable throughout the entire project
                lifecycle, and we pride ourselves on maintaining open
                communication, transparency, and flexibility. We are not just
                delivering a product—we are solving your problems, enhancing
                your processes, and supporting your vision. Your success is our
                success, and we're dedicated to ensuring that your experience
                with us is smooth, productive, and positive.
              </p>
            </div>
            <div class="image">
              <img src="../assets/images/choose2.webp" alt="chooseimg" />
            </div>
          </div>
          <div class="value">
            <div class="image">
              <img src="../assets/images/choose3.webp" alt="chooseimg" />
            </div>
            <div class="text">
              <h3>Collaboration</h3>
              <p>
                Great software is built through collaboration, and we believe
                that working closely with our clients is key to achieving
                outstanding results. From day one, we foster a partnership
                mindset, where your insights, ideas, and feedback are integral
                to the development process. We embrace agile methodologies,
                allowing us to adapt and refine solutions based on your evolving
                needs. We see ourselves as an extension of your team, working
                hand-in-hand with you to ensure that every detail is perfected,
                every goal is met, and every challenge is overcome. By
                collaborating closely, we can ensure that the final product is
                not only aligned with your vision but is delivered on time and
                within budget.
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
          group of skilled professionals, we bring together a wealth of
          experience and passion for technology. Whether it's innovative web
          development, intuitive UI/UX design, or groundbreaking AI solutions,
          our team collaborates closely to turn your ideas into reality. We're
          not just problem solvers—we're partners in your success
        </p>
        <!-- <div class="team-members">
          <img src="../assets/images/TeamImage1.svg" alt="" />
          <img src="../assets/images/TeamImage2.svg" alt="" />
          <img src="../assets/images/TeamImage1.svg" alt="" />
          <img src="../assets/images/TeamImage2.svg" alt="" />
        </div>
        <div class="mobile-team-section">
          <div class="icons">
            <img src="../assets/images/left-icon.svg" alt="left" @click="showPreviousImage">
            <img src="../assets/images/right-icon.svg" alt="right" @click="showNextImage">
          </div>
          <div class="mobile-team-members">
            <img :src="mobileTeamMembers[currentImageIndex]" alt="Team Member" />
          </div>
        </div> -->
      </div>

      <!-- Contact -->
      <div class="contact">
        <div><img src="../assets/images/TTS Logo-06.svg" alt="" /></div>
        <div class="buttons">
          <router-link to="/contact-us"
            ><button class="btn1">Contact us</button></router-link
          >
          <router-link to="/services"
            ><button class="btn2">Explore our services</button></router-link
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

import member1 from "@/assets/images/mobile-team-member1.svg";
import member2 from "@/assets/images/mobile-team-member2.svg";
import member3 from "@/assets/images/mobile-team-member1.svg";
import member4 from "@/assets/images/mobile-team-member2.svg";

const mobileTeamMembers = [member1, member2, member3, member4];

// Reactive variable to keep track of the current image index
const currentImageIndex = ref(0);

// Method to go to the previous image
const showPreviousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + mobileTeamMembers.length) % mobileTeamMembers.length;
};

// Method to go to the next image
const showNextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % mobileTeamMembers.length;
};
</script>

<style scoped>
@import "../assets/views-styles/about.css";
</style>

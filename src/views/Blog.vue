<template>
  <div id="blog">
    <MobileNav />
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
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link class="blog-link" to="/blog">Blog</router-link>
      </div>
      <router-link to="/contact-us"
        ><button>Get in touch with us</button></router-link
      >
    </nav>
    <hr />

    <!-- Hero -->
    <div class="hero">
      <h1>Blog</h1>
      <p>
        Welcome to the Trailblazing Technology Solutions blog! Here, you'll find
        the latest news, insights, and updates on all things tech. From industry
        trends and best practices to tips and tricks for developers, our blog is
        your go-to resource for staying informed and inspired.
      </p>
    </div>

    <!-- Blog Posts -->
    <div class="blog-container">
      <h2>Recent blog post</h2>
      <div class="blog-section">
        <div class="top-section">
          <div class="blog-post">
            <div class="blog-image">
              <img src="../assets/images/blog-image.svg" alt="blog-image" />
            </div>
            <div class="blog-text">
              <h3>
                How AI is Transforming User Experience: Enhancing
                Personalization and Predictive Design"
              </h3>
              <p>
                Explore how artificial intelligence is revolutionizing the field
                of user experience design by enabling highly personalized
                interfaces and predictive design elements.
              </p>
              <div class="author-details">
                <img src="../assets/images/authorImg.svg" alt="">
                <div class="author">
                    <p>Lana Steve</p>
                    <img src="../assets/images/Ellipse36.svg" alt="">
                    <p>19 Jan 2022</p>
                </div>
              </div>
              <!-- <router-link to="/blog-post">Read more</router-link> -->
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="blog-image"></div>
        </div>
      </div>
    </div>
    <FooterComponent />


  </div>
</template>

<script setup lang="ts">
import MobileNav from "../components/MobileNav.vue";
import FooterComponent from "../components/FooterComponent.vue";    

</script>

<style scoped>
@import "../assets/views-styles/blog.css";
</style>

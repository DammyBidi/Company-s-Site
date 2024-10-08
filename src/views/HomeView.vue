<template>
  <div class="home">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link  to="/"><img src="../assets/images/navlogo.svg" alt=""></router-link>
          <!-- <img src="../assets/images/TTS Logo.svg" alt="" />
          <div>
            <h3>Trailblazing</h3>
            <p>TECHNOLOGY SOLUTIONS</p>
          </div> -->
        </div>
        <div class="nav-links">
          <router-link class="home-link" to="/">Home</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
        <router-link to="/contact-us"
          ><button>Get in touch with us</button></router-link
        >
      </nav>
      <hr />
    </div>

    <div :class="{ blurred: isNavOpen }">
      <div class="hero">
        <p class="glowing-button">Welcome to trailblazing</p>
        <h1>Engineering Excellence,<br />Fueling Innovation.</h1>
        <p class="paragraph">
          At Trailblazing, we push the boundaries of technology, crafting
          tailored software solutions that drive your business forward. Our team
          of experts harnesses cutting-edge technologies and innovative thinking
          to deliver exceptional, user-focused experiences. Let's create
          something extraordinary together
        </p>
        <div class="join-us">
          <img src="../assets/images/buttonimg.svg" alt="" />
          <p>Join us today</p>
        </div>
        <div class="buttons">
          <router-link to="/contact-us"
            ><button class="btn1">Get Started</button></router-link
          >
          <router-link to="/about"
            ><button class="btn2">Learn More</button></router-link
          >
        </div>
      </div>

      <div class="hero-image">
        <!-- <img src="../assets/images/hero.webp" alt="" /> -->
        <img src="../assets/images/hero.svg" alt="">
      </div>

      <div class="mobile-hero-image">
        <img src="../assets/images/mobile-hero-image.svg" alt="" />
      </div>

      <!-- Our services -->

      <div class="services">
        <h3>Our Services</h3>
        <p>
          At Trailblazing, we offer a comprehensive suite of services designed
          to empower your business in the digital age. Whether you need a
          responsive website, a seamless user experience, or cutting-edge AI
          solutions, our expert team is dedicated to delivering results that
          drive success and innovation. We partner with you every step of the
          way to turn your ideas into impactful digital solutions
        </p>
        <div class="service-cards">
          <div class="service-card">
            <div>
              <img src="../assets/images/web-dev.svg" alt="" />
              <h4>Web Development</h4>
            </div>
            <p>
              Build robust, scalable, and secure websites that deliver
              exceptional performance and seamless user experiences. Our web
              development team combines the latest technologies with industry
              best practices to create digital solutions that grow with your
              business
            </p>
          </div>
          <div class="service-card">
            <div>
              <img src="../assets/images/mobile-dev.svg" alt="" />
              <h4>Mobile app development</h4>
            </div>
            <p>
              Design experiences that resonate with your users. Our UI/UX design
              services focus on creating interfaces that are not only visually
              stunning but also intuitive and user-friendly. We ensure that
              every interaction with your brand is meaningful and impactful.
            </p>
          </div>
          <div class="service-card">
            <div>
              <img src="../assets/images/consulting.svg" alt="" />
              <h4>Consulting</h4>
            </div>

            <p>
              Harness the power of artificial intelligence to drive innovation
              and efficiency. From machine learning models to AI-powered
              applications, our solutions are tailored to meet your specific
              needs, enabling you to stay ahead in a rapidly evolving digital
              landscape
            </p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us-->

      <div class="choose">
        <h1>Why choose us</h1>
        <div class="reasons">
          <div class="reason">
            <div class="image">
              <img src="../assets/images/choose1.svg" alt="chooseimg" />
            </div>
            <div class="text">
              <h3>Excellence</h3>
              <p>
                We combine years of experience with cutting-edge technology to
                deliver solutions that are not just functional but
                transformative. Our team stays ahead of the curve, integrating
                the latest trends in web development, UI/UX design, and AI to
                ensure that your business is always a step ahead
              </p>
            </div>
          </div>
          <div class="reason mobile-reason">
            <div class="text">
              <h3>Customer-Centric Approach</h3>
              <p>
                Your success is our mission. We prioritize understanding your
                unique needs and tailor our services to meet them. From the
                initial consultation to the final delivery, we work closely with
                you to ensure that the end product not only meets but exceeds
                your expectations
              </p>
            </div>
            <div class="image">
              <img src="../assets/images/choose2.svg" alt="chooseimg" />
            </div>
          </div>
          <div class="reason">
            <div class="image">
              <img src="../assets/images/choose3.svg" alt="chooseimg" />
            </div>
            <div class="text">
              <h3>Collaboration</h3>
              <p>
                We have a history of delivering high-quality, reliable solutions
                across various industries. Our portfolio speaks for
                itself—successful projects that have helped businesses enhance
                their digital presence, improve user engagement, and drive
                growth
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio -->
      <div class="portfolio">
        <h2>Portfolio</h2>
        <p>
          Explore our portfolio to see how we've helped businesses across
          various industries achieve their digital goals. From innovative web
          development and engaging UI/UX design to cutting-edge AI solutions,
          our work showcases the creativity, precision, and dedication we bring
          to every project. Discover how we turn ideas into impactful digital
          experiences.
        </p>
        <div class="portfolio-images">
          <div class="left">
            <img src="../assets/images/portfolio1.svg" alt="portfolio-images" />
          </div>
          <div class="right">
            <div class="right-top">
              <img
                src="../assets/images/portfolio2.svg"
                alt="portfolio-images"
              />
            </div>
            <div class="right-bottom">
              <img
                src="../assets/images/portfolio3.svg"
                alt="portfolio-images"
              />
            </div>
          </div>
        </div>
        <div class="mobile-portfolio-images">
          <img
            src="../assets/images/mobile-portfolio-image.svg"
            alt="portfolio-images"
          />
          <img
            src="../assets/images/mobile-portfolio-image.svg"
            alt="portfolio-images"
          />
          <img
            src="../assets/images/mobile-portfolio-image.svg"
            alt="portfolio-images"
          />
        </div>

        <div class="btn">
          <router-link to="/portfolio"><button>See more</button></router-link>
        </div>
      </div>

      <!-- FAQ -->
      <div class="faq-section">
        <h2>FAQs</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div class="faq-question" @click="toggle(index)">
            <span>{{ faq.question }}</span>
            <img
              :src="
                activeIndex === index ? '/chevron-up.svg' : '/chevron-down.svg'
              "
              class="faq-toggle-icon"
              alt="Toggle icon"
            />
          </div>
          <div v-if="activeIndex === index" class="faq-answer">
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- TOUCH LOGO -->

      <div class="touch">
        <img src="../assets/images/touchLogo.svg" alt="" />
      </div>

      <div class="touch-text">
        <h1>Get in Touch with Us</h1>
        <router-link to="/contact-us"
          ><button>Lets get you started</button></router-link
        >
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

interface Faq {
  question: string;
  answer: string;
}

const faqs = ref<Faq[]>([
  {
    question: "What types of projects does your company specialize in?",
    answer:
      "We offer a comprehensive suite of services, including web development, mobile app development, UI/UX design, and AI consulting. Our team of experts is dedicated to delivering solutions that drive success and innovation for your business",
  },
  {
    question: "How do you ensure the quality of your projects?",
    answer:
      "Our CEO who is a QA Engr will hit the application on concrete floor plenty number of times to ensure its durability",
  },
  {
    question: "What is your approach to customer collaboration?",
    answer:
      "We have Barister Ridwan in our team, so if dont collaborate well. You will go to jail",
  },
  {
    question: "Can you tailor your services to meet specific business needs?",
    answer:
      "Yes, we can tailor our services. Just make sure you have the money to buy 10yards of material",
  },
  {
    question: "What technologies and tools do you use in your projects?",
    answer:
      "We use the latest technologies such as spanners, hammers, nails, saw and screwdrivers",
  },
]);

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
@import "../assets/views-styles/home.css";
</style>

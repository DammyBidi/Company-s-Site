<template>
  <div class="home">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link to="/">LOGO</router-link>
        </div>
        <div class="nav-links">
          <router-link class="home-link" to="/">Home</router-link>
          <!-- <router-link to="/portfolio">Portfolio</router-link> -->
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
      <div class="hero">
        <p class="glowing-button">Welcome to Company</p>
        <h1>
          Defining Excellence,<br />
          Innovating Tomorrow
        </h1>
        <p class="paragraph">
          At Company, we push the limits of technology, creating custom
          software solutions that propel your business forward. Our expert team
          leverages cutting-edge technologies and innovative thinking to deliver
          exceptional, user-focused experiences. Let's build something
          extraordinary together.
        </p>
        <div class="join-us">
          <img src="../assets/images/buttonimg.svg" alt="button" />
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
        <img src="../assets/images/hero-image.webp" alt="hero-image" />
      </div>

      <div class="mobile-hero-image" ref="HeroImageContainer">
        <img src="../assets/images/mobile-hero-image1.webp" alt="hero-image" />
        <img src="../assets/images/mobile-hero-image2.webp" alt="hero-image" />
        <img src="../assets/images/mobile-hero-image3.webp" alt="hero-image" />
        <img src="../assets/images/mobile-hero-image4.webp" alt="hero-image" />
        <img src="../assets/images/mobile-hero-image5.webp" alt="hero-image" />
      </div>

      <!-- Our services -->

      <div class="services">
        <h3>Our Services</h3>
        <p>
          At Company, we offer a full spectrum of
          software development services designed to meet the unique needs of
          businesses across various industries. From conceptualization to
          deployment and beyond, our team is dedicated to delivering solutions
          that enhance operational efficiency, drive innovation, and support
          business growth.
        </p>
        <div class="service-cards">
          <div class="service-card">
            <div>
              <img src="../assets/images/web-dev.svg" alt="icon" />
              <h4>Web Development</h4>
            </div>
            <p>
              We develop dynamic, responsive, and visually appealing websites
              that align with your brand and business objectives. Our expertise
              covers everything from simple corporate websites to complex web
              applications, ensuring high performance, security, and an
              exceptional user experience.
            </p>
          </div>
          <div class="service-card">
            <div>
              <img src="../assets/images/mobile-dev.svg" alt="icon" />
              <h4>Mobile App Development</h4>
            </div>
            <p>
              Our team creates intuitive, user-friendly mobile apps for both iOS
              and Android platforms. From consumer-facing apps to enterprise
              mobile solutions, we design and develop mobile applications that
              offer seamless user experiences, high performance, and
              scalability.
            </p>
          </div>
          <div class="service-card">
            <div>
              <img src="../assets/images/consulting.svg" alt="icon" />
              <h4>Consulting</h4>
            </div>
            <p>
              Our consultation services are designed to provide you with expert
              guidance throughout the entire software development lifecycle—from
              initial planning to post-launch optimization. We help you make
              informed decisions, streamline your processes, and ensure that
              your software investments drive real results.
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
              <img src="../assets/images/choose1.webp" alt="chooseimg" />
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
          <div class="reason mobile-reason">
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
          <div class="reason">
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

      <!-- Portfolio -->
      <!-- <div class="portfolio">
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
      </div> -->

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
        <!-- <img src="../assets/images/touchLogo.webp" alt="" /> -->
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
import { ref, onMounted } from "vue";
import MobileNav from "../components/MobileNav.vue";
import FooterComponent from "../components/FooterComponent.vue";

const HeroImageContainer = ref<HTMLElement | null>(null);

const startContinuousScrolling = (
  container: HTMLElement,
  direction: "left"
) => {
  const scrollSpeed = 2;

  const content = container.innerHTML;
  container.innerHTML += content;

  const scroll = () => {
    if (direction === "left") {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }

    requestAnimationFrame(scroll);
  };

  scroll();
};

onMounted(() => {
  if (HeroImageContainer.value) {
    startContinuousScrolling(HeroImageContainer.value, "left");
  }
});

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
    question: "What services do you offer?",
    answer:
      "We offer a wide range of software development services, including custom software development, mobile app development, web development, UI/UX design, cloud solutions, quality assurance, maintenance, and support. We also provide consultation services to help you define your technology strategy and optimize your business processes.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with clients across various industries, including healthcare, finance, e-commerce, education, logistics, and more. Our team has experience delivering industry-specific solutions tailored to meet the unique needs and challenges of businesses in different sectors.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. After an initial consultation and understanding of your requirements, we provide an estimated timeline and work closely with you to ensure timely delivery. Throughout the project, we keep you informed of progress and adjust timelines as needed to ensure quality outcomes.",
  },
  {
    question: "What is your development process like?",
    answer:
      "We follow an agile development process, which emphasizes iterative progress, regular feedback, and flexibility. Our typical process includes requirement gathering, design, development, testing, and deployment, followed by ongoing support. We work closely with you at every stage to ensure that the final product meets your needs and expectations",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, we offer maintenance and support services after project completion to ensure your software continues to perform optimally. This includes bug fixes, updates, security patches, and performance monitoring to keep your system up-to-date and running smoothly.",
  },
  {
    question: "Can you help modernize our legacy systems?",
    answer:
      "Absolutely! We provide legacy system modernization services to help you upgrade outdated technology and integrate it with modern solutions. This can improve your system's performance, security, and scalability, ensuring it meets today's technological standards.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "The cost of a custom software solution depends on the scope, complexity, and specific requirements of the project. After understanding your needs, we provide a detailed proposal with cost estimates. Our pricing is transparent, and we work within your budget to deliver the best solution for your business.",
  },
  {
    question: "Do you offer consultation services before starting a project?",
    answer:
      "Yes, we offer comprehensive consultation services to help you define your project requirements, choose the right technology stack, and create a detailed roadmap. Whether you're in the early planning stages or need advice on scaling an existing project, our experts provide valuable insights to ensure a successful software development journey.",
  },
  {
    question: "How do you ensure the quality of the software you develop?",
    answer:
      "Quality is a top priority for us. We have a dedicated quality assurance (QA) team that conducts thorough testing at every stage of development. This includes functional testing, performance testing, security testing, and user acceptance testing to ensure the final product is reliable, secure, and user-friendly.",
  },
  {
    question: "How do we get started with a project?",
    answer:
      "Getting started is simple! Reach out to us through our contact form or schedule a consultation. We'll set up a meeting to understand your project goals, requirements, and timeline. From there, we’ll provide a proposal and roadmap to bring your vision to life.",
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

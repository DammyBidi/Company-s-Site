<template>
  <div id="Contact-us">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link to="/"
            ><img src="../assets/images/navlogo.svg" alt=""
          /></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <!-- <router-link to="/portfolio">Portfolio</router-link> -->
          <router-link to="/services">Services</router-link>
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
      <!-- Hero -->
      <div class="hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question about our
          services, want to collaborate on a project, or just want to say hello,
          we're here to help. Reach out to us using the form below, and we'll
          get back to you as soon as possible.
        </p>
      </div>

      <div class="contact-container">
        <div class="text">
          <h2>Get in touch with us</h2>
          <div class="info-container">
            <div>
              <img src="../assets/images/callicon.svg" alt="" />
              <p>+2348059381638</p>
            </div>
            <div>
              <img src="../assets/images/emailicon.svg" alt="" />
              <p>trailblazingtechsolutions@gmail.com</p>
            </div>
            <!-- <div>
              <img src="../assets/images/locationicon.svg" alt="" />
              <p>
                Trailblazing Technology Solutions, <br />
                123 Main Street, Lagos, Nigeria
              </p>
            </div> -->
          </div>
          <div class="socials">
            <p>Social Media</p>
            <div class="socials-icons">
              <img src="../assets/images/logo-twitter.svg" alt="" />
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61563659004858&mibextid=ZbWKwL"
                ><img src="../assets/images/logo-facebook.svg" alt=""
              /></a>
              <a
                target="_blank"
                href="https://www.instagram.com/trailblazing_tech_solutions?igsh=MTgzN212Z2FtemRzbg=="
                ><img src="../assets/images/logo-instagram.svg" alt=""
              /></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/trailblazing-technology-solutions"
                ><img src="../assets/images/logo-linkedin.svg" alt=""
              /></a>

              <a
                target="_blank"
                href="mailto:trailblazingtechsolutions@gmail.com"
                ><img src="../assets/images/logo-email.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="form">
          <h2>Send us a message</h2>
          <form @submit.prevent="submitForm">
            <div class="input">
              <label for="name">Full Name</label>
              <input
                placeholder="Fill in your full name"
                type="text"
                id="name"
                v-model="name"
                @blur="validateName"
                required
              />
              <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            </div>
            <div class="input">
              <label for="email">Email</label>
              <input
                placeholder="abu@mail.com"
                type="email"
                id="email"
                v-model="email"
                @blur="validateEmail"
                required
              />
              <p v-if="errors.email" class="error-message">
                {{ errors.email }}
              </p>
            </div>
            <div class="input">
              <label for="phonenumber">Phone Number</label>
              <input
                placeholder="+234006677755"
                type="tel"
                id="number"
                v-model="phoneNumber"
                @blur="validatePhoneNumber"
                required
              />
              <p v-if="errors.phoneNumber" class="error-message">
                {{ errors.phoneNumber }}
              </p>
            </div>
            <div class="input">
              <label for="message">Message</label>
              <textarea
                placeholder="Write your message here"
                name="message"
                id="message"
                cols="30"
                rows="10"
                v-model="message"
                @blur="validateMessage"
                required
              ></textarea>
              <p v-if="errors.message" class="error-message">
                {{ errors.message }}
              </p>
            </div>
            <div class="btn">
              <button type="submit" :disabled="isSubmitting || hasErrors">
                {{ isSubmitting ? "Submitting..." : "Send Message" }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import MobileNav from "../components/MobileNav.vue";
import FooterComponent from "../components/FooterComponent.vue";

const isNavOpen = ref(false);
const name = ref("");
const email = ref("");
const phoneNumber = ref("");
const message = ref("");
const errors = ref({
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
});
const isSubmitting = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};

const hasErrors = computed(() =>
  Object.values(errors.value).some((error) => error !== "")
);

const validateName = () => {
  errors.value.name = name.value.trim() === "" ? "Name is required." : "";
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.value.email = emailRegex.test(email.value)
    ? ""
    : "Please enter a valid email address.";
};

const validatePhoneNumber = () => {
  const phoneRegex = /^\+?\d{10,15}$/;
  errors.value.phoneNumber = phoneRegex.test(phoneNumber.value)
    ? ""
    : "Enter a valid phone number with country code.";
};

const validateMessage = () => {
  errors.value.message =
    message.value.trim() === "" ? "Message cannot be empty." : "";
};

const focusFirstErrorField = () => {
  if (errors.value.name) document.getElementById("name")?.focus();
  else if (errors.value.email) document.getElementById("email")?.focus();
  else if (errors.value.phoneNumber) document.getElementById("number")?.focus();
  else if (errors.value.message) document.getElementById("message")?.focus();
};

const validateForm = () => {
  validateName();
  validateEmail();
  validatePhoneNumber();
  validateMessage();
  if (hasErrors.value) focusFirstErrorField();
};

const submitForm = async () => {
  validateForm();

  if (hasErrors.value) {
    toast.error("Please correct the errors before submitting.");
    return;
  }

  isSubmitting.value = true;
  try {
    const response = await fetch(
      "https://trailblazing-backend-1.onrender.com/api/v1/contact-us",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          message: message.value,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
    const errorMessage = errorData.message || "Failed to send message";
    throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log("Message sent successfully:", data);
    toast.success("Your message has been sent successfully!");

    name.value = "";
    email.value = "";
    phoneNumber.value = "";
    message.value = "";
    errors.value = { name: "", email: "", phoneNumber: "", message: "" };
  } catch (error) {
    console.error("Error:", error);
    toast.error("There was an error sending your message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@import "../assets/views-styles/contact-us.css";
</style>

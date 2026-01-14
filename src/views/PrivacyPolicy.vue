<template>
  <div id="privacy-policy">
    <div class="nav-container">
      <MobileNav @menuState="handleMenuState" />
      <nav>
        <div class="logo">
          <router-link to="/"
            ><img src="../assets/images/logo1.png" alt="Excechen Systems Logo"
          /></router-link>
        </div>
      </nav>
    </div>

    <div :class="{ blurred: isNavOpen }">
      <div class="privacy-policy-container">
        <div class="sidebar">
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#information">Information we collect</a></li>
            <li><a href="#usage">How we use your information</a></li>
            <li><a href="#sharing">Sharing your information</a></li>
            <li><a href="#security">Data security</a></li>
            <li><a href="#rights">Your Rights</a></li>
            <li><a href="#third-Party">Third-Party Links</a></li>
            <li>
              <a href="#changes-to-this-privacy-policy"
                >Changes To This Privacy Policy</a
              >
            </li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <main class="content">
          <section id="introduction">
            <h3>Privacy Policy</h3>
            <h1>
              At Excechen Systems, we value your privacy and
              are committed to protecting your data. This Privacy Policy
              explains how we collect, use, and safeguard the information you
              provide. You agree to the practices described in this policy by
              using our website and services.
            </h1>
          </section>

          <section id="information">
            <h2>1. Information we collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                Personal Information: Your name, email address, phone number,
                and other contact details when you submit forms, request
                consultations, or sign up for newsletters.
              </li>
              <li>
                Usage Data: Information such as your IP address, browser type,
                and browsing patterns when visiting our website.
              </li>
              <li>
                Cookies: We use cookies and similar tracking technologies to
                improve your user experience. You can control cookie preferences
                in your browser settings.
              </li>
            </ul>
          </section>

          <section id="usage">
            <h2>2. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services.</li>
              <li>Respond to your inquiries and requests.</li>
              <li>Send marketing communications (with your consent).</li>
              <li>Analyze usage patterns and improve website functionality.</li>
              <li>
                Comply with legal obligations and protect our legal rights.
              </li>
            </ul>
          </section>

          <section id="sharing">
            <h2>3. Sharing your information</h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your data:
            </p>
            <ul>
              <li>
                With trusted third-party service providers who assist us in
                delivering our services (e.g., hosting providers, payment
                processors).
              </li>
              <li>
                When required by law or to protect the rights, property, or
                safety of our company, employees, or others.
              </li>
            </ul>
          </section>

          <section id="security">
            <h2>4. Data security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse. However, no online transmission of data is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="rights">
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>
                Withdraw consent where we rely on your consent to process
                personal data.
              </li>
              <li>Request a copy of the data we hold about you.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              <a href="mailto:excechen@gmail.com">excechen@gmail.com</a>
            </p>
          </section>

          <section id="third-Party">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices or content of these sites.
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section id="changes-to-this-privacy-policy">
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the revised date. Please review
              this page periodically to stay informed about how we protect your
              information
            </p>
          </section>

          <section id="contact">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at <a href="mailto:excechen@gmail.com">excechen@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "../components/MobileNav.vue";

const isNavOpen = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};
</script>

<style scoped>
@import "../assets/views-styles/privacy.css";
</style>

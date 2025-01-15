<!-- AdminLogin.vue -->
<template>
  <div class="main">
    <nav>
      <img src="/src/assets/images/logo.svg" alt="" />
    </nav>
    <div class="body">
      <div class="form-container">
        <form @submit.prevent="handleLogin">
          <div class="input-container">
            <label for="email">Email</label>
            <input
              placeholder="daha@gmail.com"
              type="email"
              id="email"
              name="email"
              v-model="email"
              required
            />
          </div>
          <div class="input-container">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="password"
              required
            />
          </div>
          <div class="check">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              v-model="rememberMe"
            />
            <label for="remember">Remember me</label>
          </div>
          <button type="submit" :disabled="loading">
            {{ loading ? "Logging in..." : "Login" }}
          </button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
// import { jwtDecode } from "jwt-decode";


const router = useRouter();
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const loading = ref(false);
const errorMessage = ref("");

const loginUrl =
  "https://trailblazing-backend-1.onrender.com/api/v1/admin/login";

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = "";

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errorMessage.value = "Please enter a valid email address.";
    loading.value = false;
    return;
  }

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const result = await response.json();
    console.log("API Response:", result); // Debugging the response

    if (!response.ok) {
      throw new Error(result.message || "An unexpected error occurred.");
    }


    // Extract the token
    const { token, admin } = result.data || {};
    const { name, email: userEmail } = admin || {};
    const role = admin?.role?.toLowerCase();
    // const token = result.data?.token;
    // const role = result.data?.admin?.role;

    if (!token || !role) {
      throw new Error("Invalid response from the server.");
    }

    // if (!token || typeof token !== "string") {
    //   throw new Error("Invalid token received from the server.");
    // }

    // if (!role || typeof role !== "string") {
    //   throw new Error("Invalid role received from the server.");
    // }

    // Save token securely
    const storage = rememberMe.value ? localStorage : sessionStorage;
    storage.setItem("authToken", token);
    storage.setItem("userRole", role);
    storage.setItem("userName", name);
    storage.setItem("userEmail", userEmail);

    router.push({ name: "admin-overview" });
  } catch (error: any) {
    errorMessage.value = error.message || "Login failed. Please try again.";
    console.error("Login Error:", error); // Debugging error handling
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>
@import "/src/admin/assets/views-styles/login.css";
</style>

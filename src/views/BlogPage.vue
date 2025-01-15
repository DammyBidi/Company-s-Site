<template>
  <div id="blog">
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
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link class="blog-link" to="/blog-page">Blog</router-link>
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
        <h1>Blog</h1>
        <p>
          Welcome to the Trailblazing Technology Solutions blog! Here, you'll
          find the latest news, insights, and updates on all things tech. From
          industry trends and best practices to tips and tricks for developers,
          our blog is your go-to resource for staying informed and inspired.
        </p>
      </div>

      <!-- Blog Posts -->
      <div class="blog-container">
        <h2>Recent blog post</h2>
        <div class="blog-grid">
          <div
            v-for="blog in filteredBlogs"
            :key="blog._id"
            class="blog-card"
            @click="
              $router.push({ name: 'blog-details', params: { id: blog._id } })
            "
          >
            <div class="card-header">
              <img
                class="thumbnail"
                :src="blog.thumbnailUrl || blog.imageUrl || thumbnailImage"
                alt="Blog Thumbnail"
              />
            </div>
            <div class="card-body">
              <h2>{{ blog.title }}</h2>
              <p>By {{ blog.author }} • {{ formatDate(blog.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import MobileNav from "../components/MobileNav.vue";
import thumbnailImage from "../admin/assets/images/thumbnailimage.svg";
import FooterComponent from "../components/FooterComponent.vue";

interface Blog {
  _id: string;
  title: string;
  author: string;
  imageUrl: string; // Updated: Fetches `image` field
  thumbnailUrl: string; // Updated: Fetches `thumbnail` field
  createdAt: string;
}

const blogs = ref<Blog[]>([]);
const filteredBlogs = ref<Blog[]>([]);
const toast = useToast();

const isNavOpen = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};

const fetchBlogs = async () => {
  try {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const response = await fetch(
      "https://trailblazing-backend-1.onrender.com/api/v1/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("Fetched blogs response:", data); // Inspect the API response here
    if (data.success) {
      blogs.value = data.data; // Assuming the API returns blogs in `data.data`
      filteredBlogs.value = blogs.value;
      console.log("Fetched blogs:", blogs.value);
    } else {
      toast.error("Failed to fetch blogs: " + data.message);
      console.error("Failed to fetch blogs:", data.message);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    toast.error("An error occurred while fetching blogs. Please try again.");
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped>
@import "../assets/views-styles/blog.css";
</style>

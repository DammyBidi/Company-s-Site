<template>
  <div id="blog-body">
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
      <div class="nav-back">
        <router-link to="/blog-page" class="back-link"><img src="../assets/images/arrow.svg" alt="" srcset=""></router-link>
        <h2>SyncBoard</h2>
      </div>
      <div class="blog-container">
        <div v-if="blog" class="blog-details">
          <img
            :src="blog.thumbnailUrl || blog.imageUrl || thumbnailImage"
            alt="Blog Image"
            class="header-image"
          />
          <h1>{{ blog.title }}</h1>
          <p class="meta">
            By {{ blog.author }} • {{ formatDate(blog.createdAt) }} •
            {{ blog.readTime || "5 mins read" }}
          </p>
          <div class="blog-content" v-html="blog.content"></div>
        </div>

        <div v-if="blog" class="comment-section">
          <h3>Leave a comment</h3>
          <textarea
            v-model="newComment"
            placeholder="Type your comment here"
            rows="10"
          ></textarea>
          <div class="button"><img @click="submitComment" src="../assets/images/button.svg" alt="" srcset=""></div>
         

          <div class="comments">
            <div
              v-for="comment in blog.comments"
              :key="comment.id"
              class="comment"
            >
              <p>
                <strong>{{ comment.user }}</strong> •
                {{ formatDate(comment.date) }}
              </p>
              <p>{{ comment.text }}</p>
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
import { useRoute } from "vue-router";
import MobileNav from "../components/MobileNav.vue";
import FooterComponent from "../components/FooterComponent.vue";
import thumbnailImage from "../admin/assets/images/thumbnailimage.svg";

interface Blog {
  title: string;
  author: string;
  imageUrl: string;
  thumbnailUrl: string;
  content: string;
  createdAt: string;
  readTime: string;
  comments: { id: string; user: string; text: string; date: string }[];
}

const isNavOpen = ref(false);

const handleMenuState = (state: boolean) => {
  console.log("Nav state received:", state);
  isNavOpen.value = state;
};

const route = useRoute();
const blog = ref<Blog | null>(null);
const newComment = ref<string>("");
const errorMessage = ref<string>("");

const fetchBlogDetails = async (blogId: string) => {
  try {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const response = await fetch(
      `https://trailblazing-backend-1.onrender.com/api/v1/${blogId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      blog.value = data.data; // Assuming blog data is in `data.data`
    } else {
      console.error("Failed to fetch blog:", data.message);
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
  } finally {
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const submitComment = () => {
  if (newComment.value.trim() !== "") {
    blog.value?.comments.push({
      id: Date.now().toString(),
      user: "Current User", // Replace with the logged-in user
      text: newComment.value.trim(),
      date: new Date().toISOString(),
    });
    newComment.value = "";
  }
};

onMounted(() => {
  const blogId = route.params.id as string;
  if (blogId) fetchBlogDetails(blogId);
  else errorMessage.value = "Blog ID not found.";
});
</script>

<style scoped>
@import "../assets/views-styles/blog-details.css";
</style>

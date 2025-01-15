<!-- CreateBlog.vue -->
<template>
  <div class="main">
    <nav>
      <h1>Create New Blog</h1>
    </nav>
    <div class="body">
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="input-container">
            <label for="title">Title</label>
            <input
              v-model="blogData.title"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div class="form-group">
            <div class="input-container">
              <label for="author">Name of the Author</label>
              <input
                v-model="blogData.author"
                type="text"
                id="author"
                name="author"
                required
              />
            </div>
            <div class="input-container">
              <label for="tag">Tag</label>
              <input
                v-model="blogData.tag"
                type="text"
                id="tag"
                name="tag"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="image-container">
              <img :src="thumbnailPreview || thumbnailImage" alt="" />
              <div>
                <label for="image">Upload Thumbnail</label>
                <input
                  id="thumbnail"
                  type="file"
                  @change="(event) => handleFileUpload(event, 'thumbnail')"
                />
              </div>
            </div>
            <div class="image-container">
              <img :src="imagePreview || avatarImage" alt="hello" />
              <div>
                <label for="image">Upload Image</label>
                <input 
                  id="image" 
                  type="file" 
                  @change="(event) => handleFileUpload(event, 'image')" 
                />
              </div>
            </div>
          </div>
          <div class="input-container">
            <label for="content">Type your Blog here</label>
            <textarea
              v-model="blogData.content"
              id="content"
              name="content"
              cols="30"
              rows="15"
              required
            ></textarea>
          </div>

          <div class="form-actions">
            <button class="btn1" type="button">Draft</button>
            <button class="btn2" type="button" >Cancel</button>
            <button class="btn3" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? "Posting..." : "Post" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import avatarImage from "../assets/images/avatar2.svg";
import thumbnailImage from "../assets/images/thumbnail.svg";

interface BlogData {
  title: string;
  author: string;
  tag: string;
  content: string;
  thumbnailUrl: string;
  imageUrl: string;
}

// API Response interface
interface ApiResponse {
  data: {
    url: string;
  };
  success: boolean;
  message: string;
}

// Constants
const API_URLS = {
  upload: "https://trailblazing-backend-1.onrender.com/api/v1/upload",
  createBlog: "https://trailblazing-backend-1.onrender.com/api/v1/blog-post",
};


const blogData = ref<BlogData>({
  title: "",
  author: "",
  tag: "",
  content: "",
  thumbnailUrl: "",
  imageUrl: "",
});

const thumbnailPreview = ref<string | null>(null);
const imagePreview = ref<string | null>(null);
const isSubmitting = ref<boolean>(false); // Tracks the submission state

const toast = useToast(); // Initialize the toast instance

// Unified File Upload Handler
const handleFileUpload = async (event: Event, type: "thumbnail" | "image") => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const previewUrl = URL.createObjectURL(file);
    if (type === "thumbnail") thumbnailPreview.value = previewUrl;
    else imagePreview.value = previewUrl;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
      const response = await fetch(API_URLS.upload, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data: ApiResponse = await response.json();
      if (data.success && data.data?.url) {
        if (type === "thumbnail") blogData.value.thumbnailUrl = data.data.url;
        else blogData.value.imageUrl = data.data.url;
        toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} uploaded successfully!`);
      } else {
        throw new Error(data.message || "Unknown error occurred during upload.");
      }
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
      toast.error(`Failed to upload ${type}. Please try again.`);
    }
  }
};

const handleSubmit = async () => {
  // if ( !blogData.value.imageUrl) {
  //   alert("Please upload both thumbnail and image.");
  //   return;
  // }
  
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  if (!token) {
    toast.error("You must log in first.");
    console.error("Token not found in localStorage or sessionStorage.");
    window.location.href = "/admin/login";
    return;
  }

  isSubmitting.value = true; // Set to true when submission starts
  try {
    const response = await fetch(
      API_URLS.createBlog,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogData.value),
      }
    );

    if (response.status === 401) {
      toast.error("Your session has expired. Please log in again.");
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
      window.location.href = "/admin/login";
      return;
    }

    if (!response.ok) throw new Error("Failed to create blog post");

    const data: ApiResponse = await response.json();
    if (data.success) {
      toast.success("Blog post created successfully!");
   
      // Reset the form fields and previews
      blogData.value = {
        title: "",
        author: "",
        tag: "",
        content: "",
        thumbnailUrl: "",
        imageUrl: "",
      };
      thumbnailPreview.value = null;
      imagePreview.value = null;
    } else {
      throw new Error(data.message || "Unknown error");
    }
  } catch (error) {
    console.error("Error creating blog post:", error);
    toast.error("Failed to create blog post. Please try again.");
  } finally {
    isSubmitting.value = false; // Reset after completion
  }
};
</script>

<style scoped>
@import "../assets/views-styles/createblog.css";
</style>

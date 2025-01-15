<!-- EditBlog.vue -->
<template>
  <div class="main">
    <nav>
      <h1>Edit Blog</h1>
    </nav>
    <div class="body">
      <div class="form-container">
        <form @submit.prevent="updateBlog">
          <div class="input-container">
            <label for="title">Title</label>
            <input
              v-model="blog.title"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div class="form-group">
            <div class="input-container">
              <label for="Name of the Author">Name of the Author</label>
              <input
                v-model="blog.author"
                type="text"
                id="Name of the Author"
                name="Name of the Author"
                required
              />
            </div>
            <div class="input-container">
              <label for="tag">Tag</label>
              <input
                v-model="blog.tag"
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
              v-model="blog.content"
              id="content"
              name="content"
              cols="30"
              rows="15"
              required
            ></textarea>
          </div>

          <div class="form-actions">
            <button class="btn1" type="button" @click="cancelEdit">
              Cancel
            </button>
            <button class="btn2" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? "Saving..." : "Save" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import avatarImage from "../assets/images/avatar2.svg";
import thumbnailImage from "../assets/images/thumbnail.svg";

interface Blog {
  title: string;
  author: string;
  tag: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  content: string;
}

const blog = ref<Blog>({
  title: "",
  author: "",
  tag: "",
  content: "",
});
const route = useRoute();
const router = useRouter();
const blogId = route.params.id as string;
const isSubmitting = ref(false);

const thumbnailPreview = ref<string | null>(null);
const imagePreview = ref<string | null>(null);

const toast = useToast();

const handleFileUpload = async (event: Event, type: "thumbnail" | "image") => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const previewUrl = URL.createObjectURL(file);
    if (type === "thumbnail") thumbnailPreview.value = previewUrl;
    else imagePreview.value = previewUrl;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");
      const response = await fetch(
        "https://trailblazing-backend-1.onrender.com/api/v1/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok && data.success) {
        if (type === "thumbnail") blog.value.thumbnailUrl = data.data.url;
        else blog.value.imageUrl = data.data.url;
        toast.success("File uploaded successfully!");
      } else {
        console.error("Failed to upload file:", data.message);
        toast.error("Failed to upload file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("An error occurred while uploading the file. Please try again.");
    }
  }
};

const fetchBlogDetails = async () => {
  try {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!token) {
      toast.error("Your session has expired. Please log in again.");
      router.push("/admin/login");
      return;
    }

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

    if (response.ok && data.success) {
      blog.value = data.data;
    } else {
      console.error("Failed to fetch blog details:", data.message);
      toast.error("Failed to fetch blog details. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
    toast.error("An error occurred while fetching blog details. Please try again.");
  }
};

const updateBlog = async () => {
  if (isSubmitting.value) return; // Prevent duplicate requests
  isSubmitting.value = true;
  try {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!token) {
      toast.error("Your session has expired. Please log in again.");
      return;
    }

    const response = await fetch(
      `https://trailblazing-backend-1.onrender.com/api/v1/edit/${blogId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog.value),
      }
    );

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success("Blog updated successfully.");
      router.push("/admin/overview"); // Redirect to the overview page
    } else {
      console.error("Failed to update blog:", data.message);
      toast.error("Failed to update the blog. Please try again.");
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    toast.error("An error occurred while updating the blog. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const cancelEdit = () => {
  router.push("/admin/overview");
};

onMounted(() => {
  fetchBlogDetails();
});
</script>

<style scoped>
@import "../assets/views-styles/editblog.css";
</style>

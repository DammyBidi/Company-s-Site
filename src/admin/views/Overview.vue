<!-- Overview.vue -->
<template>
  <div>
    <div class="blog-grid">
      <div v-for="blog in filteredBlogs" :key="blog._id" class="blog-card">
        <div class="card-header">
          <img
            class="thumbnail"
            :src="blog.thumbnailUrl || blog.imageUrl || thumbnailImage"
            alt="Blog Thumbnail"
          />
          <button class="more-options" @click="showOptions(blog._id)">
            <img src="../assets/images/option.svg" alt="" srcset="" />
          </button>
          <div v-if="selectedBlog === blog._id" class="options-menu">
            <button @click="editBlog(blog._id)">
              <div>
                <p>Edit</p>
                <img src="../assets/images/editicon.svg" alt="" />
              </div>
            </button>
            <button @click="deleteBlog(blog._id)">
              <div>
                <p>Delete</p>
                <img src="../assets/images/deleteicon.svg" alt="" />
              </div>
            </button>
          </div>
        </div>
        <div class="card-body">
          <h2>{{ blog.title }}</h2>
          <p>By {{ blog.author }} • {{ formatDate(blog.createdAt) }}</p>
        </div>
      </div>
    </div>

    <ConfirmationDialog
      v-if="isConfirmModalVisible"
      :visible="isConfirmModalVisible"
      title="Confirm Deletion"
      message="Are you sure you want to delete this blog?"
      @confirm="handleConfirmDelete"
      @cancel="isConfirmModalVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import thumbnailImage from "../assets/images/thumbnailimage.svg";
import { useToast } from "vue-toastification";
import ConfirmationDialog from "../components/ConfirmationDialog.vue";

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
const selectedBlog = ref<string | null>(null);
const searchQuery = ref<string>("");
const router = useRouter();
const toast = useToast();
const isConfirmModalVisible = ref(false);
const blogToDelete = ref<string | null>(null);

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

const filterBlogs = () => {
  filteredBlogs.value = blogs.value.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

const showOptions = (blogId: string) => {
  selectedBlog.value = selectedBlog.value === blogId ? null : blogId;
};

const editBlog = (blogId: string) => {
  // Navigate to the edit page with the blog ID
  router.push({ name: "admin-edit-blog", params: { id: blogId } });
  // window.location.href = `/edit-blog/${blogId}`;
};

const deleteBlog = async (blogId: string) => {
  blogToDelete.value = blogId;
  isConfirmModalVisible.value = true; // Open the confirmation modal
};

const handleConfirmDelete = async () => {
  if (!blogToDelete.value) return;

  try {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!token) {
      toast.error("Your session has expired. Please log in again.");
      window.location.href = "/admin/login"; // Redirect to login page
      return;
    }

    const url = `https://trailblazing-backend-1.onrender.com/api/v1/${blogToDelete.value}`; // Updated endpoint
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Delete API Response:", data); // Debugging the response
    if (response.ok && data.success) {
      blogs.value = blogs.value.filter(
        (blog) => blog._id !== blogToDelete.value
      );
      filterBlogs();
      toast.success("Blog deleted successfully.");
    } else if (response.status === 401) {
      toast.error(
        "Unauthorized. Your session may have expired. Please log in again."
      );
      window.location.href = "/admin/login"; // Redirect to login page
    } else {
      toast.error(data.message || "Failed to delete blog.");
      console.error("Failed to delete blog:", data.message);
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    toast.error("An error occurred while deleting the blog. Please try again.");
  } finally {
    isConfirmModalVisible.value = false;
    blogToDelete.value = null;
  }
};

const navigateToCreate = () => {
  window.location.href = "/create-blog";
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped>
@import "../assets/views-styles/overview.css";
</style>

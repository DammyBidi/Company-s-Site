import { useToast } from "vue-toastification";

const API_BASE_URL = "https://trailblazing-backend-1.onrender.com/api/v1";
const toast = useToast(); // Toast instance for global error handling

// Utility function to get the auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
};

// Unified API Error Handler
const handleApiError = (error: unknown): void => {
  console.error("API Error:", error);
  toast.error("Something went wrong. Please try again.");
};

// Fetch All Blogs
export const fetchBlogs = async (): Promise<any> => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("Unauthorized: Token not found");

    const response = await fetch(`${API_BASE_URL}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok && data.success) return data.data; // Assuming blogs are in `data.data`

    throw new Error(data.message || "Failed to fetch blogs");
  } catch (error) {
    handleApiError(error);
    throw error; // Re-throw the error for the caller to handle
  }
};

// Create a New Blog
export const createBlog = async (blogData: any): Promise<void> => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("Unauthorized: Token not found");

    const response = await fetch(`${API_BASE_URL}/blog-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      if (response.status === 401) throw new Error("Unauthorized: Session expired");
      const data = await response.json();
      throw new Error(data.message || "Failed to create blog post");
    }

    toast.success("Blog post created successfully!");
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Upload File
export const uploadFile = async (file: File): Promise<string> => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("Unauthorized: Token not found");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok && data.success && data.data?.url) {
      toast.success("File uploaded successfully!");
      return data.data.url; // Return the uploaded file URL
    }

    throw new Error(data.message || "Failed to upload file");
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Delete Blog
export const deleteBlog = async (blogId: string): Promise<void> => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("Unauthorized: Token not found");

    const response = await fetch(`${API_BASE_URL}/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401) throw new Error("Unauthorized: Session expired");
      const data = await response.json();
      throw new Error(data.message || "Failed to delete blog");
    }

    toast.success("Blog deleted successfully!");
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

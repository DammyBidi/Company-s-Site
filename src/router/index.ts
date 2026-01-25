import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from '../admin/routes/adminRoutes'
import HomeView from '../views/HomeView.vue'
import Services from '../views/Services.vue'
import ContactUs from '../views/ContactUs.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsService from '../views/TermsService.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogDetails from "../views/BlogDetails.vue";
import Portfolio from '@/views/Portfolio.vue'

const publicRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/terms-of-services',
    name: 'terms-of-services',
    component: TermsService,
  },
  {
    path: '/blog-page',
    name: 'blog-page',   
    component: BlogPage,
  },
  {
    path: "/blog/:id",
    name: "blog-details",
    component: BlogDetails,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...adminRoutes],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authToken =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const userRole =
    localStorage.getItem("userRole") || sessionStorage.getItem("userRole");

  const isAuthenticated = !!authToken; // Check token existence
  const isAdmin = userRole === "admin"; // Normalize role check

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      return next({ name: "admin-login" }); // Redirect to admin login
    }
    if (to.meta.isAdmin && !isAdmin) {
      return next({ name: "home" }); // Redirect non-admin users to home
    }
  }

  next();
});



export default router

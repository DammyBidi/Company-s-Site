import type { RouteRecordRaw } from 'vue-router'
// import Dashboard from '@/admin/views/Dashboard.vue'
// import Draft from '@/admin/views/Draft.vue'


export const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/admin/layouts/AdminLayout.vue'), // Admin layout
    meta: { requiresAuth: true, isAdmin: true },
    children: [
      {
        path: '',
        redirect: { name: 'admin-overview' }, // Redirects to 'overview'
      },
      {
        path: "overview",
        name: "admin-overview",
        component: () => import("../views/Overview.vue"), // Overview page
      },
      {
        path: "draft",
        name: "admin-draft",
        component: () => import("../views/Draft.vue"), // Draft page
      },
    ],
    
  },
  {
    path: '/admin/sidebar',
    component: () => import('@/admin/layouts/AdminSidebarLayout.vue'), // Layout with only sidebar
    meta: { requiresAuth: true, isAdmin: true },
    children: [
      {
        path: 'create-blog',
        name: 'admin-create-blog',
        component: () => import('../views/CreateBlog.vue'), // Create blog page
      },
      {
        path: 'edit-blog/:id',
        name: 'admin-edit-blog',
        component: () => import('../views/EditBlog.vue'), // Edit blog page
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/AdminLogin.vue'),
  },
];

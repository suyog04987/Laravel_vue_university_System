import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../views/DataPages/Index.vue'

const isAuthenticated = () => {

};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/DataPages/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/university',
      name: 'university',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DataPages/University.vue')
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: () => import('../views/DataPages/Faculty.vue')
    },
    {
      path: '/semester',
      name: 'semester',
      component: () => import('../views/DataPages/Semester.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/DataPages/Course.vue')
    },
    {
      path: '/universityView/:id',
      name: 'universityView',
      component: () => import('../views/front/Universities/University.vue')
    },
    {
      path: '/semesterView/:id',
      name: 'SemesterView',
      component: () => import('../views/front/semester/Semester.vue')
    },
    {
      path: '/materialsView/:id',
      name: 'MaterialView',
      component: () => import('../views/front/Material/Material.vue')
    }
  ]
})

export default router

const routes = [
  {
    path: "/",
    name: "home",
    component: ()=> import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/DataPages/Login.vue"),
  },
  {
    path: "/index",
    name: "index",
    meta: { requiresAuth: true },
    component: ()=> import("../views/DataPages/Index.vue"),
  },
  {
    path: "/university",
    name: "university",
    meta: { requiresAuth: true }, // This route requires authentication
    component: () => import("../views/DataPages/University.vue"),
  },
  // {
  //   path: '/university',
  //   name: 'university',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/DataPages/University.vue')
  // },
  {
    path: "/faculty",
    name: "faculty",
    meta: { requiresAuth: true },
    component: () => import("../views/DataPages/Faculty.vue"),
  },
  {
    path: "/semester",
    name: "semester",
    meta: { requiresAuth: true },
    component: () => import("../views/DataPages/Semester.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    meta: { requiresAuth: true },
    component: () => import("../views/DataPages/Course.vue"),
  },
  {
    path: "/universityView/:id",
    name: "universityView",
    component: () => import("../views/front/Universities/University.vue"),
  },
  {
    path: "/semesterView/:id",
    name: "SemesterView",
    component: () => import("../views/front/semester/Semester.vue"),
  },
  {
    path: "/materialsView/:id",
    name: "MaterialView",
    component: () => import("../views/front/Material/Material.vue"),
  },
];

export default routes;

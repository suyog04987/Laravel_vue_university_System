<template>
  <div>
    <a v-if="isSidebarVisible" class="h2" style="position: fixed; top: 10px; left: 325px; z-index: 108;"><i @click="toggleSidebar" class="bi bi-toggle-on" ></i></a>
    <a v-if="!isSidebarVisible" class="h2" style="position: fixed; top: 10px; left: 325px; z-index: 108;"><i @click="toggleSidebar" class="bi bi-toggle-off" ></i></a>
    <div v-show="isSidebarVisible" class="sidebar fs-5 fw-semibold p-5 sidebar">
      <ul class="list-unstyled components">
        <li class="mt-3"><i class="bi bi-building mx-1"></i>
          <router-link to="/university">University</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-book mx-1 mt-"></i>
          <router-link to="/faculty">Faculty</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-list mx-1"></i>
          <router-link to="/semester">Semester</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-backpack-fill mx-1"></i>
          <router-link to="/courses">Courses</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-chat-square-dots-fill mx-1 "></i>
          <router-link to="/testimonial">Testimonial</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-pen mx-1"></i>
          <router-link to="/materials">Material</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-journal-bookmark mx-1"></i>
          <router-link to="/colleges">College</router-link>
        </li>
        <li class="mt-3"><i class="bi bi-people-fill mx-1"></i>
          <router-link to="/teams">Teams </router-link>
        </li>
        <li class="mt-3"><i class="bi bi-envelope-exclamation-fill mx-1"></i>
          <router-link to="/admin/feedback">Feedback</router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isSidebarVisible: true, // Controls the visibility of the sidebar
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle the visibility
    },
  },
}
</script>

<style>
.sidebar {
  position: fixed;
  top: 56px;
  left: 0;
  width: 250px;
  height: calc(100vh - 56px);
  background-color: #090325;
  /* padding: 20px; */
  z-index: 100;
  /* color: white; */
}

.sidebar ul.components li {
  margin-bottom: 10px;
}

.sidebar ul.components li a {
  color: white;
  text-decoration: none;
}

.toggle-sidebar-btn {
  position: fixed;
  top: 10px;
  /* Adjust as needed */
  left: 260px;
  /* Adjust so it's outside the sidebar */
  z-index: 101;
  /* Above the sidebar */
}
</style>
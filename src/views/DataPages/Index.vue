<template>
  <div>
    <!-- Fixed Navbar -->
    <nav class="navbar">
      <div class="container-fluid">
        <span class="navbar-brand">InternProject Dashboard</span>
        <h3 class="users-title">Users</h3>
      </div>
    </nav>

    <!-- Sidebar Component (Assumed to be fixed as well) -->
    <Sidebar />

    <!-- Main Content Area (Placeholder for demonstration) -->
    <template>
      <div class="main-content">
        <RouterView />
      </div>
    </template>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Sidebar from './Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  }
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  /* Ensure navbar is above other content */
  background-color: #0056b3;
  /* Dark blue */
  color: #ffffff;
  padding: 10px 20px;
}

.navbar-brand,
.users-title {
  background-color: #003366;
  /* Deeper blue */
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 20px;
  color: #ffffff;
}

/* Assuming Sidebar.vue has appropriate fixed positioning */
/* Example for Sidebar.vue */
.sidebar {
  position: fixed;
  top: 56px;
  /* Height of the navbar */
  left: 0;
  width: 250px;
  height: calc(100vh - 56px);
  /* Adjust height to fill screen minus navbar height */
  background-color: #004080;
  /* Consistent with navbar brand */
  color: #ffffff;
  padding: 20px;
  z-index: 100;
  /* Ensure sidebar is above other content */
}

/* Main content area styling */
.main-content {
  margin-top: 56px;
  /* Height of the navbar */
  margin-left: 250px;
  /* Width of the sidebar */
  padding: 20px;
  overflow-y: auto;
}

.container-fluid {
  display: flex;
  align-items: center;
}
</style>
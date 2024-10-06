<template>
  <div class="layout">
    <Navbar />
    <div
      class="main-wrapper"
      :class="{
        'sidebar-visible': isSidebarVisible,
        'sidebar-hidden': !isSidebarVisible,
      }"
    >
      <Sidebar
        @toggleSidebar="toggleSidebar"
        :isSidebarVisible="isSidebarVisible"
      />
      <main :class="isSidebarVisible ? 'w-80' : 'w-100'">
        <router-view></router-view>
     </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import { ref } from 'vue';

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style>

</style>

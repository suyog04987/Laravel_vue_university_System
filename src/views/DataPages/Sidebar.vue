<template>
  <div>
  <a
       v-if="isSidebarVisible"
       class="h2"
       style="position: fixed; top: 10px; left: 325px; z-index: 108"
       ><i @click="toggleSidebar" class="bi bi-toggle-on"></i
     ></a>
     <a
       v-if="!isSidebarVisible"
       class="h2"
       style="position: fixed; top: 10px; left: 325px; z-index: 108"
       ><i @click="toggleSidebar" class="bi bi-toggle-off"></i
     ></a>
    <div v-show="isSidebarVisible" class="sidebar fs-5 fw-semibold p-3">
      <div class="logo">
        <img src="../../assets/uniInfo.png" alt="Logo" />
      </div>
      <ul class="list-unstyled components">
        <li>
          <router-link
            class="px-2 py-2"
            to="/university"
            active-class="active-link"
          >
            <i class="bi bi-building"></i> University
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/faculty"
            active-class="active-link"
          >
            <i class="bi bi-person"></i> Faculty
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/semester"
            active-class="active-link"
          >
            <i class="bi bi-calendar"></i> Semester
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/courses"
            active-class="active-link"
          >
            <i class="bi bi-book"></i> Courses
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/testimonial"
            active-class="active-link"
          >
            <i class="bi bi-chat-left-quote"></i> Testimonial
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/materials"
            active-class="active-link"
          >
            <i class="bi bi-file-earmark"></i> Material
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/colleges"
            active-class="active-link"
          >
            <i class="bi bi-building"></i> College
          </router-link>
        </li>
        <li>
          <router-link class="px-2 py-2" to="/teams" active-class="active-link">
            <i class="bi bi-people"></i> Teams
          </router-link>
        </li>
        <li>
          <router-link
            class="px-2 py-2"
            to="/admin/feedback"
            active-class="active-link"
          >
            <i class="bi bi-chat-dots"></i> Feedback
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSidebarVisible: Boolean,
});

const emit = defineEmits(['toggleSidebar']);

function toggleSidebar() {
  emit('toggleSidebar'); 
}
</script>

<style>

</style>

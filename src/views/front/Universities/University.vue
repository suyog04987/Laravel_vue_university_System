<template>
  <Navbar />
  <div class="text-center">
    <h1 class="fs-1 fw-bolder text-bg-success">{{ universityData.name }} Faculty</h1>
  </div>
  <img :src="universityData.image_url" alt="" style="    margin-left: 9rem;
    width: 110rem;
    height: 37rem;">
    <div class="body">
      <h1 class="fw-bolder fs-1 m-5">{{ universityData.name }}</h1>
    </div>
    <div class="container">
      <h2 class="fw-bold fs-2 text-primary-emphasis">Overview</h2>
      <p class="fw-light fs-3 text-primary">{{ universityData.details }}</p>
    </div>
    <!-- {{ universityData.faculty }} -->
  <div class="container my-5">
    <h2 class="fw-bold fs-2 text-primary-emphasis">Bachelor's Courses</h2>
    <div v-if="universityData" class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
      <div v-for="(data, index) in universityData.faculty" :key="index"
      class="bg-secondary-subtle d-flex h2  my-2 p-3 rounded-4">
        <router-link :to="`/semesterView/${data.id}`" class="text-decoration-none">
          {{ data.name }}
        </router-link><span class=""><a :href="data.syllabusUrl" target="#" class="mx-xl-5 text-warning text-decoration-none"><i class="bi bi-download"></i>Syllabus</a></span>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { useUniversityStore } from "@/stores/university";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Footer from '../components/Footer.vue';
import Navbar from "../components/Navbar.vue";

const route = useRoute();
const universityStore = useUniversityStore();
const universityData = ref([]);

onMounted(async () => {
  try {
    const id = route.params.id;

    await universityStore.fetchUniversities(id);
    // Access the populated universities array from the store
    universityData.value = universityStore.universities;
    console.log(universityData.value);
  } catch (error) {
    console.error("Error fetching universities:", error);
  }
});
</script>
<style>
.oval-shape {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  /* Adjust based on your preference */
  padding: 40px 20px;
  /* Increased vertical padding for a more oval shape */
  margin: 0 auto;
  /* Center the oval shapes */
  border-radius: 100px / 50px;
  /* Adjusted to make it more oval */
  color: white;
  /* Text color */
  background-color: var(--primary-color);
  /* Initial background color */
  text-transform: uppercase;
  text-align: center;
}

/* Example background colors for odd and even items */
.oval-shape:nth-child(odd) {
  background-color: #3498db;
  /* Blue */
}

.oval-shape:nth-child(even) {
  background-color: #e74c3c;
  /* Red */
}
</style>

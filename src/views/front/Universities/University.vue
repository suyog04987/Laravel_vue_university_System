<template>
  <Navbar />
  <div class="bg-dark rounded-bottom-circle text-center">
    <h1 class="display-5 fw-bold text-warning">Nepal Universities</h1>
    <div class="col-lg-6 mx-auto">
      <p class="bg-dark-subtle border lead mb-4 rounded-4">
        Quickly Learn about the Universities of Nepal. And All the Faculties in
        different Universities.All the information in the courses which consist
        in the universities are also disaplayed here. Along with subject
      </p>
      <div class="d-grid d-sm-flex gap-2 justify-content-sm-center py-xxl-3">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
          Primary button
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
          Secondary
        </button>
      </div>
    </div>
  </div>
  <!-- short discription of the university and its faculities alogn with the university image  -->

  <!-- {{ universityData.faculty }} -->
  <div class="text-center my-4">
    <h1>{{ universityData.name }} Faculty</h1>
  </div>

  <div class="container my-5">
    <div v-if="universityData" class="row" data-aos="fade-up" data-aos-delay="100">
      <div v-for="(data, index) in universityData.faculty" :key="index"
        class="col-md-6 my-2 d-flex justify-content-center">
        <router-link :to="`/semesterView/${data.id}`" class="oval-shape text-decoration-none text-bg-warning">
          {{ data.name }}
        </router-link>
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
  width: 90%; /* Adjust based on your preference */
  padding: 40px 20px; /* Increased vertical padding for a more oval shape */
  margin: 0 auto; /* Center the oval shapes */
  border-radius: 100px / 50px; /* Adjusted to make it more oval */
  color: white; /* Text color */
  background-color: var(--primary-color); /* Initial background color */
  text-transform: uppercase;
  text-align: center;
}

/* Example background colors for odd and even items */
.oval-shape:nth-child(odd) {
  background-color: #3498db; /* Blue */
}

.oval-shape:nth-child(even) {
  background-color: #e74c3c; /* Red */
}
</style>

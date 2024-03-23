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
  <!-- {{ universityData.faculty }} -->
  <div class="text-center my-4">
    <h1>{{ universityData.name }} Courses</h1>
  </div>

  <div class="container my-5">
    <div
      v-if="universityData"
      class="row"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        v-for="(data, index) in universityData.faculty"
        :key="index"
        class="bg-primary-subtle my-2 border col-12 p-2 rounded-3 text-center text-decoration-underline text-uppercase"
      >
        <router-link :to="`/semesterView/${data.id}`">{{
          data.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useUniversityStore } from "@/stores/university";
import { useRoute } from "vue-router";

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

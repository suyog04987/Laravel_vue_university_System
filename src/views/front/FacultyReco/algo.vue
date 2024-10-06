<template>
    <Navbar />
    <div class="text-center">
        <h1 class="fw-bolder">Let Us Make the Right Decision For you!</h1>
        <h2>By Helping You Choose Appropriate Course</h2>
        <p class="fs-4">Based on Your Interest and Skills</p>
        <div class="d-flex justify-content-center my-4">
            <!-- vue-multiselect integration -->
            <multiselect class="form-control w-25" v-model="selectedCourse" :options="Course" :multiple="true"
                placeholder="Select one or more courses" label="name" track-by="id"></multiselect>
        </div>
        <button class="btn btn-primary mx-2" @click="sendData">Search</button>

        <h2 class="my-4">Recommended Faculty</h2>
        <div class="recommended-faculty-container">
            <ul class="recommended-faculty-list">
                <li v-for="data in recommendedFaculty" :key="data.id" class="recommended-faculty-item">
                    {{ data }}
                </li>
            </ul>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Multiselect from 'vue-multiselect';
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

// Assuming each course has 'id' and 'name' fields
const selectedCourse = ref([]); // This will hold the selected course(s)
const Course = ref([]);
const recommendedFaculty = ref([]);

const base_url = import.meta.env.VITE_API_URL;

const getCourse = async () => {
    try {
        const response = await axios.get(`${base_url}getCourses`);
        Course.value = response.data.courseData;
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

const sendData = async () => {
    try {
        const response = await axios.post(`${base_url}postRecommendation`, {
            course: selectedCourse.value
        });
        console.log(response.data);
        recommendedFaculty.value = response.data;

    } catch (error) {
        console.error(error);
        alert(error);
    }
}



onMounted(() => {
    getCourse();
});
</script>

<style scoped>
.recommended-faculty-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: -webkit-center;
}

.recommended-faculty-list {
  list-style-type: none;
  padding: 0;
}

.recommended-faculty-item {
  background-color: #0c1fff8f;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: fit-content;
}

.recommended-faculty-item:hover {
  transform: scale(1.05);
}
</style>
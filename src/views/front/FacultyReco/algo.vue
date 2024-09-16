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
        <button class="btn btn-primary mx-2">Search</button>
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

const base_url = import.meta.env.VITE_API_URL;

const getCourse = async () => {
    try {
        const response = await axios.get(`${base_url}getCourses`);
        Course.value = response.data.courseData;
        console.log(Course.value);
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

onMounted(() => {
    getCourse();
});
</script>
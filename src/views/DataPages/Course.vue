<template>
  <div>
    <h1>Add Courses</h1>
    <form @submit.prevent="formSubmit">
      <select v-model="courses.university_id" name="" id="">
        <option value="">Select universtity</option>
        <option
          :value="university.id"
          v-for="(university, index) in universityName"
          :key="index"
        >
          {{ university.name }}
        </option>
      </select>
      <br /><br />
      <!-- {{ courses.faculty_id }}
      {{ computedSemesters }} -->
      <select v-model="courses.faculty_id" name="" id="">
        <option value="">Select Faculty</option>
        <option
          v-for="(faculty, index) in computedFaculties"
          :value="faculty.id"
          :key="index"
        >
          {{ faculty.name }}
        </option></select
      ><br /><br />

      <select v-model="courses.semesters_id" name="" id="">
        <option value="">Select Semester</option>
        <option
          v-for="(semesters, index) in computedSemesters"
          :value="semesters.id"
          :key="index"
        >
          {{ semesters.semester }}
        </option></select
      ><br /><br />

      <label for="courses">courses</label>
      <input type="text" v-model="courses.name" id="course" />
      <br />
      <label for="courses">Credit Hrs.</label>
      <input type="number" v-model="courses.credit_hrs" id="course" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch, computed } from "vue";
import axios from "axios";
const universityName = ref([]);

const base_url = import.meta.env.VITE_API_URL;

const courses = reactive({
  name: "",
  university_id: "",
  faculty_id: "",
  semesters_id: "",
  credit_hrs: "",
});

const computedFaculties = computed(() => {
  if (courses.university_id) {
    return universityName.value.find(
      (university) => university.id == courses.university_id
    ).faculty;
  } else {
    return [];
  }
});
const computedSemesters = computed(() => {
  if (courses.university_id && courses.faculty_id) {
    return computedFaculties.value.find(
      (semester) => semester.id === courses.faculty_id
    ).semester;
  } else {
    return [];
  }
});

const getUniversity = async () => {
  try {
    const response = await axios.get(`${base_url}university`);
    universityName.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error is :", error);
  }
};

onMounted(() => {
  getUniversity();
});

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("name", courses.name);
  formData.append("universities_id", courses.university_id);
  formData.append("faculties_id", courses.faculty_id);
  formData.append("semesters_id", courses.semesters_id);
  formData.append("credit_hrs", courses.credit_hrs);

  try {
    await axios.post(`${base_url}courses/add`, formData);
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};
</script>

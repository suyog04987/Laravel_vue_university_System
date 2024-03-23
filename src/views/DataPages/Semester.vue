<template>
  <div>
    <h1>Add semesters</h1>
    <form @submit.prevent="formSubmit">
      <select v-model="semester.university_id" name="" id="">
        <option value="">Select universtity</option>
        <option
          :value="university.id"
          v-for="(university, index) in universityName"
          :key="index"
        >
          {{ university.name}}
        </option>
      </select>
      <br /><br />
      <select v-model="semester.faculty_id" name="" id="">
        <option value="">Select Faculty</option>
        <option
          v-for="(faculty, index) in computedFaculties"
          :value="faculty.id"
          :key="index"
        >
          {{ faculty.name }}
        </option></select
      ><br /><br />
      <label for="Semester">Semester</label>
      <input type="text" v-model="semester.name" id="Semester" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";
const universityName = ref([]);
const facultyName = ref([]);

const semester = ref({
  name: "",
  university_id: "",
  faculty_id: "",
});

const base_url = import.meta.env.VITE_API_URL;



// watch(semester, (newValue, oldValue) => {
//     try {
//     const response = await axios.get(`${base_url}faculty/${newValue.uni}`);
//     universityName.value = response.data;
//   } catch (error) {
//     console.error("Error is :", error);
//   }

const computedFaculties = computed(() => {
  if (semester.value.university_id){
    var test = universityName.value.find(
      (university) => university.id == semester.value.university_id
    );
    return test.faculty;
    }
  else{ return [];
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
  formData.append("semester", semester.value.name);
  formData.append("universities_id", semester.value.university_id);
  formData.append("faculties_id", semester.value.faculty_id);
  try {
    await axios.post(`${base_url}semester/add`, formData);
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};





</script>

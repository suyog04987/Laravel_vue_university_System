<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Faculty add</h5>
      <form @submit.prevent="formSubmit">
        <select v-model="faculty.university_id" name="" id="">
          <option value="">Select one</option>
          <option
            :value="university.id"
            v-for="(university, index) in universityName"
            :key="index"
          >
            {{ university.name }}
          </option>
        </select>
        <label for="faculty">Faculty</label>
        <input type="text" v-model="faculty.name" id="faculty" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const universityName = ref([]);
const base_url = import.meta.env.VITE_API_URL;

const faculty = ref({
  name: "",
  university_id: "",
});

const getUniversity = async () => {
  try {
    const response = await axios.get(`${base_url}university`);
    universityName.value = response.data;
  } catch (error) {
    console.error("Error is :", error);
  }
};
onMounted(() => {
  getUniversity();
});

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("name", faculty.value.name);
  formData.append("universities_id", faculty.value.university_id);

  try {
    await axios.post(`${base_url}faculty/add`, formData);
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};
</script>

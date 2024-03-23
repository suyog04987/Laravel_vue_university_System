<template>
    <div>
        <form @submit.prevent="formSubmit">
            <label  for="">University Name</label>
            <input v-model="universityName.name" type="text" placeholder="Enter University name">

            <br>
            <label  for="">University Details</label>
            <input v-model="universityName.details" type="text" placeholder="Brief about University">
            <br>
            <label  for="">University Address</label>
            <input v-model="universityName.address" type="text" placeholder="University Address">

            <button type="submit">Save</button>
        </form>
    </div>

    
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const universityName = reactive({
    'name':"",
    'details':"",
    'address':"",
});
const base_url = import.meta.env.VITE_API_URL

const formSubmit = async () => {
    const formData = new FormData();
    formData.append('name', universityName.name);
    formData.append('details', universityName.details);
    formData.append('address', universityName.address);
    console.log(formData);

    try {
        await axios.post(`${base_url}university/add`, formData);
        // Handle successful response if needed
    } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
    }
};
</script>
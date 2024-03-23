<template>
  <div>
    <Navbar/>
    <Crousel/>
    <Card :name="universityName.value"/>
    
  </div>
  
</template>

<script setup>
// import { router } from 'vue-router';
import Navbar from './front/components/Navbar.vue';
import Crousel from './front/components/Crousel.vue';
import Card from './front/components/Card.vue'
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const base_url = import.meta.env.VITE_API_URL;



const universityName = reactive([]);

const getUniversity = async () => {
  try {
    const response = await axios.get(`${base_url}university`);
    universityName.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error is :", error);
  }
};

onMounted(()=>{
  getUniversity();
});


</script>
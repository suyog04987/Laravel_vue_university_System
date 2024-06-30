<template>
  <Navbar />
  <h1 class="text-center fw-bolder fs-1">All The Universities In Nepal</h1>
    <div class="container mt-4">
      <div class="card" v-for="(data, index) in universityName.value " :key="index">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="data.image_url" class="img-fluid rounded-start" :alt="data.name">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bolder">{{ data.name }}</h5>
              <p class="card-text"><small class="text-muted">Nepal | {{ data.address }}</small></p>
              <p class="card-text">
                <span class="badge bg-warning text-dark">#{{ data.rank }} in Best Universities in Nepal</span>
              </p>
              <p class="card-text">
                <strong>Enrollment:</strong> {{ data.enrollment_number}}
              </p>
              <p class="card-text">
                {{ data.details }}
              </p>
              <router-link :to="`/universityView/${data.id}`" class="card-link">View University</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import {reactive, onMounted} from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import Footer from '../components/Footer.vue';
  import Navbar from '../components/Navbar.vue';
  
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
  
  
  
  
  <style scoped>
  .card {
    margin-bottom: 2.4rem;
    box-shadow:10px 4px 10px 5px rgb(16 225 255 / 40%);
  }
  
  .img-fluid {
    height: 100%;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .badge {
    font-size: 1rem;
  }
  
  .card-text {
    margin-bottom: 0.5rem;
  }
  
  .card-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  </style>
  
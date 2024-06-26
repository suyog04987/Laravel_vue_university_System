<template>
    <div class="container my-5">
      <h2 class="mb-4 fw-bolder" style="font-size: 55px;color: mediumblue;">Featured Colleges</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="college in colleges" :key="college.name">
          <div class="card h-100">
            <img :src="college.collegeImage" class="card-img-top" :alt="college.name">
            <div class="card-body">
              <h5 class="card-title fw-bolder fs-2 text-primary-emphasis">{{ college.name }}</h5>
              <p class="card-text text-primary"><strong style="font-size: 18px;">Location:</strong> {{ college.location }}</p>
              <p class="card-text text-primary"><strong style="font-size: 18px;">Estd:</strong> {{ college.est_date }}</p>
              <p class="card-text text-primary"><strong style="font-size: 18px;">Affiliation:</strong> {{ college.affiliation }}</p>
              <p class="card-text text-primary"><strong style="font-size: 18px;">Website:</strong> <a :href="college.website" target="_blank">{{ college.website }}</a></p>
            </div>
            <div class="card-footer bg-primary text-center text-white">
              <a :href="college.website" target="_blank" class="btn btn-link text-white">View College</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right">
       <router-link class="" to="/viewAllColleges" ><button class="btn btn-primary mt-3">View all colleges...</button></router-link>
      </div>
    </div>
  </template>
  
  <script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

    


  const base_url = import.meta.env.VITE_API_URL;
  
  const colleges = ref([]);

  const getColleges = async () => {
    try {
      const response = await axios.get(`${base_url}paginatedCollegeData`);
      colleges.value = response.data.data;
    } catch (error) {
      console.error("Error is :", error);
    }
  };

  onMounted(() => {
    getColleges();
  });

  </script>
  
  <style scoped>
  .card-footer {
    background-color: #007bff;
    border-top: none;
  }
  
  .card-footer .btn-link {
    color: #fff;
  }
  
  .card-footer .btn-link:hover {
    color: #d4d4d4;
  }
  </style>
  
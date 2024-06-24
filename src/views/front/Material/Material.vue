<template>
    <Navbar />
    <div class="container mt-5">
      <div class="row mb-4">
        <div class="col-md-12 text-center">
          <h1 class="heading">Study Materials</h1>
          <p class="lead">Access a wide range of study materials to support your learning journey.</p>
        </div>
      </div>
      
      <div class="row mb-4">
        <div class="col-md-12">
          <form class="form-inline justify-content-center">
            <input type="text" class="form-control mr-2" placeholder="Search materials..." />
            <select class="form-control mr-2">
              <option>Filter by University</option>
              <!-- Add university options here -->
            </select>
            <select class="form-control mr-2">
              <option>Filter by Course</option>
              <!-- Add course options here -->
            </select>
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
  
      <div class="row">
        <div v-for="material in materials" :key="material.id" class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">{{ material.title }}</h5>
              <p class="card-text">{{ material.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <a :href="material.downloadLink" class="btn btn-primary">Download</a>
              <div>
                <span class="badge badge-secondary">{{ material.university }}</span>
                <span class="badge badge-secondary">{{ material.course }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
  
  const materials = ref([
    {
      id: 1,
      title: 'Introduction to Computer Science',
      description: 'A comprehensive guide to the basics of computer science.',
      downloadLink: '#',
      university: 'Tribhuvan University',
      course: 'BSc Computer Science',
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      description: 'Lecture notes for advanced mathematics.',
      downloadLink: '#',
      university: 'Kathmandu University',
      course: 'BSc Mathematics',
    },
    {
      id: 3,
      title: 'Nepalese History',
      description: 'A detailed look into the history of Nepal.',
      downloadLink: '#',
      university: 'Pokhara University',
      course: 'BA History',
    },
    // Add more materials as needed
  ]);
  </script>
  
  <style scoped>
  .heading {
    background-color: #f8f9fa;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-footer .badge {
    margin-left: 5px;
  }
  </style>
  
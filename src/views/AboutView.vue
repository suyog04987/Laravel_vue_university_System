<template>
  <Navbar />
  <div class="about container-fluid mt-5">
    <div class="header text-center mb-5">
      <div class="heading-container">
        <h1 class="heading">About Our Project</h1>
      </div>
      <p class="lead">
        Welcome to our website, your ultimate destination for all the necessary information about universities in Nepal.
        We strive to provide a comprehensive guide to help you navigate through the educational opportunities available
        in Nepal. Whether you are looking for detailed insights into various universities, their syllabus, or study
        materials, we've got you covered.
      </p>
    </div>

    <div class="directors-word-section row mb-5">
      <div class="col-md-8">
        <div class="heading-container">
          <h2 class="heading">Director's Word</h2>
        </div>
        <p>
          As the director, I am committed to providing a platform that empowers students and educators alike. Our goal
          is to create an accessible and informative resource that supports the academic journey of every student in
          Nepal. We believe in the power of education to transform lives and are dedicated to making quality education
          more attainable.
        </p>
        <p>
          Our website is designed to be a one-stop solution for students seeking information about universities,
          courses, and study materials. We hope you find it useful and engaging.
        </p>
        <p>- Director Name</p>
      </div>
      <div class="col-md-4 text-center">
        <img src="" alt="Director's Photo" class="img-fluid rounded shadow" />
      </div>
    </div>

    <div class="testimonials-section">
      <div class="heading-container text-center mb-4">
        <h2 class="heading">Testimonials</h2>
      </div>
      <div class="row">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-md-4 mb-4">
          <div class="testimonial-card card h-100">
              <img :src="testimonial.imageUrl" alt="Testimonial image" class="card-img-top" style="width: 70%; height: 50%;">
            <div class="card-body">
              <p class="card-text">"{{ testimonial.content }}"</p>
            </div>
            <!-- Image section -->
            <div class="card-body">
              <h4 class="card-title text-right">- {{ testimonial.name }}</h4>
              <h4 class="card-title text-right">- {{ testimonial.position }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Footer from "../views/front/components/Footer.vue";
import Navbar from "../views/front/components/Navbar.vue";


const base_url = import.meta.env.VITE_API_URL;

const testimonials = ref([]);

const getTestimonial = async () => {
  try {
    const response = await axios.get(`${base_url}testimonial`);
    testimonials.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error is :", error);
  }
};


onMounted(() => {
  getTestimonial();
});
</script>

<style scoped>
.about {
  padding: 0 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.header {
  margin-bottom: 40px;
}

.heading-container {
  display: inline-block;
  background-color: #e9ecef;
  padding: 10px 20px;
  border-radius: 5px;
}

.heading {
  margin: 0;
  color: #2c3e50;
}

.directors-word-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.testimonials-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.testimonials-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.testimonial-card .card-title {
  color: #34495e;
}

.testimonial-card .card-text {
  color: #555;
  line-height: 1.5;
}
</style>

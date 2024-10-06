<template>
  <Navbar />
  <div class="about-container">
    <div class="header">
      <h1 style="font-size: 4rem;">About</h1>
      <h2 style="font-size: 3rem;">UniInfo</h2>
      <p>Learn Something New Today</p>
    </div>
    <div class="content">
      <div class="h2 left-section">
        <img src="../assets/uniInfo.png" alt="Saral Notes Logo" class="logo" />
        <h3>UniInfo NOTES</h3>
        <p>"Learn something new today"</p>
        <p>An educational Platform of ABC Software Innovation Company Pvt. Ltd.</p>
      </div>
      <!-- <div class="right-section">
        <img src="../assets/notebook.png" alt="Space" class="space-image" />
      </div> -->
    </div>
  </div>
  <!-- <div class="container mt-4">
    <h1 class="text-center fw-bolder" style="font-size: 4rem;">Our Team</h1>
    <p class="text-center mt-3 fs-3">Our team is dedicated to providing the best educational platform for students.</p>
  </div> -->
  <div class="container mb-5">
    <div class="text-center my-5">
      <h2 class="text-center fw-bolder" style="font-size: 4rem;">Our Teams</h2>
      <p class="text-center mt-3 fs-3">
        Duis aute irure dolor in suyog eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="row">
      <div class="bg-body-tertiary col-md-3 rounded-5 text-center m-4" v-for="member in teams" :key="member.name">
        <img :src="member.photo_url" class="rounded-circle mt-2 mb-3" :alt="member.name" width="150" height="150">
        <h5 class="fw-bolder fs-2">{{ member.name }}</h5>
        <h6>{{ member.position }}</h6>
        <p>Glavi amet ritnsi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem
          bibendum</p>
        <div class="mb-3">
          <a class=" me-3 h3" style="color: blue;" :href="member.facebook">
            <i class="bi bi-facebook m-2"></i>
          </a>
          <a class=" me-3 h3" style="color: blue;" :href="member.facebook">
            <i class="bi bi-twitter m-2"></i>
          </a>
          <a class=" me-3 h3" style="color: blue;" :href="member.facebook">
            <i class="bi bi-linkedin m-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <hr style="border-color: blueviolet; border-width: 10px; border-style: solid;">

  <div class="container mb-5">
    <div class="text-center my-5">
      <h2 class="text-center fw-bolder" style="font-size: 4rem;">Testimonial</h2>
      <p class="text-center mt-3 fs-3">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(member, index) in testimonials" :key="member.name"
          :class="{ active: index === 0 }">
          <div class="row justify-content-center">
            <div class="bg about-container col-md-8 rounded-5 text-center m-4">
              <img :src="member.imageUrl" class="rounded-circle mt-2 mb-3" :alt="member.name" width="150" height="150">
              <h5 class="fw-bolder fs-2">{{ member.name }}</h5>
              <h6>{{ member.position }}</h6>
              <p class="mb-5">{{ member.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="bg-dark carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="bg-dark carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
<hr style="border-color: blueviolet; border-width: 10px; border-style: solid;">

  <!-- Our vision  -->
  <div class="mt-5">
    <h1 class="text-center fw-bolder" style="font-size: 5rem;">Our Goal</h1>
    <div class="row m-5">
      <div class="col-md-6" >
        <h2 class="mt-4 fw-bolder text-center">Problem</h2>
        <p class="text-center mx-4 fs-5">The educational methodology implemented in Nepal is a traditional way of learning. The need and necessities
          of change in the education to facilitate the young learners are the foremost need which must be solved in a
          creative way. The students generally research themselves during their studies and classes and use it only for
          their final exams. What if it is shared among the new generation where they don’t have to start from scratch
          and find themselves in the boosted environment. Also, various training classes and solutions are restricted
          for the people who have not enough money to take classes.</p>

        <h2 class="mt-5 fw-bolder text-center">Solution</h2>
        <p class="text-center mx-4 fs-5">Being a student from Information Technology (IT Background), we developed a way of dealing with the problem
          by introducing the “UniInfo” which is an educational platform of xyz Software Innovation Company (Pvt.)
          Ltd. We have introduced a collaborative model of note sharing which is prepared by the creative students of
          different colleges in shared among themselves to create a final version which is updated in a timely basis in
          the website and app.
          Along with that, we store the various eBooks related to courses as well as create downloadable articles for a
          various extra course that are not taught in school and college. We also create video tutorials in the subject
          which are hard to understand. You can get all the notes including the handwritten notes, videos,
          presentations, slides, pdf, lab sheets, eBooks etc. based on the syllabus of courses.</p>

      </div>
      <div class="col-md-6">
        <img src="../assets/goal.jpg" alt="Students" class="img-fluid rounded-circle" style="width: 46rem; margin-left: 140px;">
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

const teams = ref([]);
const testimonials = ref([]);

const socialIcons = ref([
  { class: 'bi bi-facebook', link: '#' },
  { class: 'bi bi-instagram', link: '#' },
  { class: 'bi bi-linkedin', link: '#' }
]);

const getTeam = async () => {
  try {
    const response = await axios.get(`${base_url}teamMembers`);
    teams.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error is :", error);
  }
};
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
  getTeam();
  getTestimonial();
});

</script>

<style scoped>
.about-container {
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, #003366, #ff3366);
  padding: 20px;
}

.header {
  margin-bottom: 100px;
  font-size: xxx-large;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-section,
.right-section {
  margin: 20px;
}

.logo {
  width: 150px;
  height: auto;
}

.space-image {
  width: 200px;
  height: auto;
}

.container {
  max-width: 1200px;
}

.rounded-circle {
  object-fit: cover;
}
</style>

<template>
  <Navbar />
  <div class="bg-dark text-center">
    <h2 class="display-5 fw-bold text-warning">{{ facultyData.name }}</h2>
    <div class="col-lg-6 mx-auto">
      <p class="bg-dark-subtle border lead mb-4 rounded-4">
        Quickly Learn about the Universities of Nepal. And All the Faculties in
        different Universities.All the information in the courses which consist
        in the universities are also disaplayed here. Along with subject
      </p>
      <div class="d-grid d-sm-flex gap-2 justify-content-sm-center py-xxl-3">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
          Primary button
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
          Secondary
        </button>
      </div>
    </div>
  </div>

  <div
    class="container-fluid px-md-0 my-3 gallery-container"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div class="container">
      <div class="row" v-if="facultyData">
        <div
          class="col-lg-4 col-xl-4"
          v-for="(data, index) in facultyData.semester"
          :key="index"
        >
          <div class="card l-bg-cherry">
            <div class="card-statistic-3 p-4" style="height: 13rem">
              <!-- <div class="mb-4">
                                    <h2 class="card-title mb-0">{{ data.semester }}</h2>
                                </div> -->
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-12">
                  <h1
                    style="color: #82ff00 !important"
                    class="d-flex text-secondary align-items-center mb-0"
                  >
                    {{ data.semester }}
                  </h1>
                  <P> Click Here For Subjects</P>
                  <button class="btn btn-primary" @click="scrollToSubjects(data.id)"> Click Here!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-for="(data, index) in facultyData.semester"
    :key="index"
    class="container py-3"
  >
    <h1 class="text-capitalize">
      <span class="p-2 rounded-5">Semester {{ data.semester }}</span>
    </h1>
    <table class="table table-bordered" :id="'semesterList_' + data.id">
      <thead>
        <tr>
          <th scope="col" class="bg-info-subtle">Subjects</th>
          <th scope="col" class="bg-info-subtle" >Credit Hours</th>
          <th scope="col" class="bg-info-subtle">Full Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, indexCourse) in data.course" :key="indexCourse">
          <td class="bg-dark-subtle"><router-link :to='`/materialsView/${c.id}`'>{{c.name}}</router-link></td>
          <td class="bg-dark-subtle">{{ c.credit_hrs }}</td>
          <td class="bg-dark-subtle">100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useFacultyStore } from "@/stores/university";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const facultyStore = useFacultyStore();
const facultyData = ref([]);

onMounted(async () => {
  try {
    const id = route.params.id;

    await facultyStore.fetchFaculties(id);
    // Access the populated universities array from the store
    facultyData.value = facultyStore.faculties;
    console.log(facultyData.value);
  } catch (error) {
    console.error("Error fetching universities:", error);
  }
});



const scrollToSubjects = (index) => {
  // console.log(index);
  // Scroll to the list of courses for the clicked semester
  const semesterList = document.getElementById(`semesterList_${index}`);
  if (semesterList) {
    semesterList.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
.supporter {
  width: inherit !important;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}

.l-bg-cherry {
  background: linear-gradient(to right, #1e063e, #6764a3) !important;
  color: #fff;
}

.l-bg-blue-dark {
  background: linear-gradient(to right, #373b44, #4286f4) !important;
  color: #fff;
}

.l-bg-green-dark {
  background: linear-gradient(to right, #0a504a, #38ef7d) !important;
  color: #fff;
}

.l-bg-orange-dark {
  background: linear-gradient(to right, #a86008, #ffba56) !important;
  color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
  font-size: 110px;
}

.card .card-statistic-3 .card-icon {
  text-align: center;
  line-height: 50px;
  margin-left: 15px;
  color: #000;
  position: absolute;
  right: -5px;
  top: 20px;
  opacity: 0.1;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}

.l-bg-green {
  background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
  color: #fff;
}

.l-bg-orange {
  background: linear-gradient(to right, #f9900e, #ffba56) !important;
  color: #fff;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}
</style>

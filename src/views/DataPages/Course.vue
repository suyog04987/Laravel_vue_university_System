<template>
  <!-- table for showing courses  -->
  <div class="py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        Courses Details
      </h1>
      <button
        type="button"
        class="bg-primary-subtle btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Courses
      </button>
    </div>
    <select
      v-model="courses.university_id"
      class="form-control my-2"
      id="university"
    >
      <option value="">Select university</option>
      <option
        :value="university.id"
        v-for="(university, index) in universityName"
        :key="index"
      >
        {{ university.name }}
      </option>
    </select>
    <select v-model="courses.faculty_id" class="form-control my-2" id="faculty">
      <option value="">Select Faculty</option>
      <option
        v-for="(faculty, index) in computedFaculties"
        :value="faculty.id"
        :key="index"
      >
        {{ faculty.name }}
      </option>
    </select>
    <select
      v-model="courses.semesters_id"
      class="form-control my-2"
      id="faculty"
    >
      <option value="">Select Semester</option>
      <option
        v-for="(semester, index) in computedSemesters"
        :value="semester.id"
        :key="index"
      >
        {{ semester.semester }}
      </option>
    </select>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">Courses</th>
          <th scope="col">Credit Hrs</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(courses, index) in computedCourses" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ courses.name }}</td>
          <td>{{ courses.credit_hrs }}</td>
          <td class="d-flex px-2">
            <button
              class="btn btn-success"
              @click="openModal(courses)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Edit
            </button>
            <button
              @click="deleteCourses(courses.id)"
              class="btn btn-danger px-2 mx-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- end of table  -->
  <!-- Model for adding  -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Semester</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Add Courses</h1>
              <form @submit.prevent="formSubmit">
                <div class="form-group">
                  <label for="university">Select University</label>
                  <select
                    v-model="courses.university_id"
                    class="form-control"
                    id="university"
                  >
                    <option value="">Select university</option>
                    <option
                      :value="university.id"
                      v-for="(university, index) in universityName"
                      :key="index"
                    >
                      {{ university.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="faculty">Select Faculty</label>
                  <select
                    v-model="courses.faculty_id"
                    class="form-control"
                    id="faculty"
                  >
                    <option value="">Select Faculty</option>
                    <option
                      v-for="(faculty, index) in computedFaculties"
                      :value="faculty.id"
                      :key="index"
                    >
                      {{ faculty.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="faculty">Select Semester</label>
                  <select
                    v-model="courses.semesters_id"
                    class="form-control"
                    id="faculty"
                  >
                    <option value="">Select Semester</option>
                    <option
                      v-for="(semesters, index) in computedSemesters"
                      :value="semesters.id"
                      :key="index"
                    >
                      {{ semesters.semester }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="semesterName">Courses</label>
                  <input
                    type="text"
                    v-model="courses.name"
                    class="form-control"
                    id="semesterName"
                  />
                </div>
                <div class="form-group">
                  <label for="semesterName">Credit Hours</label>
                  <input
                    type="text"
                    v-model="courses.credit_hrs"
                    class="form-control"
                    id="semesterName"
                  />
                </div>
                <button type="submit" @click="closeModal" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- end adding  -->
  <!-- Model for editing  -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" v-show="isModalOpen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Semester</h5>
          <button
            type="button"
            @click="closeModal"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="updateForm">
                <h2 class="card-title">Edit Semester</h2>
                <div class="md-3">
                  <label for="universitySelect">University</label>
                  <select
                    class="form-control"
                    v-model="courses.university_id"
                    id="universitySelect"
                  >
                    <option value="">Select one</option>
                    <option
                      :value="university.id"
                      v-for="(university, index) in universityName"
                      :key="index"
                    >
                      {{ university.name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="faculty">Select Faculty</label>
                  <select
                    v-model="courses.faculty_id"
                    class="form-control"
                    id="faculty"
                  >
                    <option value="">Select Faculty</option>
                    <option
                      v-for="(faculty, index) in computedFaculties"
                      :value="faculty.id"
                      :key="index"
                    >
                      {{ faculty.name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="faculty">Select Semester</label>
                  <select
                    v-model="courses.semesters_id"
                    class="form-control"
                    id="faculty"
                  >
                    <option value="">Select Semester</option>
                    <option
                      v-for="(semesters, index) in computedSemesters"
                      :value="semesters.id"
                      :key="index"
                    >
                      {{ semesters.semester }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="semesterName"
                    >Courses</label
                  >
                  <input
                    v-model="courses.name"
                    id="universityName"
                    class="form-control"
                    type="text"
                    placeholder="Enter Semester"
                  />
                </div>
                <div class="mb-3">
                  <label for="semesterName">Credit Hours</label>
                  <input
                    type="text"
                    v-model="courses.credit_hrs"
                    class="form-control"
                    id="semesterName"
                  />
                </div>
                <input type="hidden" v-model="facultyID" />

                <button type="submit"  @click="closeModal" class="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="closeModal"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- end adding  -->
</template>

<script setup>
import { onMounted, ref, reactive, watch, computed } from "vue";
import axios from "axios";
const universityName = ref([]);

const base_url = import.meta.env.VITE_API_URL;

const courses = reactive({
  name: "",
  university_id: "",
  faculty_id: "",
  semesters_id: "",
  credit_hrs: "",
});

const coursesID = ref('');
const isModalOpen = ref(false);

const openModal = (id) => {
  courses.name = id.name;
  courses.university_id = id.universities_id;
  courses.faculty_id = id.faculties_id;
  courses.semesters_id = id.semesters_id;
  courses.credit_hrs = id.credit_hrs;
  coursesID.value = id.id;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const resetForm = () => {
  courses.name = "";
  courses.university_id = "";
  courses.faculty_id="";
  courses.semesters_id= "";
  courses.credit_hrs = "";
  
};

const computedFaculties = computed(() => {
  if (courses.university_id) {
    return universityName.value.find(
      (university) => university.id == courses.university_id
    ).faculty;
  } else {
    return [];
  }
});
const computedSemesters = computed(() => {
  if (courses.university_id && courses.faculty_id) {
    return computedFaculties.value.find(
      (semester) => semester.id === courses.faculty_id
    ).semester;
  } else {
    return [];
  }
});

const computedCourses = computed(() => {
  if (courses.university_id && courses.faculty_id && courses.semesters_id) {
    return computedSemesters.value.find(
      (course) => course.id == courses.semesters_id
    ).course;
  } else {
    return [];
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

const updateForm = async () => {
  const formData = new FormData();
  formData.append("name", courses.name);
  formData.append("universities_id", courses.university_id);
  formData.append("semesters_id", courses.semesters_id);
  formData.append("credit_hrs", courses.credit_hrs);
  formData.append("faculties_id", courses.faculty_id);


  try {
    const response = await axios.post(
      `${base_url}coursesUpdate/${coursesID.value}`,
      formData
    );
    alert("Update:" + response.data.message);
   getUniversity();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
    // alert("response.data.error.message");
  }
};

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("name", courses.name);
  formData.append("universities_id", courses.university_id);
  formData.append("faculties_id", courses.faculty_id);
  formData.append("semesters_id", courses.semesters_id);
  formData.append("credit_hrs", courses.credit_hrs);

  try {
   const response = await axios.post(`${base_url}courses/add`, formData);
    alert("Update:" + response.data.message);
    getUniversity();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};

const deleteCourses = async (id) => {
  try {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this university?"
    );

    if (confirmed) {
      // If user confirms, send delete request
      const response = await axios.delete(`${base_url}courseDelete/${id}`);
      getUniversity();
    } else {
      console.log("Deletion canceled by user");
    }
  } catch (error) {
    console.error("Error deleting:", error);
  }
};
</script>

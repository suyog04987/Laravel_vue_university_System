<template>
  <div class="container py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        Semester Details
      </h1>
      <button
        type="button"
        class="bg-primary-subtle btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Semester
      </button>
    </div>
    <select
      v-model="semester.university_id"
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
    <select
      v-model="semester.faculty_id"
      class="form-control my-2"
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
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">Semester</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in computedSemesters" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.semester }}</td>
          <td class="d-flex px-2">
            <button
              class="btn btn-success"
              @click="openModal(data)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Edit
            </button>
            <button
              @click="deleteSemester(data.id)"
              class="btn btn-danger px-2 mx-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

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
              <h1 class="card-title">Add Semesters</h1>
              <form @submit.prevent="formSubmit">
                <div class="form-group">
                  <label for="university">Select University</label>
                  <select
                    v-model="semester.university_id"
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
                    v-model="semester.faculty_id"
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
                  <label for="semesterName">Semester</label>
                  <input
                    type="text"
                    v-model="semester.name"
                    class="form-control"
                    id="semesterName"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
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

  <!-- Modal for editing -->
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
                    v-model="semester.university_id"
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
                    v-model="semester.faculty_id"
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
                  <label class="form-label" for="semesterName"
                    >Semester</label
                  >
                  <input
                    v-model="semester.name"
                    id="universityName"
                    class="form-control"
                    type="text"
                    placeholder="Enter Semester"
                  />
                </div>
                <input type="hidden" v-model="facultyID" />

                <button type="submit" class="btn btn-primary">Update</button>
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
</template>

<script setup>
import { onMounted, ref, watch, computed, reactive } from "vue";
import axios from "axios";
const universityName = ref([]);

const semester = ref({
  name: "",
  university_id: "",
  faculty_id: "",
});
const resetForm = () => {
  semester.value.name = "";
  semester.value.university_id = "";
  semester.value.faculty_id=""
  
};

const semesterID = ref("");

const base_url = import.meta.env.VITE_API_URL;

const isModalOpen = ref(false);

const openModal = (id) => {
  semester.value.name = id.semester;
  semester.value.university_id = id.universities_id;
  semester.value.faculty_id = id.faculties_id;
  semesterID.value = id.id;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const computedFaculties = computed(() => {
  if (semester.value.university_id) {
    var test = universityName.value.find(
      (university) => university.id == semester.value.university_id
    );
    return test.faculty;
  } else {
    return [];
  }
});

const computedSemesters = computed(() => {
  if (semester.value.university_id && semester.value.faculty_id) {
    return computedFaculties.value.find(
      (semesters) => semesters.id == semester.value.faculty_id
    ).semester;
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

const updateForm = async () => {
  const formData = new FormData();
  formData.append("semester", semester.value.name);
  formData.append("universities_id", semester.value.university_id);
  formData.append("faculties_id", semester.value.faculty_id);


  try {
    const response = await axios.post(
      `${base_url}semesterUpdate/${semesterID.value}`,
      formData
    );
    alert("Update:" + response.data.message);
    resetForm();
    window.location.reload();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
    // alert("response.data.error.message");
  }
};

onMounted(() => {
  getUniversity();
});

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("semester", semester.value.name);
  formData.append("universities_id", semester.value.university_id);
  formData.append("faculties_id", semester.value.faculty_id);
  try {
   const response = await axios.post(`${base_url}semester/add`, formData);
    alert("Update:" + response.data.message);
    resetForm();
    window.location.reload();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};

const deleteSemester = async (id) => {
  try {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this university?"
    );

    if (confirmed) {
      // If user confirms, send delete request
      const response = await axios.delete(`${base_url}semesterDelete/${id}`);
      window.location.reload();
    } else {
      console.log("Deletion canceled by user");
    }
  } catch (error) {
    console.error("Error deleting:", error);
  }
};
</script>

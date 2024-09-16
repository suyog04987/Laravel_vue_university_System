<template>
  <div class="container py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        Faculty Details
      </h1>
      <button type="button" class="bg-primary-subtle btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Faculty
      </button>
    </div>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">Faculty</th>
          <th scope="col">University</th>
          <th scope="col">Syllabus</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, indexItem) in universityName" :key="indexItem">
        <tr v-for="(data, index) in item.faculty" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.universities_id }}</td>
          <td>
            <a v-if="data.syllabus" :href="data.syllabusUrl" target="_blank" rel="noopener noreferrer"
              class="btn btn-primary">Syllabus</a>
            <a v-else href="#" class="no-data-link">No Data</a>
          </td>
          <td class="d-flex px-2">
            <button class="btn btn-success" @click="openModal(data)" data-bs-toggle="modal"
              data-bs-target="#exampleModal1">
              Edit
            </button>
            <button @click="deleteFaculty(data.id)" class="btn btn-danger px-2 mx-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Model for adding  -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Faculty</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Faculty add</h5>
              <form @submit.prevent="formSubmit">
                <div class="form-group">
                  <label for="universitySelect">University</label>
                  <select class="form-control" v-model="faculty.university_id" id="universitySelect">
                    <option value="">Select one</option>
                    <option :value="university.id" v-for="(university, index) in universityName" :key="index">
                      {{ university.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="facultyInput">Faculty</label>
                  <input type="text" class="form-control" v-model="faculty.name" id="facultyInput" />
                </div>
                <div class="form-group">
                  <label for="syllabus">Syllabus</label>
                  <input type="file" class="form-control" @change="fileSyllabus" id="syallbus" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- end adding  -->


  <!-- Modal for editing -->
  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" v-show="isModalOpen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit University</h5>
          <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="updateForm">
                <h2 class="card-title">Edit Faculty</h2>
                <div class="md-3">
                  <label for="universitySelect">University</label>
                  <select class="form-control" v-model="faculty.university_id" id="universitySelect">
                    <option value="">Select one</option>
                    <option :value="university.id" v-for="(university, index) in universityName" :key="index">
                      {{ university.name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="universityName">Faculty Name</label>
                  <input v-model="faculty.name" id="universityName" class="form-control" type="text"
                    placeholder="Enter University name" />
                  <input type="hidden" v-model="facultyID" />
                </div>
                <div class="mb-3">
                  <label for="syllabus">Syllabus</label>
                  <input type="file" class="form-control" @change="fileSyllabus" id="syllabus" />
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const universityName = ref([]);
const base_url = import.meta.env.VITE_API_URL;

const facultyID = ref("");

const syllabus = ref("");

const fileSyllabus = (e) => {
  syllabus.value = e.target.files[0];
};

const faculty = ref({
  name: "",
  university_id: "",
});

const resetForm = () => {
  faculty.value.name = "";
  faculty.value.university_id = "";

};

const isModalOpen = ref(false);

const openModal = (id) => {
  console.log(id);
  faculty.value.name = id.name;
  faculty.value.university_id = id.universities_id;
  facultyID.value = id.id;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};


const getUniversity = async () => {
  try {
    const response = await axios.get(`${base_url}university`);
    universityName.value = response.data;

  } catch (error) {
    console.error("Error is :", error);
  }
};
onMounted(() => {
  getUniversity();
});

const updateForm = async () => {
  const formData = new FormData();
  formData.append("name", faculty.value.name);
  formData.append("syllabus", syllabus.value);
  formData.append("universities_id", faculty.value.university_id);

  try {
    const response = await axios.post(
      `${base_url}facultyUpdate/${facultyID.value}`,
      formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
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

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("name", faculty.value.name);
  formData.append("syllabus", syllabus.value);
  formData.append("universities_id", faculty.value.university_id);

  try {
    const response = await axios.post(`${base_url}faculty/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("Update:" + response.data.message);
    resetForm();
    window.location.reload();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
  }
};

const deleteFaculty = async (id) => {
  try {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this university?"
    );

    if (confirmed) {
      // If user confirms, send delete request
      const response = await axios.delete(`${base_url}facultyDelete/${id}`);
      window.location.reload();
    } else {
      console.log("Deletion canceled by user");
    }
  } catch (error) {
    console.error("Error deleting:", error);
  }
};
</script>

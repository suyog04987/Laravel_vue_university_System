<template>
  <div class="py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between mb-4 ">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        University Details
      </h1>
      <button type="button" class="bg-primary-subtle btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add University
      </button>
    </div>
    <div class="top">
    <table id="tablee" class="table display">
      <thead class="thead-dark">
        <tr>
          <th class="text-center">SN</th>
          <th class="text-center">University Name</th>
          <th class="text-center">Details</th>
          <th class="text-center">Address</th>
          <th class="text-center">Rank</th>
          <th class="text-center">Enrollment</th>
          <th class="text-center">Image Url</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in universityData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.details }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.rank }}</td>
          <td>{{ data.enrollment_number }}</td>
          <td style="max-width: 200px; overflow: hidden; word-wrap: break-word">
            {{ data.image_url }}
          </td>
          <td class="">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                ...
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <button class="dropdown-item" @click="openModal(data)" data-bs-toggle="modal"
                    data-bs-target="#exampleModal1">
                    Edit
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" @click="deleteUniversity(data.id)">
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>

  <!-- Button trigger modal -->

  <!-- Modal for adding -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add University</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="formSubmit">
                <h2 class="card-title">Add University</h2>
                <div class="mb-3">
                  <label class="form-label" for="universityName">University Name</label>
                  <input v-model="universityName.name" id="universityName" class="form-control" type="text"
                    placeholder="Enter University name" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityDetails">University Details</label>
                  <input v-model="universityName.details" id="universityDetails" class="form-control" type="text"
                    placeholder="Brief about University" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityAddress">University Address</label>
                  <input v-model="universityName.address" id="universityAddress" class="form-control" type="text"
                    placeholder="University Address" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="universityAddress">University Address</label>
                  <input v-model="universityName.address" id="universityAddress" class="form-control" type="text"
                    placeholder="University Address" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="universityRank">University Rank</label>
                  <input v-model="universityName.rank" id="universityRank" class="form-control" type="number"
                    placeholder="University Rank" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl">University Enrollment Number</label>
                  <input v-model="universityName.enrollment_number" id="universityEnrollmentNumber" class="form-control"
                    type="text" placeholder="University Enrollment Number" />
                </div>

                <button type="submit" class="btn btn-primary">Save</button>
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
                <h2 class="card-title">Edit University</h2>
                <div class="mb-3">
                  <label class="form-label" for="universityName">University Name</label>
                  <input v-model="universityName.name" id="universityName" class="form-control" type="text"
                    placeholder="Enter University name" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityDetails">University Details</label>
                  <textarea v-model="universityName.details" id="universityDetails" class="form-control" type="text"
                    placeholder="Brief about University"></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityAddress">University Address</label>
                  <input v-model="universityName.address" id="universityAddress" class="form-control" type="text"
                    placeholder="University Address" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="universityRank">University Rank</label>
                  <input v-model="universityName.rank" id="universityRank" class="form-control" type="number"
                    placeholder="University Rank" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl">University Enrollment Number</label>
                  <input v-model="universityName.enrollment_number" id="universityEnrollmentNumber" class="form-control"
                    type="text" placeholder="University Enrollment Number" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl">University Image Url</label>
                  <input v-model="universityName.image_url" id="universityImageUrl" class="form-control" type="text"
                    placeholder="University Image Url" />
                  <input type="hidden" v-model="universityID" />
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

  <div class="container py-3">
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <div class="modal-content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DataTable from 'datatables.net-dt';
// import 'datatables.net-dt/css/dataTables.dataTables.css'
import { $api } from "@/services/api";
import axios from "axios";
import { nextTick, onMounted, reactive, ref } from "vue";

const isModalOpen = ref(false);
const universityID = ref("");

const openModal = (id) => {
  console.log(id);
  universityName.name = id.name;
  universityName.details = id.details;
  universityName.address = id.address;
  universityName.image_url = id.image_url;
  universityName.rank = id.rank;
  universityName.enrollment_number = id.enrollment_number;
  universityID.value = id.id;
  console.log(universityID.value);
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const universityName = reactive({
  name: "",
  details: "",
  address: "",
  image_url: "",
  rank: "",
  enrollment_number: "",
});

const resetForm = () => {
  universityName.name = "";
  universityName.details = "";
  universityName.address = "";
  universityName.image_url = "";
  universityName.rank = "";
  universityName.enrollment_number = "";
};

const base_url = import.meta.env.VITE_API_URL;

const universityData = ref();

const fetchData = async () => {
  try {
    const response = await $api('/university', {
      method: 'GET',
    });
    universityData.value = response;
    await nextTick();
    $(document).ready(function () {
      $('#tablee').DataTable();
    });
  } catch (error) {
  }
};


onMounted(() => {
  fetchData();
});

const deleteUniversity = async (id) => {
  try {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this university?"
    );

    if (confirmed) {
      // If user confirms, send delete request
      const response = await axios.delete(`${base_url}universityDelete/${id}`);
      window.location.reload();
    } else {
      console.log("Deletion canceled by user");
    }
  } catch (error) {
    console.error("Error deleting:", error);
  }
};

const updateForm = async () => {
  const formData = new FormData();
  formData.append("name", universityName.name);
  formData.append("details", universityName.details);
  formData.append("address", universityName.address);
  formData.append("image_url", universityName.image_url);
  formData.append("rank", universityName.rank);
  formData.append("enrollment_number", universityName.enrollment_number);
  console.log(formData);

  try {
    const response = await axios.post(
      `${base_url}universityUpdate/${universityID.value}`,
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

const formSubmit = async () => {
  const formData = new FormData();
  formData.append("name", universityName.name);
  formData.append("details", universityName.details);
  formData.append("address", universityName.address);
  formData.append("image_url", universityName.image_url);
  formData.append("rank", universityName.rank);
  formData.append("enrollment_number", universityName.enrollment_number);
  console.log(formData);

  try {
    await axios.post(`${base_url}university/add`, formData);
    alert("The data is inserted successfully");
    resetForm();
    // Handle successful response if needed
  } catch (error) {
    // Handle error
    console.error("Error submitting form:", error);
    // alert("response.data.error.message");
  }
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.modal-content {
  margin-bottom: 10px;
}


</style>

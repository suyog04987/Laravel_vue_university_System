<template>
    <div class="container py-3 px-2">
      <div class="d-flex d-flex justify-content-md-between">
        <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
          College Details
        </h1>
        <button
          type="button"
          class="bg-primary-subtle btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add College
        </button>
      </div>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">SN</th>
            <th scope="col">College Name</th>
            <th scope="col">Location</th>
            <th scope="col">Website</th>
            <th scope="col">Affiliation</th>
            <th scope="col">Est.Date</th>
            <th scope="col">Image </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in CollegeData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.location }}</td>
            <td>{{ data.affiliation }}</td>
            <td>{{ data.website }}</td>
            <td>{{ data.est_date }}</td>
            <td style="max-width: 150px; overflow: hidden; word-wrap: break-word">
             <img :src="data.collegeImage" alt="" style="height: 150px; ">
            </td>
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
                @click="deleteCollege(data.id)"
                class="btn btn-danger px-2 mx-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <!-- Button trigger modal -->
  
    <!-- Modal for adding -->
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
            <h5 class="modal-title" id="exampleModalLabel">Add College</h5>
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
                <form @submit.prevent="formSubmit">
                  <h2 class="card-title">Add College</h2>
                  <div class="mb-3">
                    <label class="form-label" for="college"
                      >College Name</label
                    >
                    <input
                      v-model="college.name"
                      id="college"
                      class="form-control"
                      type="text"
                      placeholder="Enter College name"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeDetails"
                      >College Location</label
                    >
                    <input
                      v-model="college.location"
                      id="CollegeDetails"
                      class="form-control"
                      type="text"
                      placeholder="Brief about College"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeWebsite"
                      >College Website</label
                    >
                    <input
                      v-model="college.website"
                      id="CollegeWebsite"
                      class="form-control"
                      type="text"
                      placeholder="College Website"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeImageUrl"
                      >College Affiliation</label
                    >
                    <input
                      v-model="college.affiliation"
                      id="CollegeImageUrl"
                      class="form-control"
                      type="text"
                      placeholder="Affiliation"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="date"
                      >College Establish Date</label
                    >
                    <input
                      v-model="college.est_date"
                      id="date"
                      class="form-control"
                      type="date"
                      placeholder="Affiliation"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="CollegeImageUrl"
                      >College  Image</label
                    >
                    <input
                      id="CollegeImageUrl"
                      class="form-control"
                      type="file"
                      placeholder="Affiliation"
                      @change="uploadImage"
                    />
                  </div>
  
                  <button type="submit" class="btn btn-primary">Save</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Edit College</h5>
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
                  <h2 class="card-title">Edit College</h2>
                  <div class="mb-3">
                    <label class="form-label" for="college"
                      >College Name</label
                    >
                    <input
                      v-model="college.name"
                      id="college"
                      class="form-control"
                      type="text"
                      placeholder="Enter College name"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeDetails"
                      >College Location</label
                    >
                    <input
                      v-model="college.location"
                      id="collegeLocation"
                      class="form-control"
                      type="text"
                      placeholder="Location of College"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeAddress"
                      >College Affiliation</label
                    >
                    <input
                      v-model="college.affiliation"
                      id="CollegeAffiliation"
                      class="form-control"
                      type="text"
                      placeholder="College Affiliation"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="CollegeAddress"
                      >College Website</label
                    >
                    <input
                      v-model="college.website"
                      id="CollegeWebsite"
                      class="form-control"
                      type="text"
                      placeholder="College Website"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="CollegeAddress"
                      >College Est.Date</label
                    >
                    <input
                      v-model="college.est_date"
                      id="CollegeEstDate"
                      class="form-control"
                      type="text"
                      placeholder="College Est Date"
                    />
                  </div>
  
                  <div class="mb-3">
                    <label class="form-label" for="CollegeImageUrl"
                      >College Image</label
                    >
                    <input
                      id="CollegeImageUrl"
                      class="form-control"
                      type="file"
                      placeholder="College Image"
                      @change="uploadImage"
                    />
                    <input type="hidden" v-model="CollegeID" />
                  </div>
  
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
  
    <div class="container py-3">
      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal">
          <div class="modal-content"></div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { $api } from "@/services/api";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
  
  const isModalOpen = ref(false);
  const CollegeID = ref("");
  
  const openModal = (id) => {
    console.log(id);
    college.name = id.name;
    college.location = id.location;
    college.affiliation = id.affiliation;
    college.est_date = id.est_date;
    college.website = id.website;
    CollegeID.value = id.id;
    console.log(CollegeID.value);
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  
  const college = reactive({
    name: "",
    location: "",
    affiliation: "",
    website: "",
    est_date: "",
  });
  
  const resetForm = () => {
    college.name = "";
    college.details = "";
    college.affiliation = "";
    college.image = "";
  };
  
  const base_url = import.meta.env.VITE_API_URL;
  
  const CollegeData = ref();
  
  const fetchData = async () => {
    try {
      const response = await $api('/college',{
        method: 'GET',
      });
      CollegeData.value = response;
    } catch (error) {
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  
  const deleteCollege = async (id) => {
    try {
      // Show confirmation dialog
      const confirmed = window.confirm(
        "Are you sure you want to delete this College?"
      );
  
      if (confirmed) {
        // If user confirms, send delete request
        const response = await axios.delete(`${base_url}collegeDelete/${id}`);
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
    formData.append("name", college.name);
    formData.append("location", college.location);
    formData.append("affiliation", college.affiliation);
    formData.append("est_date", college.est_date);
    formData.append("website", college.website);
    formData.append("image", collegeImage.value);
  
    try {
      const response = await axios.post(
        `${base_url}collegeUpdate/${CollegeID.value}`,
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
  

  const collegeImage = ref("");

const uploadImage = (e) => {
    collegeImage.value = e.target.files[0];
}

  const formSubmit = async () => {
    const formData = new FormData();
    formData.append("name", college.name);
    formData.append("location", college.location);
    formData.append("affiliation", college.affiliation);
    formData.append("est_date", college.est_date);
    formData.append("website", college.website);
    formData.append("image", collegeImage.value);
  
    try {
      await axios.post(`${base_url}college/add`,  formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    
    });
      alert("The data is inserted successfully");
      resetForm();
      window.location.reload();
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
  
    .table-bordered {
      border-color: #000 !important;
    }
  </style>
  
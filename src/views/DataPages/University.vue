<template>
  <div class="container py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        University Details
      </h1>
      <button
        type="button"
        class="bg-primary-subtle btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add University
      </button>
    </div>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SN</th>
          <th scope="col">University Name</th>
          <th scope="col">Details</th>
          <th scope="col">Address</th>
          <th scope="col">Image Url</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in universityData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.details }}</td>
          <td>{{ data.address }}</td>
          <td style="max-width: 200px; overflow: hidden; word-wrap: break-word">
            {{ data.image_url }}
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
              @click="deleteUniversity(data.id)"
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
          <h5 class="modal-title" id="exampleModalLabel">Add University</h5>
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
                <h2 class="card-title">Add University</h2>
                <div class="mb-3">
                  <label class="form-label" for="universityName"
                    >University Name</label
                  >
                  <input
                    v-model="universityName.name"
                    id="universityName"
                    class="form-control"
                    type="text"
                    placeholder="Enter University name"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityDetails"
                    >University Details</label
                  >
                  <input
                    v-model="universityName.details"
                    id="universityDetails"
                    class="form-control"
                    type="text"
                    placeholder="Brief about University"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityAddress"
                    >University Address</label
                  >
                  <input
                    v-model="universityName.address"
                    id="universityAddress"
                    class="form-control"
                    type="text"
                    placeholder="University Address"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl"
                    >University Image Url</label
                  >
                  <input
                    v-model="universityName.image_url"
                    id="universityImageUrl"
                    class="form-control"
                    type="text"
                    placeholder="University Image Url"
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
          <h5 class="modal-title" id="exampleModalLabel">Edit University</h5>
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
                <h2 class="card-title">Edit University</h2>
                <div class="mb-3">
                  <label class="form-label" for="universityName"
                    >University Name</label
                  >
                  <input
                    v-model="universityName.name"
                    id="universityName"
                    class="form-control"
                    type="text"
                    placeholder="Enter University name"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityDetails"
                    >University Details</label
                  >
                  <textarea
                    v-model="universityName.details"
                    id="universityDetails"
                    class="form-control"
                    type="text"
                    placeholder="Brief about University"
                  ></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityAddress"
                    >University Address</label
                  >
                  <input
                    v-model="universityName.address"
                    id="universityAddress"
                    class="form-control"
                    type="text"
                    placeholder="University Address"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl"
                    >University Image Url</label
                  >
                  <input
                    v-model="universityName.image_url"
                    id="universityImageUrl"
                    class="form-control"
                    type="text"
                    placeholder="University Image Url"
                  />
                  <input type="hidden" v-model="universityID" />
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
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { $api } from "@/services/api";

const isModalOpen = ref(false);
const universityID = ref("");

const openModal = (id) => {
  console.log(id);
  universityName.name = id.name;
  universityName.details = id.details;
  universityName.address = id.address;
  universityName.image_url = id.image_url;
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
});

const resetForm = () => {
  universityName.name = "";
  universityName.details = "";
  universityName.address = "";
  universityName.image_url = "";
};

const base_url = import.meta.env.VITE_API_URL;

const universityData = ref();

const fetchData = async () => {
  try {
    const response = await $api('/university',{
      method: 'GET',
    });
    universityData.value = response;
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

  .table-bordered {
    border-color: #000 !important;
  }
</style>

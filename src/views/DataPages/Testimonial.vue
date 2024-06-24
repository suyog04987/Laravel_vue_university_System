<template>
  <div class="container py-3 px-2">
    <div class="d-flex d-flex justify-content-md-between">
      <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
        Testimonial
      </h1>
      <button type="button" class="bg-primary-subtle btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Testimonial
      </button>
    </div>
    
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SN</th>
          <th scope="col"> Name</th>
          <th scope="col">Position</th>
          <th scope="col">Content</th>
          <th scope="col">Image Url</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in testimonialData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.position }}</td>
          <td>{{ data.content }}</td>
          <td style="max-width: 200px; overflow: hidden; word-wrap: break-word">
            <img :src="data.imageUrl" alt="" style="width: 100%;">
          </td>
          <td class="d-flex px-2">
            <button class="btn btn-success" @click="openModal(data)" data-bs-toggle="modal"
              data-bs-target="#exampleModal1">
              Edit
            </button>
            <button @click="deleteTestimonial(data.id)" class="btn btn-danger px-2 mx-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Button trigger modal -->

  <!-- Modal for adding -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Testimonial</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="formSubmit">
                <h2 class="card-title">Add Testimonial</h2>
                <div class="mb-3">
                  <label class="form-label" for="testimonialName">Name</label>
                  <input v-model="testimonial.name" id="testimonialName" class="form-control" type="text"
                    placeholder="Enter Testimonial's Aurthor" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="position">Position</label>
                  <input v-model="testimonial.position" id="testimonialPosition" class="form-control" type="text"
                    placeholder="Position" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="testimonialContent">Content</label>
                  <input v-model="testimonial.content" id="testimonialContent" class="form-control" type="text"
                    placeholder="Content" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="universityImageUrl"> Image</label>
                  <input id="testimonialImage" class="form-control" type="file" placeholder="Image"
                    @change="handleFileUpload" />
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
              <form @submit.prevent="updateForm" enctype="multipart/form-data" >
                <h2 class="card-title">Edit University</h2>
                <div class="mb-3">
                  <label class="form-label" for="universityName">University Name</label>
                  <input v-model="testimonial.name" id="testimonialName" class="form-control" type="text"
                    placeholder="Enter University name" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="position">Position</label>
                  <input v-model="testimonial.position" id="testimonialPosition" class="form-control" type="text"
                    placeholder="Position" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="testimonialContent">Content</label>
                  <input v-model="testimonial.content" id="testimonialContent" class="form-control" type="text"
                    placeholder="Content" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="testimonialImage">Image</label>
                  <input  id="testimonialImage" class="form-control" type="file"
                  placeholder="Image" @change="handleFileUpload" />
                  <img :src="testimonial.imageUrl" alt="" style="width: 100%;" v-if="testimonial.imageUrl">
                </div>
                <input type="hidden" v-model="TestimonialID" />

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
import { $api } from "@/services/api";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const isModalOpen = ref(false);
const TestimonialID = ref("");
const testimonialImageFile = ref(null);

const handleFileUpload = (e) => {
  testimonialImageFile.value = e.target.files[0];
}

const openModal = (id) => {
  console.log(id);
  testimonial.name = id.name;
  testimonial.position = id.position;
  testimonial.content = id.content;
  testimonialImageFile.value = id.image;
  TestimonialID.value = id.id;
  testimonial.imageUrl = id.imageUrl;
  console.log(TestimonialID.value);
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const testimonial = reactive({
  name: "",
  position: "",
  content: "",
  imageUrl: "",

});

const resetForm = () => {
  testimonial.name = "";
  testimonial.position = "";
  testimonial.content = "";
  testimonial.image = "";
};

const base_url = import.meta.env.VITE_API_URL;

const testimonialData = ref();

const fetchData = async () => {
  try {
    const response = await $api('/testimonial', {
      method: 'GET',
    });
    testimonialData.value = response;
    console.log(response);
  } catch (error) {
  }
};

onMounted(() => {
  fetchData();
});

const deleteTestimonial = async (id) => {
  try {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this?"
    );

    if (confirmed) {
      // If user confirms, send delete request
      const response = await axios.delete(`${base_url}testimonialDelete/${id}`);
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
  formData.append("name", testimonial.name);
  formData.append("position", testimonial.position);
  formData.append("content", testimonial.content);
  if (testimonialImageFile.value) {
    formData.append("image", testimonialImageFile.value); // Append the file object
  }
  try {
    const response = await axios.post(
      `${base_url}testimonialUpdate/${TestimonialID.value}`,
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
  formData.append("name", testimonial.name);
  formData.append("position", testimonial.position);
  formData.append("content", testimonial.content);
  if (testimonialImageFile.value) {
    formData.append("image", testimonialImageFile.value); // Append the file object
  }
  console.log(formData);

  try {
    await axios.post(`${base_url}testimonial/add`, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    
    });
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
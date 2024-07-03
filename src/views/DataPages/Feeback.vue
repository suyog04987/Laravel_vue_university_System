<template>
    <div class="container py-3 px-2">
      <div class="d-flex d-flex justify-content-md-between">
        <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
          feedback
        </h1>
      </div>
      
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">SN</th>
            <th scope="col"> Name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in feedbackDatas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.phone }}</td>
            <td>{{ data.subject }}</td>
            <td>{{ data.message }}</td>
            <td class="d-flex px-2">
              <button @click="deleteTestimonial(data.id)" class="btn btn-danger px-2 mx-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script setup>
  import { $api } from "@/services/api";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
  
  const feedbackID = ref("");
  

  
  const feedback = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const base_url = import.meta.env.VITE_API_URL;
  
  const feedbackDatas = ref();
  
  const fetchData = async () => {
    try {
      const response = await $api('/feedback', {
        method: 'GET',
      });
      feedbackDatas.value = response;
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
        const response = await axios.delete(`${base_url}feedbackDelete/${id}`);
        window.location.reload();
      } else {
        console.log("Deletion canceled by user");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };
  
  </script>
  <style scoped>
  .modal-overlay {
    email: fixed;
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
<template>
  <div>
    <div class="px-3 py-3 bg-primary-subtle rounded-3 my-3 d-flex">
      <h3>Dashboard</h3>
    </div>
    <div class="row my-3 justify-content-center">
      <div class="col-sm-4 col-md-2 col-2" v-for="(item, index) in CountInfo" :key="index">
        <div class="card-sm" >
          <div class="card-body">
            <h4 class="card-title f-6">{{ item }}</h4>
            <h3 class="card-text fs-6">{{ index }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue'

const base_url = import.meta.env.VITE_API_URL;

import axios from 'axios';

const CountInfo = ref([])

const getCount = async () => {
  try {
    const response = await axios.get(`${base_url}dashboard/card`)
    CountInfo.value = response.data
  } catch (error) {
    console.error('Error Fetching Data', error)
  }
}

onMounted(() => {
  getCount()
})
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* Adjust the gap between cards as needed */
  justify-content: space-between;
  /* Ensure cards are evenly spaced */
}

.card {
  width: calc(25% - 1rem);
  box-sizing: border-box;
}

.card-body {
  background-color:rgb(28 115 248);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

.card-title,
.card-text {
  text-align: center;
}

.chart-container {
  width: 50%;
  height: 400px;
  /* Adjust the height as needed */
  margin-top: 2rem;
}
</style>

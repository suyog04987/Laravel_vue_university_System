<template>
  <div class="container text-center py-4">
    <div class="row align-items-start gap-4">
      <div
        v-for="(data, index) in name"
        :key="index"
        class="bg-dark-subtle card rounded-top-4"
        style="width: 18rem; height: 26rem;"
      >
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column justify-content-evenly align-items-evenly ">
          <h5 class="bg-primary border card-title py-2 px-2 rounded-5">
            {{ data.name }}
          </h5>
          <p class="card-text">
           {{ data.details }}
          </p>
          <h6>{{ data.address }}</h6>
          <router-link :to="`/universityView/${data.id}`" class="btn btn-primary">View University</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  name: Object,
});
</script>

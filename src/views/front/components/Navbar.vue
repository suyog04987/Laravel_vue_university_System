<template>
  <nav class="navbar bg-body-tertiary">
    <div class="bg-success-subtle container-fluid">
      <router-link class="navbar-brand d-flex" to="/">
        <img src="https://www.see.gov.np/resources/see/img/logo.png" alt="Logo" width="50" height="42"
          class="d-inline-block align-text-top">
        <div class="bg-secondary-subtle border-1 font-monospace mx-md-3 p-1 rounded-2"> Intern Project </div>
      </router-link>
        <div class="d-flex">
      <span class="mx-4"> <router-link class="btn btn-success" to="/">Home</router-link></span>
      <span class="mx-4"><router-link class="btn btn-success" to="/about">About</router-link> </span>
      <span class="mx-4"><router-link class="btn btn-success" to="/contact">Contact</router-link> </span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="navbar-container">
    <!-- Updated the src attribute to use an absolute path -->
    <router-link class="navbar-brand" to="/"> <img src="../../../assets/uniInfo.png" alt="Logo" class="logo-in-front"></router-link>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-2">
              <router-link class="nav-link btn btn-outline-primary" to="/">Home</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link class="nav-link btn btn-outline-primary" to="/about">About</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link class="nav-link btn btn-outline-primary" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar-container {
  position: relative;
}

.logo-in-front {
  position: absolute;
    top: 95%;
    left: 6%;
    transform: translate(-50%, -50%);
    z-index: 1050;
    max-width: 175px;
}

.nav-link {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.nav-link:hover, .nav-link:focus {
  color: #fff !important;
  background-color: #007bff !important; 
}
</style>

<script setup>
import { RouterLink } from 'vue-router';

</script>
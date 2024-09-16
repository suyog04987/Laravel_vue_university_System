<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link class="navbar-brand" to="/"> <img src="../../../assets/uniInfo.png" height="30" alt="Logo"
            class="d-inline-block align-text-top"><span class="fw-bolder">UniInfo</span></router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li> -->
          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-primary" to="/">Home</router-link>
          </li>

          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-primary" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="programsDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Programs
            </a>
            <ul class="dropdown-menu" aria-labelledby="programsDropdown">
              <li><a class="dropdown-item" href="#">Program 1</a></li>
              <li><a class="dropdown-item" href="#">Program 2</a></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-primary" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link btn btn-outline-primary" to="/findFaculty">Faculty Recommendation</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Student Forms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Payment Notice</a>
          </li> -->
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="loginDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="bi bi-lock"></i> Login
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="loginDropdown">
             <router-link to="/login"><li class="dropdown-item">Admin Login</li></router-link>
              <!-- <li><a class="dropdown-item" href="#">Admin Login</a></li> -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar-brand img {
  margin-right: 8px;
}
</style>

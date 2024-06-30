<template>
    <div class="container-fluid bodyy text-white text-center py-5 mb-5">
      <div class="row">
        <div class="col-12">
          <img src="../../../assets/uniInfo.png" alt="uniInfo" class="my-3">
          <h1>Learn something new today.</h1>
          <p>Get the latest news and updates on each and every education materials and activities.</p>
          <div class="d-flex justify-content-center my-4">
            <input type="text" class="form-control w-50" placeholder="What do you want to learn today? Search here.">
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-light mx-2">Login</button>
            <button class="btn btn-light mx-2">Signup</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .bodyy {
    background-color:rgb(54 90 144) !important
  }
  
  input::placeholder {
    color: #888;
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
  }
  
  /* img {
    max-width: 100px;
  } */
  </style>
  
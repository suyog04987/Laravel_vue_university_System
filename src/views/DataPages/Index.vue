<template>
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">InternProject Dashboard</span>
        </div>
      </nav>
      <div class="wrapper">
        <Sidebar />
        <div id="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      Sidebar
    }
  }
  </script>
  
  <style>
  .wrapper {
    display: flex;
  }
  
  #content {
    width: calc(100% - 250px);
    padding: 20px;
  }
  </style>
  
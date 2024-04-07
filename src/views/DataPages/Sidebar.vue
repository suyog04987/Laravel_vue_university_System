<template>
    <div>
      <div class="sidebar">
        <ul class="list-unstyled components">
          <li>
            <router-link to="/university">University</router-link>
          </li>
          <li>
            <router-link to="/faculty">Faculty</router-link>
          </li>
          <li>
            <router-link to="/semester">Semester</router-link>
          </li>
          <li>
            <router-link to="/courses">Courses</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #343a40;
    padding: 20px;
    color: white;
  }
  
  .sidebar ul.components li {
    margin-bottom: 10px;
  }
  
  .sidebar ul.components li a {
    color: white;
    text-decoration: none;
  }
  </style>
  
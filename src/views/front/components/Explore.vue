<template>
    <div class="explore container" >
        <h1 class="fw-bold fs-1" style="color:blue;">Explore</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="item in items" :key="item.title">
          <div class="explore-item card h-100 text-center p-3">
            <div class="explore-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="explore-title mt-2">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Explore',
    data() {
      return {
        items: [
          { title: 'Universities', icon: 'bi bi-mortarboard' },
          { title: 'Colleges', icon: 'bi bi-building' },
          { title: 'Notes', icon: 'bi bi-file-earmark-text' },
          { title: 'Syllabus', icon: 'bi bi-file-earmark' },
          { title: 'Question Bank', icon: 'bi bi-question-circle' },
          { title: 'Solutions', icon: 'bi bi-clipboard-check' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .explore-item {
    background: #eeebeb;
    border-radius: 8px;
    transition: background 0.3s;
  }
  
  .explore-item:hover {
    background: #21c7d3;
  }
  
  .explore-icon i {
    font-size: 50px;
    color: crimson;
  }
  
  .explore-title {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 900;
    color: blueviolet;
  }
  </style>
  
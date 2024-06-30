<template>
  <div class="container mt-4">
    <div class="card" v-for="(data, index) in name" :key="index">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="data.image_url" class="img-fluid rounded-start" :alt="data.name">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ data.name }}</h5>
            <p class="card-text"><small class="text-muted">Nepal | {{ data.address }}</small></p>
            <p class="card-text">
              <span class="badge bg-warning text-dark">#{{ data.rank }} in Best Universities in Nepal</span>
            </p>
            <p class="card-text">
              <strong>Enrollment:</strong> {{ data.enrollment_number}}
            </p>
            <p class="card-text">
              {{ data.details }}
            </p>
            <router-link :to="`/universityView/${data.id}`" class="card-link">View University</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right">
       <router-link class="" to="/viewAllUniversity" ><button class="btn btn-primary mt-3">View all University...</button></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'UniversityList',
  props: {
    name: {
      type: Array,
      required: true,
    },
  },
};
</script>




<style scoped>
.card {
  margin-bottom: 2.4rem;
  box-shadow:10px 4px 10px 5px rgb(16 225 255 / 40%);
}
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
  background: aliceblue;
  box-shadow:10px 4px 10px 5px rgba(243, 43, 28, 0.4);

}

.img-fluid {
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
}

.badge {
  font-size: 1rem;
}

.card-text {
  margin-bottom: 0.5rem;
}

.card-link {
  color: #007bff;
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}
</style>

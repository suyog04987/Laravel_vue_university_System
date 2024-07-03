<template>
  <footer class="bg-light pt-5 pb-3">
    <div class="container">
      <div class="row text-center text-md-left">
        <div class="col-md-6 col-lg-3">
          <h5 class="mb-3">For students</h5>
          <ul class="list-unstyled">
            <li><a href="#">Search study materials</a></li>
            <li><a href="#">Rewards store</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="mb-3">For companies</h5>
          <ul class="list-unstyled">
            <li><a href="#">Press</a></li>
            <li><a href="#">Find talents</a></li>
            <li><a href="#">Employer branding</a></li>
            <li><a href="#">Arrange a demo</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mt-4 mt-md-0">
          <h5 class="mb-3">Get the app</h5>
          <a href="#"><img src="../../../assets/apple.svg" alt="App Store" class="img-fluid mb-2" /></a>
          <div class="mb-2">4.7</div>
          <a href="#"><img src="../../../assets/google.svg" alt="Google Play" class="img-fluid mb-2" /></a>
          <div>4.3</div>
        </div>
        <div class="col-md-6 col-lg-3 mt-4 mt-md-0 text-md-right">
          <h5 class="mb-3">Follow us</h5>
          <!-- <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="h1 m-5 ml-3"><i class="bi bi-facebook"></i></a>
          <a href="#" class="h1 ml-3"><i class="bi bi-instagram"></i></a> -->
          <a href="#" class="h1 m-2 ml-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="h1 m-2 ml-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="h1 m-2 ml-3"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="h1 m-2 ml-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="h1  m-2 ml-3"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <div class="row mt-4 text-center">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Imprint</a></li>
            <li class="list-inline-item"><a href="#">About us</a></li>
            <li class="list-inline-item"><a href="#">Privacy Settings</a></li>
          </ul>
        </div>
      </div>
      <div class="row mt-3 text-center">
        <div class="col">
          <p>Copyright © UniInfo 2024</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.fab {
  font-size: 1.5rem;
  color: #007bff;
}
</style>

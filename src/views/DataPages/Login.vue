<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="p-4 rounded shadow-lg bg-light">
            <div class="text-center mt-2 mb-4">
              <h2 class="h4">Admin Panel</h2>
            </div>
            <form @submit.prevent="formSubmit" class="mt-3">
              <div class="form-group">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control py-2 mx-2"
                    v-model="user.email"
                    id="useremail"
                    placeholder="Useremail"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control py-2 my-2"
                    id="pwd"
                    v-model="user.password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button type="submit"  @click="tokenShow" class="btn btn-primary btn-block mt-3">
                Login
              </button>
            </form>
            <div class="text-center mt-3">
              <a href="#" class="text-decoration-none">Forgot password?</a>
              <span class="mx-2 text-muted">|</span>
              <a href="#" class="text-decoration-none">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
import { reactive } from "vue";
import login from "../../services/auth"
import router from "@/router";
// const base_url = import.meta.env.VITE_API_URL;


const user = reactive({
  email: "",
  password: ""

})

const authStore = useAuthStore();

const formSubmit = async () =>{
  try{
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    await login(formData);
    console.log("Login Success")
    router.push("/index");
  }
  catch(error){
    console.error("Error Login:", error);
  }
  // authStore.login(formData);
}



// const formSubmit = async () => {
//   const formData = new FormData();
//   formData.append("email", user.email);
//   formData.append("password", user.password);


//   try {
//    const response = await axios.post(`${base_url}login`, formData);
//     // Handle successful response if needed
//   } catch (error) {
//     // Handle error
//     console.error("Error Login:", error);
//   }
// };

</script>

<style scoped>
.wrapper {
  max-width: 400px;
  margin: 0 auto;
}
.wrapper input[type="text"],
.wrapper input[type="password"] {
  border-radius: 25px;
}
.input-group-text {
  background-color: transparent;
  border-color: white;
}
</style>

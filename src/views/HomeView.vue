<template>
  <div >
    <Navbar/>
    <Crousel/>
    <Search/>
    <Explore />
    <StudyToolVue/>
    <Card :name="universityName.value"/>
    <FeaturedColleges/>
    <AddView/>
    <Footer/>
  </div>
  
</template>

<script setup>
// import { router } from 'vue-router';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import Card from './front/components/Card.vue';
import Crousel from './front/components/Crousel.vue';
import Explore from './front/components/Explore.vue';
import FeaturedColleges from './front/components/FeaturedCollege.vue';
import Footer from './front/components/Footer.vue';
import Navbar from './front/components/Navbar.vue';
import Search from './front/components/Search.vue';
import StudyToolVue from './front/components/StudyTool.vue';
import AddView from './front/components/addview.vue';


const base_url = import.meta.env.VITE_API_URL;



const universityName = reactive([]);

const getUniversity = async () => {
  try {
    const response = await axios.get(`${base_url}paginatedData`);
    universityName.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error is :", error);
  }
};

onMounted(()=>{
  getUniversity();
});


</script>
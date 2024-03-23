import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const base_url = import.meta.env.VITE_API_URL;


export const useUniversityStore = defineStore('university', {
  state: () => ({
    universities: []
  }),
  actions: {
    async fetchUniversities(id) {
      try {
        const response = await axios.get(`${base_url}university/${id}`);
        this.universities = response.data; // Store the fetched university as an array
        // console.log(this.universities.data);
      } catch (error) {
        console.error('Error fetching university:', error);
        throw error; // Re-throw the error to handle it in the component
      }
    }
  }
});

export const useFacultyStore = defineStore('faculty',{
  state: () => ({
    faculties: []
  }),
  actions: {
    async fetchFaculties(id){
      try{
        const response = await axios.get(`${base_url}faculty/${id}`);
        this.faculties = response.data;

      }catch(error){
        console.error('Error fetching Faculty Data:', error);
        throw error;
      }
    }
  }
});

export const useCoursesStore = defineStore('courses',{
  state: () => ({
    courses: []
  }),
  actions: {
    async fetchCourses(id){
      try{
        const response = await axios.get(`${base_url}courses/${id}`);
        this.courses = response.data;

      }catch(error){
        console.error('Error fetching Faculty Data:', error);
        throw error;
      }
    }
  }
});


        
        // export const useUniversityStore = defineStore('university', {
        //   state: () => ({
        //     universities: []
        //   }),
        //   actions: {
        //     async fetchUniversities() {
        //       try {
        //         const response = await fetch(`${base_url}university`);
        //         if (!response.ok) {
        //           throw new Error('Failed to fetch universities');
        //         }
        //         const data = await response.json();
        //         this.universities = data;
        //       } catch (error) {
        //         console.error('Error fetching universities:', error);
        //       }
        //     }
        //   }
        // });
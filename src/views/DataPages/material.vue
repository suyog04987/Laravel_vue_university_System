<template>
    <!-- table for showing courses  -->
    <div class="py-3 px-2">
        <div class="d-flex d-flex justify-content-md-between">
            <h1 class="bg-info-subtle border m-1 p-0 rounded-start text-lg-start">
                Study Materials
            </h1>
            <button type="button" class="bg-primary-subtle btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Materials
            </button>
        </div>
        <select v-model="materials.university_id" class="form-control my-2" id="university">
            <option value="">Select university</option>
            <option :value="university.id" v-for="(university, index) in universityName" :key="index">
                {{ university.name }}
            </option>
        </select>
        <select v-model="materials.faculty_id" class="form-control my-2" id="faculty">
            <option value="">Select Faculty</option>
            <option v-for="(faculty, index) in computedFaculties" :value="faculty.id" :key="index">
                {{ faculty.name }}
            </option>
        </select>
        <select v-model="materials.semesters_id" class="form-control my-2" id="faculty">
            <option value="">Select Semester</option>
            <option v-for="(semester, index) in computedSemesters" :value="semester.id" :key="index">
                {{ semester.semester }}
            </option>
        </select>
        <select v-model="materials.courses_id" class="form-control my-2" id="course">
            <option value="">Select Course</option>
            <option v-for="(course, index) in computedCourses" :value="course.id" :key="index">
                {{ course.name }}
            </option>
        </select>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Note</th>
                    <th scope="col">Syllabus</th>
                    <th scope="col">Solutions</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(material, index) in computedMaterials" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td><a :href="material.noteUrl" target="#"><button class="btn btn-primary">Note</button></a></td>
                    <td><a :href="material.syllabusUrl" target="#"><button class="btn btn-primary">Syllabus</button></a></td>
                    <td><a :href="material.solutionUrl" target="#"><button class="btn btn-primary">Solution</button></a></td>
                    <td class="d-flex px-2">
                        <button class="btn btn-success" @click="openModal(material)" data-bs-toggle="modal"
                            data-bs-target="#exampleModal1">
                            Edit
                        </button>
                        <button @click="deleteMaterial(material.id)" class="btn btn-danger px-2 mx-2">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- end of table  -->
    <!-- Model for adding  -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Materials</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">Add materials</h1>
                            <form @submit.prevent="formSubmit">
                                <div class="form-group">
                                    <label for="university">Select University</label>
                                    <select v-model="materials.university_id" class="form-control" id="university">
                                        <option value="">Select university</option>
                                        <option :value="university.id" v-for="(university, index) in universityName"
                                            :key="index">
                                            {{ university.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="faculty">Select Faculty</label>
                                    <select v-model="materials.faculty_id" class="form-control" id="faculty">
                                        <option value="">Select Faculty</option>
                                        <option v-for="(faculty, index) in computedFaculties" :value="faculty.id"
                                            :key="index">
                                            {{ faculty.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="faculty">Select Semester</label>
                                    <select v-model="materials.semesters_id" class="form-control" id="faculty">
                                        <option value="">Select Semester</option>
                                        <option v-for="(semesters, index) in computedSemesters" :value="semesters.id"
                                            :key="index">
                                            {{ semesters.semester }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <lable for="course">Select Course</lable>
                                    <select v-model="materials.courses_id" class="form-control my-2" id="course">
                                        <option value="">Select Course</option>
                                        <option v-for="(course, index) in computedCourses" :value="course.id"
                                            :key="index">
                                            {{ course.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="note">Note</label>
                                    <input type="file"  class="form-control" @change="fileNote"
                                        id="note" />
                                </div>
                                <div class="form-group">
                                    <label for="syllabus">Syllabus</label>
                                    <input type="file"  class="form-control" @change="fileSyllabus"
                                        id="syallbus" />
                                </div>
                                <div class="form-group">
                                    <label for="solution">Solution</label>
                                    <input type="file"  class="form-control" @change="fileSolution"
                                        id="solution" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- end adding  -->
    <!-- Model for editing  -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" v-show="isModalOpen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Material</h5>
                    <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="updateForm">
                                <h2 class="card-title">Edit Material</h2>
                                <div class="md-3">
                                    <label for="universitySelect">University</label>
                                    <select class="form-control" v-model="materials.university_id"
                                        id="universitySelect">
                                        <option value="">Select one</option>
                                        <option :value="university.id" v-for="(university, index) in universityName"
                                            :key="index">
                                            {{ university.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="faculty">Select Faculty</label>
                                    <select v-model="materials.faculty_id" class="form-control" id="faculty">
                                        <option value="">Select Faculty</option>
                                        <option v-for="(faculty, index) in computedFaculties" :value="faculty.id"
                                            :key="index">
                                            {{ faculty.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="faculty">Select Semester</label>
                                    <select v-model="materials.semesters_id" class="form-control" id="faculty">
                                        <option value="">Select Semester</option>
                                        <option v-for="(semesters, index) in computedSemesters" :value="semesters.id"
                                            :key="index">
                                            {{ semesters.semester }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="faculty">Select Semester</label>
                                    <select v-model="materials.courses_id" class="form-control my-2" id="course">
                                        <option value="">Select Course</option>
                                        <option v-for="(course, index) in computedCourses" :value="course.id"
                                            :key="index">
                                            {{ course.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="note">Note</label>
                                    <input type="file"  class="form-control" @change="fileNote"
                                        id="note" />
                                </div>
                                <div class="mb-3">
                                    <label for="syllabus">Syllabus</label>
                                    <input type="file"  class="form-control" @change="fileSyllabus"
                                        id="syllabus" />
                                </div>
                                <div class="mb-3">
                                    <label for="Solution">Solution</label>
                                    <input type="file"  class="form-control" @change="fileSolution"
                                        id="Solution" />
                                </div>
                                <input type="hidden" v-model="materialID" />

                                <button type="submit" class="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeModal" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- end adding  -->
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, reactive, ref } from "vue";
const universityName = ref([]);

const base_url = import.meta.env.VITE_API_URL;

const materials = reactive({
    university_id: "",
    faculty_id: "",
    semesters_id: "",
    credit_hrs: "",
    courses_id: "",
});
const note = ref("");
const syllabus = ref("");
const solution = ref("");
const materialID = ref('');
const isModalOpen = ref(false);

const openModal = (id) => {
    materials.university_id = id.universities_id;
    materials.faculty_id = id.faculties_id;
    materials.semesters_id = id.semesters_id;
    materials.credit_hrs = id.credit_hrs;
    materials.courses_id = id.courses_id;
    materialID.value = id.id;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const resetForm = () => {
    materials.university_id = "";
    materials.faculty_id = "";
    materials.semesters_id = "";
    materials.credit_hrs = "";
    materials.courses_id = "";

};

const computedFaculties = computed(() => {
    if (materials.university_id) {
        return universityName.value.find(
            (university) => university.id == materials.university_id
        ).faculty;
    } else {
        return [];
    }
});
const computedSemesters = computed(() => {
    if (materials.university_id && materials.faculty_id) {
        return computedFaculties.value.find(
            (semester) => semester.id === materials.faculty_id
        ).semester;
    } else {
        return [];
    }
});

const computedCourses = computed(() => {
    if (materials.university_id && materials.faculty_id && materials.semesters_id) {
        return computedSemesters.value.find(
            (course) => course.id == materials.semesters_id
        ).course;
    } else {
        return [];
    }
});

const computedMaterials = computed(() => {
    if (materials.university_id && materials.faculty_id && materials.semesters_id && materials.courses_id) {
        return computedCourses.value.find(
            (material) => material.id == materials.courses_id
        ).material;
    } else {
        return [];
    }
});

const getUniversity = async () => {
    try {
        const response = await axios.get(`${base_url}university`);
        universityName.value = response.data;
        // console.log(response.data);
    } catch (error) {
        console.error("Error is :", error);
    }
};

onMounted(() => {
    getUniversity();
});

const updateForm = async () => {
    const formData = new FormData();
    formData.append("universities_id", materials.university_id);
    formData.append("semesters_id", materials.semesters_id);
    formData.append("faculties_id", materials.faculty_id);
    formData.append("courses_id", materials.courses_id);
    formData.append("note", note.value);
    formData.append("syllabus", syllabus.value);
    formData.append("solution", solution.value);


    try {
        const response = await axios.post(
            `${base_url}materialUpdate/${materialID.value}`,
            formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
        alert("Update:" + response.data.message);
        resetForm();
        window.location.reload();
        // Handle successful response if needed
    } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
        // alert("response.data.error.message");
    }
};
const fileNote = (e) => {
    note.value = e.target.files[0];
};
const fileSyllabus = (e) => {
    syllabus.value = e.target.files[0];
};
const fileSolution = (e) => {
    solution.value = e.target.files[0];
};

const formSubmit = async () => {
    const formData = new FormData();
    formData.append("universities_id", materials.university_id);
    formData.append("faculties_id", materials.faculty_id);
    formData.append("semesters_id", materials.semesters_id);
    formData.append("courses_id", materials.courses_id);
    formData.append("note", note.value);
    formData.append("syllabus", syllabus.value);
    formData.append("solution", solution.value);

    try {
        const response = await axios.post(`${base_url}material/add`, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    
    });
        alert("Update:" + response.data.message);
        resetForm();
        window.location.reload();
        // Handle successful response if needed
    } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
    }
};

const deleteMaterial = async (id) => {
    try {
        // Show confirmation dialog
        const confirmed = window.confirm(
            "Are you sure you want to delete this university?"
        );

        if (confirmed) {
            // If user confirms, send delete request
            const response = await axios.delete(`${base_url}materialDelete/${id}`);
            window.location.reload();
        } else {
            console.log("Deletion canceled by user");
        }
    } catch (error) {
        console.error("Error deleting:", error);
    }
};
</script>
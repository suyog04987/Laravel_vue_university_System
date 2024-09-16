<template>
    <Navbar />
    <div class="contact-container container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4698429382016!2d85.3187917751115!3d27.702635630659734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19121c1a80d3%3A0xf4f82c3a2e61a476!2sDigital%20Nepal!5e0!3m2!1sen!2snp!4v1591702722039!5m2!1sen!2snp"
                        width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen=""
                        aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <form class="contact-form h4" @submit.prevent="formSubmit">
                    <h1 class="text-center">Have a Question?</h1>
                    <h3 class="text-center">Get in touch !</h3>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" v-model="feedback.name" class="form-control" id="name"
                            placeholder="Enter your name" />
                        <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                    </div>
                    <div class="form-group mt-2">
                        <label for="email">Email</label>
                        <input type="email" v-model="feedback.email" class="form-control" id="email"
                            placeholder="Enter your email" />
                        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                    </div>
                    <div class="form-group mt-2">
                        <label for="phone">Phone</label>
                        <input type="tel" v-model="feedback.phone" class="form-control" id="phone"
                            placeholder="Enter your phone number" />
                        <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                    </div>
                    <div class="form-group mt-2">
                        <label for="subject">Subject</label>
                        <input type="text" v-model="feedback.subject" class="form-control" id="subject"
                            placeholder="Enter the subject" />
                        <span class="text-danger" v-if="errors.subject">{{ errors.subject }}</span>
                    </div>
                    <div class="form-group mt-2">
                        <label for="message">Message</label>
                        <textarea class="form-control" v-model="feedback.message" id="message" rows="4"
                            placeholder="Enter your message"></textarea>
                        <span class="text-danger" v-if="errors.message">{{ errors.message }}</span>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">
                        Send Message <i class="bi bi-paper-plane"></i>
                    </button>
                </form>
            </div>
            <div class="col-md-5">
                <div class="contact-info fs-4 fw-bold h-100 p-4">
                    <h4 class="fs-1 fw-bold">Contact Information</h4>
                    <p class="mt-3"><i class="bi bi-map-marker-alt"></i>abcdefgh - 32, xyz, Kathmandu, Nepal</p>
                    <p class="mt-3"><i class="bi bi-phone"></i> +977-98003003399</p>
                    <p class="mt-3"><i class="bi bi-envelope"></i> abc@xyz.edu.np</p>
                    <p class="mt-3"><i class="bi bi-map"></i> Find us on Google Map</p>
                    <h4 class="mt-5">Follow Us on</h4>
                    <p>
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-youtube"></i></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

const base_url = import.meta.env.VITE_API_URL;

const feedback = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const errors = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const validateForm = () => {
    errors.name = feedback.name ? "" : "Full Name is required.";
    errors.email = feedback.email ? "" : "Email is required.";
    if (!feedback.phone) {
        errors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(feedback.phone)) {
        errors.phone = "Phone number must be exactly 10 digits.";
    } else {
        errors.phone = "";
    }
    errors.subject = feedback.subject ? "" : "Subject is required.";
    errors.message = feedback.message ? "" : "Message is required.";

    return !errors.name && !errors.email && !errors.phone && !errors.subject && !errors.message;
};

const resetForm = () => {
    feedback.name = "";
    feedback.email = "";
    feedback.phone = "";
    feedback.subject = "";
    feedback.message = "";
};

const formSubmit = async () => {
    if (validateForm()) {
        const formData = new FormData();
        formData.append("name", feedback.name);
        formData.append("email", feedback.email);
        formData.append("phone", feedback.phone);
        formData.append("subject", feedback.subject);
        formData.append("message", feedback.message);

        try {
            const response = await axios.post(`${base_url}submitFeedback`, formData);
            resetForm();
            alert("Feedback submitted successfully");
            const data = await response.data;
            console.log(data);
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    }
};
</script>

<style scoped>
.map-container {
    height: 500px;
}

.contact-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-info {
    background-color: #0056b3;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-info h4 {
    margin-bottom: 1rem;
}

.contact-info p {
    margin-bottom: 0.5rem;
}

.contact-info i {
    margin-right: 0.5rem;
}

.contact-info a {
    color: #fff;
    margin-right: 1rem;
}

.contact-info a:hover {
    color: #d9d9d9;
}

.text-danger {
    color: red;
    font-size: 0.875rem;
}
</style>
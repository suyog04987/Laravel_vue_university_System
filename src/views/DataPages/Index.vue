<template>
  <div>
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Layout from './Layout.vue';
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
</script>

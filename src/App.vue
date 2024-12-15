<template>
  <div id="app" class="layout">
    <Header />
    <main>
      <!-- Aquí se renderizan las vistas -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<style lang="css">
@use "@/assets/css/main";

</style>


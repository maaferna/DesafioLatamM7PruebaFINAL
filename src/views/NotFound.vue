<template>
    <div class="not-found d-flex flex-column align-items-center justify-content-center">
      <h1 class="error-code display-1">404</h1>
      <p class="error-message lead">Página no encontrada</p>
    </div>
    <div class="container">
      <router-link to="/" class="btn btn-primary mt-3">
        Volver al inicio
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style lang="scss">
  
  </style>
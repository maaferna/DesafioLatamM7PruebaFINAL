<template>
    <header class="header navbar navbar-expand-lg navbar-light bg-light">
      <!-- Logo -->
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/logo.svg" alt="Vue Logo" class="header__logo-img" />
        </router-link>
  
        <!-- Botón Toggle para navegación en pantallas pequeñas -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Ruta Inicio -->
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
  
            <!-- Ruta About -->
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Acerca del Proyecto</router-link>
            </li>
  
            <!-- Ruta Contact -->
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contacto</router-link>
            </li>

            <!-- Ruta Parent Child comunicacion -->    
            <li class="nav-item">
              <router-link to="/comunicacion" class="nav-link">ParentChildCommunication</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style lang="scss" scoped>
  .header {
    &__logo-img {
      max-height: 50px;
    }
  
    .nav-link {
      font-size: 1rem;
      transition: color 0.3s ease;
  
      &:hover {
        color: #007bff; /* Color para el hover */
      }
    }
  }
  </style>
  
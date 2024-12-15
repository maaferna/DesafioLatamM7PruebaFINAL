<template>
    <div class="about">
      <h1>Acerca del Proyecto</h1>
      <p>
        Este proyecto forma parte del desafío final del módulo de desarrollo frontend con Vue.js,
        implementado en el marco de la formación de Talento Digital. El objetivo principal es
        demostrar los conocimientos adquiridos mediante la creación de una aplicación web que
        integre herramientas y conceptos aprendidos durante el curso, tales como:
      </p>
      <ul>
        <li>Manejo de estado global utilizando <strong>Pinia</strong>.</li>
        <li>Gestión de rutas dinámicas con <strong>Vue Router</strong>.</li>
        <li>Pruebas unitarias utilizando <strong>Jest</strong> para garantizar la calidad del código.</li>
        <li>Despliegue de la aplicación utilizando <strong>Firebase Hosting</strong>.</li>
      </ul>
      <p>
        Este proyecto refleja un enfoque práctico hacia el desarrollo frontend moderno, integrando
        tecnologías actuales para la creación de aplicaciones robustas y escalables.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>
  .about {
    margin: 20px auto;
    padding: 20px;
    max-width: 800px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
  }
  
  .about h1 {
    color: #42b983;
    margin-bottom: 15px;
  }
  
  .about ul {
    margin-top: 15px;
    padding-left: 20px;
  }
  
  .about li {
    margin-bottom: 10px;
  }
  </style>
  
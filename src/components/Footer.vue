<template>
    <footer class="bg-dark text-light py-4">
      <div class="container">
        <div class="row">
          <!-- Sección 1 -->
          <div class="col-12 col-md-6">
            <h5>
              <img
              src="../../public/images/icon-phone.jpg"
                alt="Ícono dirección"
                width="20"
                height="20"
              />
              Dirección
            </h5>
            <address>
              <p>{{ address1 }}</p>
              <strong>{{ city1 }}</strong>
            </address>
            <hr />
            <h5>
              <img
              src="../../public/images/icon-phone.jpg"
                alt="Ícono teléfono"
                width="20"
                height="20"
              />
              Teléfonos
            </h5>
            <address>
              <a :href="'tel:' + phone1">{{ phone1 }}</a><br />
              <a :href="'tel:' + phone2">{{ phone2 }}</a>
            </address>
          </div>
  
          <!-- Sección 2 -->
          <div class="col-12 col-md-4">
            <h5>
              <img
              src="../../public/images/icon-phone.jpg"
              alt="Ícono dirección"
                width="20"
                height="20"
              />
              Dirección
            </h5>
            <address>
              <p>{{ address2 }}</p>
              <strong>{{ city2 }}</strong>
            </address>
            <hr />
            <h5>
              <img
                src="../../public/images/icon-phone.jpg"
                alt="Ícono teléfono"
                width="20"
                height="20"
              />
              Teléfonos
            </h5>
            <address>
              <a :href="'tel:' + phone3">{{ phone3 }}</a>
            </address>
          </div>
  
          <!-- Sección Redes Sociales -->
          <div class="col-12 col-md-2 d-flex justify-content-around align-items-center">
            <a
              href="https://web.facebook.com/INIAChile/?locale=es_LA&_rdc=1&_rdr"
              target="_blank"
              aria-label="Síguenos en Facebook"
              class="text-light"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/inia-chile/"
              target="_blank"
              aria-label="Síguenos en LinkedIn"
              class="text-light"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <!-- Derechos Reservados -->
        <div class="text-center mt-4">
          <p>&copy; 2024 <strong>Flora y Fauna, Chile</strong>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterSection",
    props: {
      address1: {
        type: String,
        default: "Av. Presidente Frei Montalva 7070, Bodega 25",
      },
      city1: {
        type: String,
        default: "Quilicura, Santiago",
      },
      phone1: {
        type: String,
        default: "+56 22 635 2106",
      },
      phone2: {
        type: String,
        default: "+56 22 222 6976",
      },
      address2: {
        type: String,
        default: "Avda. O'Higgins Panamericana Norte N°2086",
      },
      city2: {
        type: String,
        default: "Chillán, Ñuble",
      },
      phone3: {
        type: String,
        default: "+56 42 234 1800",
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
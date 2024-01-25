<template>
  <!-- Your component template goes here -->
  <div class="main bg-white">
    <div class="column" style="height: 100%">
      <header class="col bg-secondary">
        <img :src="img_sacha_everton_ruido" alt="" />
        <div class="flex items-center items-center" style="height: 100%">
          <h1 class="mortend text-white">CLUBES</h1>
        </div>
      </header>
      <div class="col-9 bg-white row" style="z-index: 1">
        <div class="image-container">
          <img src="@/assets/imagenes/clubes/everton.jpg" alt="" srcset="" />
          <img src="@/assets/imagenes/clubes/everton.jpg" alt="" srcset="" />
          <img src="@/assets/imagenes/clubes/everton.jpg" alt="" srcset="" />
          <img src="@/assets/imagenes/clubes/everton.jpg" alt="" srcset="" />
          <img src="@/assets/imagenes/clubes/everton.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SachaEvertonRuido from "@/assets/imagenes/sacha/sacha_everton_sin_ruido.png";
import SachaEverton from "@/assets/imagenes/sacha/sacha_everton.png";
export default {
  // Component data
  data() {
    return {
      img_sacha_everton_ruido: SachaEvertonRuido,
      img_sacha_everton: SachaEverton,
      lista: [
        {
          año: "1985",
          texto:
            "Sebastián Sáez nació en Santiago del Estero, Argentina, el 24 de enero de 1985.",
        },
        {
          año: "2006",
          texto: "Comenzó su carrera en Tiro Federal, de Argentina, en 2006.",
        },
        {
          año: "2012",
          texto:
            "En 2012 fichó por Audax Italiano, de Chile, donde se convirtió en máximo goleador de la Primera División de Chile en 2012-C y 2013-T.",
        },
      ],
    };
  },

  // Component methods
  methods: {
    // Your methods go here
  },

  // Component lifecycle hooks
  beforeCreate() {
    // Executed before the component is created
  },
  created() {
    // Executed after the component is created
  },
  beforeMount() {
    // Executed before the component is mounted to the DOM
  },
  mounted() {
    // Executed after the component is mounted to the DOM
  },

  // Component computed properties
  computed: {
    // Your computed properties go here
  },

  // Component watch options
  watch: {
    // Your watched properties go here
  },
};
</script>

<style scoped>
/* Your component styles go here */
.main {
  height: 100vh;
  width: 100vw;
  position: relative;
}

header {
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;
  display: flex;
  /* padding-left: 200px; */
  /* padding-left: calc(50vw - 750px); */
  padding-left: clamp(100px, calc(50vw - 750px), 250px);
}

header img {
  width: 100%;
  object-fit: contain;
  position: absolute;
  top: -220px;
  left: calc(50% - 50vw);
  opacity: 0.2; /* Adjust the opacity as needed */
}

.image-container {
  display: flex;
  width: 80%;
  height: 100%;
}

.image-container img {
  width: 0px;
  flex: 1;
  object-fit: cover;
  filter: grayscale(1);
  transition: 0.8s ease;
}

.image-container img:hover {
  cursor: pointer;
  width: 100%;
  filter: grayscale(0);
}
</style>

<template>
  <!-- Your component template goes here -->
  <div class="bg-primary">
    <div class="column">
      <div class="hero">
        <h2>SUMATE A MI COMUNIDAD EN INSTAGRAM</h2>
      </div>
      <div class="img-container">
        <img src="@/assets/imagenes/comunidad/comunidad_1.jpg" alt="" />
        <img src="@/assets/imagenes/comunidad/comunidad_2.jpg" alt="" />
        <img src="@/assets/imagenes/comunidad/comunidad_1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/imagenes/logos/sacha.png";
export default {
  // Component data
  data() {
    return {
      img_logo: Logo,
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
.hero {
  display: flex;
  justify-content: center;
  padding-top: 240px;
}

.hero h2 {
  color: white;
  text-align: center;
  width: 950px;
  text-wrap: balance;
}

.img-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 75px;
}
.img-container img {
  width: 0px;
  flex: 1;
  object-fit: cover;
}

@media (max-width: 1280px) {
  .hero {
    padding-top: 100px;
  }
  .hero h2 {
    width: auto;
  }
}
</style>

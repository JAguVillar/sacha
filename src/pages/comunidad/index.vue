<template>
  <!-- Your component template goes here -->
  <div class="seccion bg-primary">
    <div class="column">
      <div class="flex justify-center">
        <h2
          class="text-white text-center"
          style="width: 950px; text-wrap: balance"
        >
          SUMATE A MI COMUNIDAD EN INSTAGRAM
        </h2>
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
/* Your component styles go here */

.img-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.img-container img {
  width: 0px;
  flex: 1;
  object-fit: cover;
}
</style>

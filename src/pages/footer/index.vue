<template>
  <!-- Your component template goes here -->
  <div class="bg-primary container" style="width: 100vw; max-width: 100%">
    <div class="column wrapper" style="padding-top: 95px">
      <div class="seccion-sportway bg-gradient-1">
        <div class="sportway">sportwayonline</div>

        <img
          class="sportway-logo"
          src="@/assets/imagenes/logos/sportway_logo.png"
          alt=""
          srcset=""
        />

        <div class="sportway-url">sportwayonline.com</div>
      </div>
      <footer>
        <div class="copyright">© 2024 Macamedia</div>
        <div class="desarrollado">Desarrollado por Macamedia</div>
        <div class="derechos">Todos los derechos reservados</div>
      </footer>
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
.container {
  width: 100vw;
  max-width: 100%;
}

.wrapper {
  padding-top: 95px;
  width: 100vw;
  max-width: 100%;
}

.seccion-sportway {
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 30px 470px;
}

footer {
  color: white;
  background-color: black;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
}

footer div {
  font-size: 12px;
}

footer .copyright {
  text-align: left;
}
footer .desarrollado {
  text-align: center;
}
footer .derechos {
  text-align: right;
}

@media (max-width: 1280px) {
  .seccion-sportway {
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
  }

  .sportway-logo {
    margin: auto;
  }
}
</style>

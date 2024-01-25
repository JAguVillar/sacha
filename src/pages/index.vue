<template>
  <!-- Your component template goes here -->
  <div>
    <Home></Home>
    <Bio></Bio>
    <Clubes></Clubes>
  </div>
</template>

<script>
import Home from "./home/index.vue";
import Bio from "./bio/index.vue";
import Clubes from "./clubes/index.vue";
export default {
  // Component data
  components: {
    Home,
    Bio,
    Clubes,
  },
  data() {
    return {
      message: "Hello, Vue 3!",
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
.seccion {
}
</style>

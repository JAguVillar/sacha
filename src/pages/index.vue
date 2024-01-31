<template>
    <Home></Home>
    <Bio></Bio>
    <Metricas></Metricas>
    <FichaTecnica></FichaTecnica>
    <Clubes></Clubes>
    <Comunidad></Comunidad>
    <Footer></Footer>
</template>

<script>
import Home from "./home/index.vue";
import Bio from "./bio/index.vue";
import Metricas from "./metricas/index.vue";
import FichaTecnica from "./ficha_tecnica/index.vue";
import Clubes from "./clubes/index.vue";
import Comunidad from "./comunidad/index.vue";
import Footer from "./footer/index.vue";

export default {
    // Component data
    components: {
        Home,
        Bio,
        Metricas,
        FichaTecnica,
        Clubes,
        Comunidad,
        Footer,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
/* Your component styles go here */
.seccion {
}
</style>

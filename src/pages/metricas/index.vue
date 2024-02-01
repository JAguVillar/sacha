<template>
  <!-- Your component template goes here -->
  <div class="bg-primary">
    <div class="seccion-cabecera col bg-primario-3">
      <img :src="img_sacha_everton_ruido" alt="" style="max-width: 100%" />
      <div class="flex items-center items-center" style="height: 100%">
        <h1 class="mortend text-white" style="z-index: 2">METRICAS</h1>
      </div>
    </div>
    <div class="wrapper">
      <div class="container text-white">
        <div class="metrica column" style="border-bottom: 2px solid #6d091b">
          <h1 class="metrica_numero">498</h1>
          <div class="helvetica metrica_nombre">Partidos jugados</div>
        </div>
        <div class="metrica column" style="border-bottom: 2px solid #6d091b">
          <h1 class="metrica_numero">235</h1>
          <div class="helvetica metrica_nombre">Goles marcados</div>
        </div>
        <div class="metrica column">
          <h1 class="metrica_numero">0,47</h1>
          <div class="helvetica metrica_nombre">Media goleadora</div>
        </div>
        <div class="metrica column">
          <h1 class="metrica_numero">3</h1>
          <div class="helvetica metrica_nombre">Titulos nacionales</div>
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
    };
  },
};
</script>

<style scoped>
.wrapper {
  max-height: 100%;
  height: 100vh;
  padding: 0px 210px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  max-height: 100%;
  height: 100vh;
  gap: 20px;
}

.metrica {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  .wrapper {
    height: 100vh;
    max-height: 100%;
    padding: 0px 18px;
    background: url("../../assets/imagenes/sacha/sacha_everton_bn.png") center
      bottom/cover no-repeat;

    position: relative;
  }
  .wrapper::before {
    content: "";
    background: rgba(22, 28, 45, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0; /* Place the overlay behind the content */
  }
  .container {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, fit-content(40%));
  }
  .metrica {
    padding-top: 18px;
    padding-bottom: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
  }
}
</style>

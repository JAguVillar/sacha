<template>
  <!-- Your component template goes here -->
  <div class="bg-main">
    <div class="seccion-cabecera col bg-primario-3">
      <img :src="img_sacha_everton_ruido" alt="" style="max-width: 100%" />
      <div class="flex items-center items-center" style="height: 100%">
        <h1 class="mortend text-white" style="z-index: 2">FICHA TECNICA</h1>
      </div>
    </div>
    <div class="container" style="z-index: 1">
      <div class="image">
        <img class="ficha_tecnica-img" :src="img_sacha" alt="" />
      </div>
      <div class="cualidades">
        <div style="width: 100%">
          <div v-for="(lista, l) in lista" :key="l" class="cualidad row">
            <h6>{{ lista.año }}</h6>
            <h6 class="text-primario-3">{{ lista.texto }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SachaEvertonRuido from "@/assets/imagenes/sacha/sacha_everton_sin_ruido.png";
import Sacha from "@/assets/imagenes/ficha_tecnica/sacha.png";

export default {
  // Component data
  data() {
    return {
      img_sacha_everton_ruido: SachaEvertonRuido,
      img_sacha: Sacha,
      lista: [
        {
          año: "ALTURA",
          texto: "1,83 MTS.",
        },
        {
          año: "PESO",
          texto: "80 KG.",
        },
        {
          año: "PIE HABIL",
          texto: "DERECHO",
        },
        {
          año: "VELOCIDAD",
          texto: "8/10",
        },
        {
          año: "FUERZA",
          texto: "8/10",
        },
        {
          año: "REGATE",
          texto: "7/10",
        },
        {
          año: "TIRO",
          texto: "9/10",
        },
        {
          año: "CABECEO",
          texto: "8/10",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0px 150px;
}
.image {
  position: relative;
}
.cualidades {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cualidad {
  justify-content: space-between;
  background-color: white;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 60px;
  padding: 0px 50px;
  gap: 20px;
}
.ficha_tecnica-img {
  width: 75%;
  height: auto;
  display: block;
  margin: auto;
}

@media (max-width: 1280px) {
  .image {
    display: none;
  }
  .container {
    grid-template-columns: 1fr;
    padding: 0px 18px;
    background: url("../../assets/imagenes/sacha/sacha_everton_bn.png") center
      bottom/cover no-repeat;

    position: relative;
  }

  .cualidad {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>

<template>
  <!-- Your component template goes here -->
  <div class="bg-white">
    <div class="seccion-cabecera col bg-primario-3">
      <img :src="img_sacha_everton_ruido" alt="" style="max-width: 100%" />
      <div class="flex items-center items-center" style="height: 100%">
        <h1 class="mortend text-white head-text" style="z-index: 2">BIO</h1>
      </div>
    </div>
    <div class="container">
      <div class="timeline">
        <div class="scrollable-box">
          <ul>
            <li class="column bg-blue" v-for="(lista, l) in lista" :key="l">
              <h2 class="anio text-primario-4 col">
                {{ lista.año }}
              </h2>
              <div class="historia helvetica col">
                {{ lista.texto }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="image">
        <img class="bio-img" :src="img_sacha_everton" alt="" />
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
        {
          año: "2012",
          texto:
            "En 2012 fichó por Audax Italiano, de Chile, donde se convirtió en máximo goleador de la Primera División de Chile en 2012-C y 2013-T.",
        },
        {
          año: "2012",
          texto:
            "En 2012 fichó por Audax Italiano, de Chile, donde se convirtió en máximo goleador de la Primera División de Chile en 2012-C y 2013-T.",
        },
        {
          año: "2012",
          texto:
            "En 2012 fichó por Audax Italiano, de Chile, donde se convirtió en máximo goleador de la Primera División de Chile en 2012-C y 2013-T.",
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
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
}
.scrollable-box {
  width: auto;
  overflow: auto;
  height: 500px;
  display: flex;
  justify-content: center;
}
ul,
li {
  list-style: none;
}
li {
  margin: 10px 0px;
  height: 180px;
  padding: 30px;
}
.anio {
  display: flex;
  align-items: center;
}
.historia {
  display: flex;
  align-items: center;
}

.scrollable-box::-webkit-scrollbar {
  width: 3px; /* Adjust the scrollbar width */
}

.scrollable-box::-webkit-scrollbar-thumb {
  background-color: #ff1541; /* Set the scrollbar color */
}
.bio-img {
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
  }
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

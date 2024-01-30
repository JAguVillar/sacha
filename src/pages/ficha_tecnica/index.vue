<template>
    <!-- Your component template goes here -->
    <div class="bg-main">
        <div class="seccion-cabecera col bg-primario-3">
            <img
                :src="img_sacha_everton_ruido"
                alt=""
                style="max-width: 100%"
            />
            <div class="flex items-center items-center" style="height: 100%">
                <h1 class="mortend text-white" style="z-index: 2">
                    FICHA TECNICA
                </h1>
            </div>
        </div>
        <div class="grilla" style="z-index: 1">
            <div class="relative">
                <img class="bio-img" :src="img_sacha_everton" alt="" />
            </div>
            <div class="flex items-center justify-center">
                <div style="width: 100%">
                    <div
                        v-for="(lista, l) in lista"
                        :key="l"
                        class="row justify-between bg-white q-my-md items-center"
                        style="height: 60px"
                    >
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
import SachaEverton from "@/assets/imagenes/sacha/sacha_everton.png";
export default {
    // Component data
    data() {
        return {
            img_sacha_everton_ruido: SachaEvertonRuido,
            img_sacha_everton: SachaEverton,
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
                    texto: "DERECHO.",
                },
                {
                    año: "VELOCIDAD",
                    texto: "8/10.",
                },
                {
                    año: "FUERZA",
                    texto: "8/10",
                },
                {
                    año: "REGATE",
                    texto: "7/10.",
                },
                {
                    año: "TIRO",
                    texto: "9/10.",
                },
                {
                    año: "CABECEO",
                    texto: "8/10.",
                },
            ],
        };
    },
};
</script>

<style scoped>
.grilla {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.bio-img {
    width: 100%;
    height: auto;
    display: block;
}
</style>

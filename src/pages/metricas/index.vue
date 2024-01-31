<template>
    <!-- Your component template goes here -->
    <div class="bg-primary">
        <div class="seccion-cabecera col bg-primario-3">
            <img
                :src="img_sacha_everton_ruido"
                alt=""
                style="max-width: 100%"
            />
            <div class="flex items-center items-center" style="height: 100%">
                <h1 class="mortend text-white" style="z-index: 2">METRICAS</h1>
            </div>
        </div>
        <div style="max-height: 100%; height: 100vh; padding: 0px 210px">
            <div class="grilla text-white">
                <div
                    class="flex justify-center items-center column"
                    style="border-bottom: 2px solid #6d091b"
                >
                    <h1>498</h1>
                    <div class="helvetica">Partidos jugados</div>
                </div>
                <div
                    class="flex justify-center items-center column"
                    style="border-bottom: 2px solid #6d091b"
                >
                    <h1>235</h1>
                    <div class="helvetica">Goles marcados</div>
                </div>
                <div class="flex justify-center items-center column">
                    <h1>0,47</h1>
                    <div class="helvetica">Media goleadora</div>
                </div>
                <div class="flex justify-center items-center column">
                    <h1>3</h1>
                    <div class="helvetica">Titulos nacionales</div>
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
.grilla {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: 100%;
    height: 100vh;
    gap: 20px;
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

.scrollable-box {
    max-width: 90%;
    margin: 0 auto;
    overflow: auto;
    padding: 10px;
    height: 300px; /* Adjust the height as needed */
}

.scrollable-box::-webkit-scrollbar {
    display: none; /* Hide scrollbar for webkit browsers */
}

.bio-img {
    width: 100%;
    height: auto;
    display: block;
}
</style>

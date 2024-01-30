<template>
    <!-- Your component template goes here -->
    <div class="bg-white seccion" style="">
        <div class="column" style="height: 100%">
            <header class="col bg-secondary">
                <img :src="img_sacha_everton_ruido" alt="" />
                <div
                    class="flex items-center items-center"
                    style="height: 100%"
                >
                    <h1 class="mortend text-white">CLUBES</h1>
                </div>
            </header>
            <div
                class="col-9 bg-primary row contenido flex justify-center"
                style="z-index: 1; padding: 100px 150px 0px 150px"
            >
                <q-tabs
                    v-model="tab"
                    dense
                    align="justify"
                    style="width: 100%"
                    active-color="secondary"
                    indicator-color="secondary"
                >
                    <q-tab :ripple="false" class="mortend q-py-md" name="mails">
                        <h6>ARGENTINA</h6>
                    </q-tab>
                    <q-tab :ripple="false" class="mortend q-py-md" name="alarms"
                        ><h6>CHILE</h6>
                    </q-tab>
                    <q-tab :ripple="false" class="mortend q-py-md" name="movies"
                        ><h6>ARABIA</h6>
                    </q-tab>
                </q-tabs>

                <div class="image-container">
                    <img
                        src="@/assets/imagenes/clubes/everton.jpg"
                        alt=""
                        srcset=""
                    />
                    <img
                        src="@/assets/imagenes/clubes/everton.jpg"
                        alt=""
                        srcset=""
                    />
                    <img
                        src="@/assets/imagenes/clubes/everton.jpg"
                        alt=""
                        srcset=""
                    />
                    <img
                        src="@/assets/imagenes/clubes/everton.jpg"
                        alt=""
                        srcset=""
                    />
                    <img
                        src="@/assets/imagenes/clubes/everton.jpg"
                        alt=""
                        srcset=""
                    />
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
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Your component styles go here */
header {
    position: relative;
    height: 250px;
    width: 100%;
    overflow: hidden;
    display: flex;
    /* padding-left: 200px; */
    /* padding-left: calc(50vw - 750px); */
    padding-left: clamp(100px, calc(50vw - 750px), 250px);
}

header img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: -220px;
    left: calc(50% - 50vw);
    opacity: 0.2; /* Adjust the opacity as needed */
}

.image-container {
    display: flex;
    width: 80%;
    height: 100%;
}

.image-container img {
    width: 0px;
    flex: 1;
    object-fit: cover;
    filter: grayscale(1);
    transition: 0.8s ease;
}

.image-container img:hover {
    cursor: pointer;
    width: 100%;
    filter: grayscale(0);
}
</style>
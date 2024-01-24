<template>
    <!-- Your component template goes here -->
    <div class="main bg-white">
        <div class="column" style="height: 100%">
            <header class="col bg-secondary">
                <img :src="img_sacha_everton" alt="" />
                <div
                    class="flex items-center items-center"
                    style="height: 100%"
                >
                    <h1 class="mortend text-white">BIO</h1>
                </div>
            </header>
            <div class="col-8 bg-white row" style="z-index: 1">
                <div class="col bg-blue">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="col bg-yellow"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SachaEverton from "@/assets/imagenes/sacha/sacha_everton_sin_ruido.png";
export default {
    // Component data
    data() {
        return {
            img_sacha_everton: SachaEverton,
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
.main {
    height: 100vh;
    width: 100vw;
    position: relative;
}

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
    top: -180px;
    left: calc(50% - 50vw);
    opacity: 0.2; /* Adjust the opacity as needed */
}

ul,
li {
    list-style: none;
}
</style>

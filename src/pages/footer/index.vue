<template>
    <!-- Your component template goes here -->
    <div class="seccion bg-primary">
        <div class="column">
            <div
                class="row text-white justify-around items-center bg-gradient-1"
                style="padding: 30px"
            >
                <div class="">sportwayonline</div>
                <div class="">
                    <img
                        src="@/assets/imagenes/logos/sportway_logo.png"
                        alt=""
                        srcset=""
                    />
                </div>
                <div class="">sportwayonline.com</div>
            </div>
            <div class="column text-white flex justify-around items-center">
                <div
                    style="width: 500px; height: 500px"
                    class="row flex items-center text-center justify-center"
                >
                    <div>
                        <h2>HOME</h2>
                    </div>
                    <div>
                        <h2>PERFIL</h2>
                    </div>
                    <div>
                        <h2>CARRERA</h2>
                    </div>
                    <div>
                        <h2>SOCIAL</h2>
                    </div>
                </div>
            </div>
            <div
                class="row text-white justify-around items-center bg-black relative"
                style="padding: 30px"
            >
                <div class="">© 2024 Macamedia</div>
                <div class="">Desarrollado por Macamedia</div>

                <div class="">Todos los derechos reservados</div>
            </div>
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

.img-container {
    display: flex;
    width: 100%;
    height: 100%;
}
.img-container img {
    width: 0px;
    flex: 1;
    object-fit: cover;
}
</style>

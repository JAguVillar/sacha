<template>
    <!-- Your component template goes here -->
    <div class="seccion bg-primary flex justify-center items-center">
        <img :src="img_logo" alt="" />
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

img {
    width: 30%;
}
</style>

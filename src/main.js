import App from "./App.vue";
import router from "@/router/index.js";
import api from "/src/modules/macamedia/utils/api/index";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import { createApp } from "vue";
import { Quasar, Notify, Loading } from "quasar";
import { createPinia } from "pinia";
import { storePinia } from "@/stores";
import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";

import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "quasar/src/css/index.sass";
import "./css/app.css";

import "animate.css";
import domtoimage from "dom-to-image-more";
import VueEasyLightbox from "vue-easy-lightbox";

import Vue3Lottie from 'vue3-lottie'

import Mixpanel from "mixpanel-browser";
Mixpanel.init("a54d7e4b1217c2c53e7b257da2b7aea3", { debug: true });

const myApp = createApp(App);


myApp.use(Vue3Lottie , { name: 'LottieAnimation' });

//gallery fullscreen
myApp.use(VueEasyLightbox);

//dom to image para convertir html a imagen
myApp.use(domtoimage);

// Simple typeahead
myApp.use(SimpleTypeahead);

// Quasar
myApp.use(Quasar, {
  plugins: { Notify, Loading },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
  },
});

// Router
myApp.use(router);

// Pinia
const pinia = createPinia();
myApp.use(pinia);
myApp.config.globalProperties.$stores = storePinia();

// Gmaps
myApp.use(VueGoogleMaps, {
  load: {
     key: "AIzaSyDDTG5i7Hdu0GW87lwMbAGys-3pUC8UfZ4",
    libraries: "places,geometry",
  },
  autobindAllEvents: true,
});

// Resto de módulos
let imps = Object.values(import.meta.globEager("./modules/*.js"));
imps.forEach((imp) => {
  imp.install({ app: myApp, router: router });
});

// Obtener cookies
(async () => {
  let respuestaApi = await api.get("/sanctum/csrf-cookie");
})();

myApp.mount("#app");

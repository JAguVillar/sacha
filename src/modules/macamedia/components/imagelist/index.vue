<template>
  <div class="row">
    <div class="col-3" v-for="imagen in listaContenido" :key="imagen.id">
      <!-- PARA IMAGENES -->
      <q-img
        v-if="imagen.tipo == 'Imagen'"
        width="100px"
        :src="
          imagen.thumbnail != null
            ? imagen.thumbnail
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png'
        "
        no-native-menu
        @mouseover="hoverImage"
        @mouseleave="leaveImage"
      >
        <div
          v-show="mostrarBotones"
          class="absolute-center all-pointer-events"
          style="display: flex"
        >
          <q-icon
            size="25px"
            name="sym_open_in_full"
            color="white"
            style="cursor: pointer"
            @click="imagePreview(imagen)"
          >
          </q-icon>
          <q-icon
            size="25px"
            name="sym_o_delete"
            color="white"
            style="cursor: pointer"
          ></q-icon>
        </div>
      </q-img>

      <!-- PARA VIDEOS -->
      <q-img
        v-else-if="imagen.tipo == 'Video'"
        width="100px"
        :src="
          imagen.thumbnail != null
            ? imagen.thumbnail
            : 'https://w7.pngwing.com/pngs/314/584/png-transparent-computer-icons-video-display-resolution-others-angle-text-rectangle-thumbnail.png'
        "
        no-native-menu
        @mouseover="hoverImage"
        @mouseleave="leaveImage"
      >
        <div
          v-show="mostrarBotones"
          class="absolute-center all-pointer-events"
          style="display: flex"
        >
          <q-icon
            size="25px"
            name="sym_open_in_full"
            color="white"
            style="cursor: pointer"
            @click="imagePreview(imagen)"
          >
          </q-icon>
          <q-icon
            size="25px"
            name="sym_o_delete"
            color="white"
            style="cursor: pointer"
          ></q-icon>
        </div>
      </q-img>

      <!-- PARA AUDIO -->
      <q-img
        v-else-if="imagen.tipo == 'Audio'"
        width="100px"
        :src="
          imagen.thumbnail != null
            ? imagen.thumbnail
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1200px-Speaker_Icon.svg.png'
        "
        no-native-menu
        @mouseover="hoverImage"
        @mouseleave="leaveImage"
      >
        <div
          v-show="mostrarBotones"
          class="absolute-center all-pointer-events"
          style="display: flex"
        >
          <q-icon
            size="25px"
            name="sym_open_in_full"
            color="white"
            style="cursor: pointer"
            @click="imagePreview(imagen)"
          >
          </q-icon>
          <q-icon
            size="25px"
            name="sym_o_delete"
            color="white"
            style="cursor: pointer"
          ></q-icon>
        </div>
      </q-img>

      <!-- PARA AUDIO -->
      <q-img
        v-else-if="imagen.tipo == 'Audio'"
        width="100px"
        :src="
          imagen.thumbnail != null
            ? imagen.thumbnail
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1200px-Speaker_Icon.svg.png'
        "
        no-native-menu
        @mouseover="hoverImage"
        @mouseleave="leaveImage"
      >
        <div
          v-show="mostrarBotones"
          class="absolute-center all-pointer-events"
          style="display: flex"
        >
          <q-icon
            size="25px"
            name="sym_open_in_full"
            color="white"
            style="cursor: pointer"
            @click="imagePreview(imagen)"
          >
          </q-icon>
          <q-icon
            size="25px"
            name="sym_o_delete"
            color="white"
            style="cursor: pointer"
          ></q-icon>
        </div>
      </q-img>

      <!-- PARA AUDIO -->
      <q-img
        v-else
        width="100px"
        :src="
          imagen.thumbnail != null
            ? imagen.thumbnail
            : 'https://static.thenounproject.com/png/4700132-200.png'
        "
        no-native-menu
        @mouseover="hoverImage"
        @mouseleave="leaveImage"
      >
        <div
          v-show="mostrarBotones"
          class="absolute-center all-pointer-events"
          style="display: flex"
        >
          <q-icon
            size="25px"
            name="sym_open_in_full"
            color="white"
            style="cursor: pointer"
            @click="imagePreview(imagen)"
          >
          </q-icon>
          <q-icon
            size="25px"
            name="sym_o_delete"
            color="white"
            style="cursor: pointer"
          ></q-icon>
        </div>
      </q-img>
    </div>
  </div>
  <q-dialog ref="modalPreview" v-model="abrirModal">
    <img
      v-if="dialogType == 'Imagen'"
      w-full
      :src="dialogSrc"
      alt="Preview Image"
      style="height: 80vh; margin: auto"
    />
    <div v-if="dialogType == 'Video'" id="videos">
      <div class="video_wrapper">
        <video controls class="video" :src="dialogSrc"></video>
      </div>
    </div>
    <audio
      ref="audio"
      v-show="dialogType == 'Audio'"
      controls
      style="width: 100%"
      :src="dialogSrc"
    ></audio>
    <q-icon
      class="absolute-top-right all-pointer-events"
      size="15px"
      name="sym_r_close"
      color="white"
      style="cursor: pointer"
      @click="$refs.modalPreview.hide()"
    >
    </q-icon>
  </q-dialog>
</template>

<script>
export default {
  props: {
    listaContenido: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      mostrarBotones: false,
      abrirModal: false,
      dialogSrc: null,
      dialogType: null,
    };
  },
  created() {},
  mounted() {},
  watch: {
    listaContenido() {
      console.log(this.listaContenido);
    },
  },
  methods: {
    imagePreview(contenido) {
      console.log({ contenido });
      this.dialogType = contenido.tipo;
      this.dialogSrc = contenido.url;
      this.abrirModal = true;
    },
    hoverImage() {
      this.mostrarBotones = true;
    },
    leaveImage() {
      this.mostrarBotones = false;
    },
  },
};
</script>

<style></style>

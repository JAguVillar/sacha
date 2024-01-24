<template>
  <div>
    <q-dialog
      ref="dialog"
      v-model="show"
      :maximized="fullscreen"
      @hide="$emit('hide')"
    >
      <q-card
        :style="`width:${width}; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px; padding: 20px`"
        flat
      >
        <q-card-section
          class="row items-center q-pb-none"
          style="margin-bottom: 30px"
        >
          <div class="h2">{{ titulo }}</div>
          <q-space />
          <div style="margin: auto; margin-right: -10px; margin-top: -2px">
            <q-btn
              v-close-popup
              flat
              round
              dense
              icon="sym_r_close"
              color="black"
              @click="cerrar"
            >
            </q-btn>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <slot></slot>
        </q-card-section>

        <q-card-actions align="right">
          <slot name="footer"></slot>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "900px",
    },

    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    abrir() {
      this.show = true;
    },
    cerrar() {
      this.$refs.dialog.hide();
    },
  },
};
</script>

<style></style>

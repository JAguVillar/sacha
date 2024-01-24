<template>
  <div>
    <q-table
      :title="title"
      :rows="data"
      :columns="columns"
      row-key="name"
      no-data-label="Sin datos"
      :rows-per-page-options="[0]"
      style="box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px; border-radius: 10px"
      class="texto-cuerpo"
    >
      <template v-slot:pagination>
        <span>{{ `${pagTotalItems} resultados` }}</span>
        <q-pagination
          v-model="current"
          :max="pagTotal"
          :max-pages="7"
          direction-links
          flat
          color="grey"
          active-color="black"
          round
          active-design="unelevated"
        />
      </template>
      <template v-slot:body="props">
        <slot v-bind="props"></slot>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
    columns: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      current: 1,

      pagTotal: null,
      pagTotalItems: null,

      cargando: false,

      data: [],
    };
  },
  async created() {
    this.params.nroPagina = 1;
    await this.getDatos();
  },
  watch: {
    async current() {
      this.params.nroPagina = this.current;
      await this.getDatos();
    },
  },
  mounted() {},
  methods: {
    async recargar() {
      await this.getDatos();
    },
    async getDatos() {
      this.cargando = true;
      let respuestaApi = await this.$maca.api.get(this.url, this.params);
      //

      this.cargando = false;

      // Procesar respuesta
      if (respuestaApi.estado >= 200 && respuestaApi.estado < 300) {
        this.pagTotal = respuestaApi.datosPaginado.pagTotal;
        this.pagTotalItems = respuestaApi.datosPaginado.pagTotalItems;
        this.data = respuestaApi.datos;
        this.$emit("rowsUpdated", this.data);
      } else {
      }
    },
  },
};
</script>

<style></style>

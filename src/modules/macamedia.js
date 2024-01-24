// Herramientas
import ListJsonManager from './macamedia/utils/listJsonManager/index.js'
import api from './macamedia/utils/api/index.js'
import eventStrings from './macamedia/utils/event_string.js'
import common from './macamedia/utils/common.js'

// Componentes
import MacaDatatable from './macamedia/components/datatable/index.vue'
import MacaModal from './macamedia/components/modal/index.vue'
import MacaImageList from './macamedia/components/imagelist/index.vue'

// css
import "./macamedia/assets/transitions.scss"

export const install = ({ app }) => {

  app.component('MacaDatatable', MacaDatatable)
  app.component('MacaModal', MacaModal)
  app.component('MacaImageList', MacaImageList)

  app.config.globalProperties.$maca = {
    common,
    eventStrings,
    api,
    listJsonManager: ListJsonManager,
    esMovil: () => {
      return window.outerWidth <= 768
    },
  }

}

import moment from 'moment/min/moment-with-locales'

// Dada una fecha que moment pueda procesar,
// devolver una fecha con formato DD/MM/YYYY
function formatearFecha(fecha) {
  if (fecha == '' || fecha == null)
    return ''

  const date = moment(fecha)

  if (!date.isValid())
    return ''

  return date.format('DD/MM/YYYY')
}

// Dada una fecha que moment pueda procesar,
// devolver una fecha con formato YYYY-MM-DD
function formatearFechaEstandarISO(fecha) {
  if (fecha == '' || fecha == null)
    return ''

  const date = moment(fecha)

  if (!date.isValid())
    return ''

  return date.format('YYYY-MM-DD')
}

// Dada una fecha que moment pueda procesar,
// devolver una fecha con formato DD/MM/YYYY hh:mm
function formatearFechaHora(fecha) {
  if (fecha == '' || fecha == null)
    return ''

  const date = moment(fecha)

  if (!date.isValid())
    return ''

  return moment(fecha).locale('es').format('DD MMM YYYY hh:mm')
}

// Dada una fecha que moment pueda procesar,
// devolver una fecha con formato DD/MM/YYYY hh:mm
function formatearHoraDeFecha(fecha) {
  if (fecha == '' || fecha == null)
    return ''

  const date = moment(fecha)

  if (!date.isValid())
    return ''

  return moment(fecha).format('hh:mm')
}

// Dada una hora de formato hh:mm:ss, devolver hh:mm
function formatearHora(hora) {
  if (hora == null)
    return

  return hora.substr(0, 5)
}

// Activar animacion en eventos click
function toggleAnimation(evento, clase) {
  // Agregar clase al elemento. Si la clase ya estaba, toggle devuelve false
  // y la elimina
  let anim = evento.target.classList.toggle(clase)

  // si la clase ya estaba, agregarla otra vez para volver a reproducir la anim
  // esperar un poco hasta que vue termine de ejecutar la instruccion anterior
  if (!anim) {
    setTimeout(() => {
      anim = evento.target.classList.toggle(clase)
    }, 50)
  }
}

function comprobarPermiso(state, codigo) {
  let result = false

  if (state.permisos == null)
    return false

  for (let i = 0; i < state.permisos.length; i++) {
    if (state.permisos[i].code == codigo)
      return true
  }

  return result
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatearMoneda(value) {
  let func = Intl.NumberFormat("es-ar");
  return func.format(value);
}

export default {
  formatearFecha,
  formatearFechaHora,
  formatearHora,
  formatearHoraDeFecha,
  toggleAnimation,
  formatearFechaEstandarISO,
  comprobarPermiso,
  sleep,
  formatearMoneda
}

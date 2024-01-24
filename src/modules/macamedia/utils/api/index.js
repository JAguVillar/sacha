import axios from 'axios';
import qs from 'qs';
import { storePinia } from '@/stores';
import router from '@/router/index.js';

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
  headers: {
    // 'Content-Type': 'multipart/form-data',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'indices' }),
  withCredentials: true,

});

client.interceptors.response.use((response) => {


  return response;
});



function downloadFile(url, nombre = 'file.pdf', urlParams = {}) {
  return client
    .get(url, {
      responseType: 'blob',
      params: urlParams,
    })
    .then(async (response) => {
      try {
        const respuestajson = JSON.parse(await response.data.text());
        const resultado = {
          estado: respuestajson.estado,
          mensaje: respuestajson.mensaje,
          excepcion: respuestajson.excepcion,

        };
        return resultado;
      } catch (error) {

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', nombre);
        document.body.appendChild(link);
        link.click();

        const resultado = {
          estado: 1,
          mensaje: '',
          excepcion: '',

        };

        return resultado;
      }
    }).catch((error) => {
      //control de las cookies, si se vencen o se eliminan
      if (error.response.status == 401 || error.response.status == 419) {
        const userStore = storePinia();
        userStore.logout();
        router.push("/login");
      }
      //////////////////////////////////////////////////////////////////////
    });
}

function downloadFilePost(url, formData, nombre = 'file.pdf', urlParams = {}) {
  return client
    .post(url, formData, {
      responseType: 'blob',
      params: urlParams,
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', nombre);
      document.body.appendChild(link);
      link.click();

      return true;
    });
}

export default {
  async get(url, queryParams = {}) {
    return client.get(url, {
      params: queryParams,
    })
      .then((response) => {
        const resultado = {
          estado: response.data.estado,
          mensaje: response.data.mensaje,
          excepcion: response.data.excepcion,
          datos: response.data.datos != null ? response.data.datos.datos : null,
        };
        if (response.data.datos != null) {
          resultado.datosPaginado = {
            pagTotal: response.data.datos.pagTotal ? response.data.datos.pagTotal : 0,
            pagActual: response.data.datos.pagActual ? response.data.datos.pagActual : 0,
            pagTotalItems: response.data.datos.pagTotalItems ? response.data.datos.pagTotalItems : 0,
          };
        }
        return resultado;
      }).catch((error) => {
        //control de las cookies, si se vencen o se eliminan
        if (error.response.status == 401 || error.response.status == 419) {
          const userStore = storePinia();
          userStore.logout();
          router.push("/login");
        }
        //////////////////////////////////////////////////////////////////////

        const resultado = {
          estado: error.response.status,
          mensaje: error.response.data.mensaje,
          excepcion: error.response.data.excepcion,
          datos: error.response.data.datos,
          datosPaginado: {
            pagTotal: 0,
            pagActual: 0,
            pagTotalItems: 0,
          }
        };
        if (resultado.datos.errores !== undefined) {
          resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
        }
        return resultado;
      });
  },
  async post(url, params = {}) {
    return client.post(url, params)
      .then((response) => {
        const resultado = {
          estado: response.data.estado,
          mensaje: response.data.mensaje,
          excepcion: response.data.excepcion,
          datos: response.data.datos != null ? response.data.datos.datos : null,
        };
        if (response.data.datos != null) {
          resultado.datosPaginado = {
            pagTotal: response.data.datos.pagTotal,
            pagActual: response.data.datos.pagActual,
            pagTotalItems: response.data.datos.pagTotalItems,
          };
        }
        return resultado;
      }).catch((error) => {
        //control de las cookies, si se vencen o se eliminan
        if (error.response.status == 401 || error.response.status == 419) {
          const userStore = storePinia();
          userStore.logout();
          router.push("/login");
        }
        //////////////////////////////////////////////////////////////////////
        const resultado = {
          estado: error.response.status,
          mensaje: error.response.data.mensaje,
          excepcion: error.response.data.excepcion,
          datos: error.response.data.datos,
        };
        if (resultado.datos.errores !== undefined) {
          resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
        }
        return resultado;
      });
  },
  async postMultipart(url, params = {}) {
    return client.post(url, params, {
         headers: {
              'Content-Type': 'multipart/form-data',
         },   
      })
      .then((response) => {
        const resultado = {
          estado: response.data.estado,
          mensaje: response.data.mensaje,
          excepcion: response.data.excepcion,
          datos: response.data.datos != null ? response.data.datos.datos : null,
        };
        if (response.data.datos != null) {
          resultado.datosPaginado = {
            pagTotal: response.data.datos.pagTotal,
            pagActual: response.data.datos.pagActual,
            pagTotalItems: response.data.datos.pagTotalItems,
          };
        }
        return resultado;
      }).catch((error) => {
        //control de las cookies, si se vencen o se eliminan
        if (error.response.status == 401 || error.response.status == 419) {
          const userStore = storePinia();
          userStore.logout();
          router.push("/login");
        }
        //////////////////////////////////////////////////////////////////////
        const resultado = {
          estado: error.response.status,
          mensaje: error.response.data.mensaje,
          excepcion: error.response.data.excepcion,
          datos: error.response.data.datos,
        };
        if (resultado.datos.errores !== undefined) {
          resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
        }
        return resultado;
      });
  },
  async putMultipart(url, params = {}) {
    return client.post(url, params, {
      params: {
        _method: 'PUT',
      },
      headers: {
        'Content-Type': 'multipart/form-data',
   },   
    }).then((response) => {
      const resultado = {
        estado: response.data.estado,
        mensaje: response.data.mensaje,
        excepcion: response.data.excepcion,
        datos: response.data.datos != null ? response.data.datos.datos : null,
      };
      if (response.data.datos != null) {
        resultado.datosPaginado = {
          pagTotal: response.data.datos.pagTotal,
          pagActual: response.data.datos.pagActual,
          pagTotalItems: response.data.datos.pagTotalItems,
        };
      }
      return resultado;
    }).catch((error) => {
      //control de las cookies, si se vencen o se eliminan
      if (error.response.status == 401 || error.response.status == 419) {
        const userStore = storePinia();
        userStore.logout();
        router.push("/login");
      }
      //////////////////////////////////////////////////////////////////////
      const resultado = {
        estado: error.response.status,
        mensaje: error.response.data.mensaje,
        excepcion: error.response.data.excepcion,
        datos: error.response.data.datos,
      };
      if (resultado.datos.errores !== undefined) {
        resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
      }
      return resultado;
    });
  },
  async put(url, params = {}) {
    return client.post(url, params, {
      params: {
        _method: 'PUT',
      },
    }).then((response) => {
      const resultado = {
        estado: response.data.estado,
        mensaje: response.data.mensaje,
        excepcion: response.data.excepcion,
        datos: response.data.datos != null ? response.data.datos.datos : null,
      };
      if (response.data.datos != null) {
        resultado.datosPaginado = {
          pagTotal: response.data.datos.pagTotal,
          pagActual: response.data.datos.pagActual,
          pagTotalItems: response.data.datos.pagTotalItems,
        };
      }
      return resultado;
    }).catch((error) => {
      //control de las cookies, si se vencen o se eliminan
      if (error.response.status == 401 || error.response.status == 419) {
        const userStore = storePinia();
        userStore.logout();
        router.push("/login");
      }
      //////////////////////////////////////////////////////////////////////
      const resultado = {
        estado: error.response.status,
        mensaje: error.response.data.mensaje,
        excepcion: error.response.data.excepcion,
        datos: error.response.data.datos,
      };
      if (resultado.datos.errores !== undefined) {
        resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
      }
      return resultado;
    });
  },
  async patch(url, params = {}) {
    return client.post(url, params, {
      params: {
        _method: 'PATCH',
      }
    }).then((response) => {
      const resultado = {
        estado: response.data.estado,
        mensaje: response.data.mensaje,
        excepcion: response.data.excepcion,
        datos: response.data.datos != null ? response.data.datos.datos : null,
      };
      if (response.data.datos != null) {
        resultado.datosPaginado = {
          pagTotal: response.data.datos.pagTotal,
          pagActual: response.data.datos.pagActual,
          pagTotalItems: response.data.datos.pagTotalItems,
        };
      }
      return resultado;
    }).catch((error) => {
      //control de las cookies, si se vencen o se eliminan
      if (error.response.status == 401 || error.response.status == 419) {
        const userStore = storePinia();
        userStore.logout();
        router.push("/login");
      }
      //////////////////////////////////////////////////////////////////////
      const resultado = {
        estado: error.response.status,
        mensaje: error.response.data.mensaje,
        excepcion: error.response.data.excepcion,
        datos: error.response.data.datos,
      };
      if (resultado.datos.errores !== undefined) {
        resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
      }
      return resultado;
    });
  },
  async delete(url, params = {}) {
    return client.delete(url, params).then((response) => {
      const resultado = {
        estado: response.data.estado,
        mensaje: response.data.mensaje,
        excepcion: response.data.excepcion,
        datos: response.data.datos != null ? response.data.datos.datos : null,
      };
      if (response.data.datos != null) {
        resultado.datosPaginado = {
          pagTotal: response.data.datos.pagTotal,
          pagActual: response.data.datos.pagActual,
          pagTotalItems: response.data.datos.pagTotalItems,
        };
      }
      return resultado;
    }).catch((error) => {
      //control de las cookies, si se vencen o se eliminan
      if (error.response.status == 401 || error.response.status == 419) {
        const userStore = storePinia();
        userStore.logout();
        router.push("/login");
      }
      //////////////////////////////////////////////////////////////////////
      const resultado = {
        estado: error.response.status,
        mensaje: error.response.data.mensaje,
        excepcion: error.response.data.excepcion,
        datos: error.response.data.datos,
      };
      if (resultado.datos.errores !== undefined) {
        resultado.mensaje = Object.values(resultado.datos.errores)[0][0];
      }
      return resultado;
    });
  },
  downloadFile,
  downloadFilePost,
};

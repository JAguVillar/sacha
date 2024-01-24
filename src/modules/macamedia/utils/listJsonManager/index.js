/*
Utilidad para convertir una lista de UI a JSON para la API y viceversa

Ej:

La API debe recibir...
detalleZona="[
  { empleadoZonaID: 0, zonaID: 4, accion: "A" },
  { empleadoZonaID: 0, zonaID: 7, accion: "A" }
]";
(Accion: A->Alta, M->Modificacion, B->Baja, N->Nada)

El usuario crea para un empleado zonas. Al crear el empleado, se agregan
zonas una por una y se envia a la API un json con el formato de arriba.
Al modificar el usuario, se recibe el json y se lo transforma en un
arreglo que la UI pueda entender. Al realizar operaciones en ese arreglo se
debe cambiar la accion a "M" o "B" dependiendo si se quiere modificar o dar
de baja la zona.

Se usa "M" aunque no se modifique el elemento. Porque "M" y "N" son lo mismo
si el usuario no modifica nada.

Notar que en el ejemplo existe "empleadoZonaID". El mismo se envia con valor 0
al momento del alta, y cuando retorna al obtener datos tiene un valor. El valor lo
setea la API. Entonces al modificar un empleado (con zonas), se debe utilizar
este valor en el JSON en vez de "0".

Ej:

Alta Empleado:
Nombre="Pepe"
detalleZona="[
  { empleadoZonaID: 0, zonaID: 4, accion: "A" },
  { empleadoZonaID: 0, zonaID: 7, accion: "A" }
]";

Modificar Empleado (se elimina la segunda zona):
empleadoID=8
Nombre="Pepe"
detalleZona="[
  { empleadoZonaID: 1, zonaID: 4, accion: "M" },
  { empleadoZonaID: 2, zonaID: 7, accion: "B" }
]";
*/

class ListJsonManager {
  // El nombre del atributo ID de los elemtos
  idName = "";

  // Atributo a ignorar al hacer .parse. Se usa porque la API
  // devuelve un valor adicional al traer datos.
  ignorarName = "";

  // La lista que se procesa y devuelve
  managedList = [];

  constructor(idName = "id", ignorarName) {
    this.idName = idName;
    this.ignorarName = ignorarName;
  }

  // procesar la lista que devuelve la API
  parse(objList) {
    // Validar el tipo del item
    if (objList == null) {
      return;
    }

    // agregar item por item a la lista
    objList.forEach(oItem => {
      let newItem = {};

      // La API devuelve "id" en vez de lo que se asigne en idName
      // usar "nombre" en vez del atributo que manda la API
      // para el nombre del elemento para estandarizar
      newItem[this.idName] = oItem.id;
      newItem["accion"] = "M";

      Object.keys(oItem).forEach(oItemKey => {
        // agregar los datos restantes
        if (oItemKey != "id" && oItemKey != this.ignorarName) {
          newItem[oItemKey] = oItem[oItemKey];
        }
      });

      this.managedList.push(newItem);
    });
  }

  // agregar un elemento manualmente a la lista
  add(obj) {
    // Validar el tipo del item
    if (obj == null) {
      return;
    }

    if (Object.keys(obj).length == 0) {
      return;
    }

    // Validar que el objeto no exista en la lista
    if (this.encontrarIndex(obj) != -1) {
      return;
    }

    // Crear nuevo objeto con atributes de la API y agregar a la lista
    let newItem = {};

    Object.assign(newItem, obj);

    newItem[this.idName] = 0;
    newItem.accion = "A";

    this.managedList.push(newItem);
  }

  // eliminar un elemento de la lista
  // normalmente "item" es un item de getUiList()
  remove(item) {
    let itemIndex = this.encontrarIndex(item);

    //convertir item de uiList a apiList para ver la accion
    item = this.managedList[itemIndex];

    if (itemIndex == -1) {
      return;
    }

    // Si el item no esta agregado en la api, solo borrarlo del arreglo
    // si no notificar a la API que lo elimine.
    if (item.accion == "A") {
      this.managedList.splice(itemIndex, 1);
    } else {
      item.accion = "B";
    }
  }

  // devolver la lista de elementos sin ID y sin accion
  getUiList() {
    let uiList = [];

    // agregar cada uno de los elementos, sacando accion e ID
    this.managedList.forEach(mItem => {
      let newUiItem = {};

      Object.keys(mItem).forEach(mItemKey => {
        if (mItemKey != this.idName && mItemKey != "accion") {
          newUiItem[mItemKey] = mItem[mItemKey];
        }
      });

      // ignorar los eliminados
      if (mItem.accion != "B") {
        uiList.push(newUiItem);
      }
    });

    return uiList;
  }

  // devolver la lista completa. Osea con ID y accion
  getApiList() {
    return this.managedList;
  }

  clear() {
    this.managedList = [];
  }

  // busca un item en la lista manejada de esta clase
  // si la encuentra (todos los atributos menos ID y "Accion" coinciden), devuelve
  // el index, sino devuelve -1;
  encontrarIndex(objetoVerificar) {
    let indexExiste = -1;

    for (let index = 0; index < this.managedList.length; index++) {
      const mListItem = this.managedList[index];

      // numero de datos coincidentes
      let atributosCoincidentes = [];
      Object.keys(mListItem).forEach(mItemKey => {
        Object.keys(objetoVerificar).forEach(newItemKey => {
          // comparar dato por dato, por item de la lista manejada. Ignorar el ID y la accion
          if (mItemKey != this.idName && mItemKey != "accion") {
            if (
              objetoVerificar[newItemKey] == mListItem[mItemKey] &&
              newItemKey == mItemKey
            ) {
              atributosCoincidentes.push({
                att: newItemKey,
                val: mListItem[mItemKey]
              });
            }
          }
        });
      });
      if (atributosCoincidentes.length == Object.keys(objetoVerificar).length) {
        indexExiste = index;
      }
    }

    return indexExiste;
  }
}

export default ListJsonManager;

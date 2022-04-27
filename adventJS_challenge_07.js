/*
=======Version rechazada
function contains(store, product) {
  let cadenaObjeto;
  cadenaObjeto = JSON.stringify(store);

  let resultado;
  resultado = cadenaObjeto.includes(product);

  return resultado;
}
*/

//Version Aceptada
function contains(store, product) {
    var res = false;
    for (var key in store) {
        var value = store[key];
        if (typeof value === 'object') {
            res = contains(value, product);
        } else {
            if (value === product) {
                return true;
            }
        }
    }
    return res;
}

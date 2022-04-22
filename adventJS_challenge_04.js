function createXmasTree(altura) {
  let arbol = '';
  let contador = 1;
  const partesArbol = {
    fondo : '_',
    hoja : '*',
    tronco : '#',
  }
  const {fondo, hoja, tronco} = partesArbol;

  for(let i = altura-1; i >= 0; i--){
    arbol += fila(hoja, fondo, i,  contador);
    contador += 2;
  }
  
  arbol += fila(tronco, fondo, altura -1 , 1);
  tree += fila(trunk, background, altura -1, 1);
  return arbol.trim()
} 

function fila(hoja, fondo, altura, contador){
  return `${fondo.repeat(altura)}${hoja.repeat(contador)}${fondo.repeat(altura)}\n`
}

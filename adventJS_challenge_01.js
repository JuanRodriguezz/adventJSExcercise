function contarOvejas(ovejas) {
  const ovejasFiltradas = [];
  
  ovejas.forEach(oveja =>{
    if (oveja.color === 'rojo' && oveja.name.toLowerCase().search('n') > -1 && oveja.name.toLowerCase().search('a') > -1){
      ovejasFiltradas.push(oveja);
    }
  })
  
  return ovejasFiltradas
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

function listGifts(letter) {
  const cartaSperada = letter.split(' ');
  let regalos = {}
  let regalo;

  cartaSperada.forEach(x => {
    regalo = x.trim();
        if(regalo.indexOf('_') === -1 && !regalo === false ){
         if (regalos[regalo] !== undefined) {
            regalos[regalo] += 1;
        } else {
            regalos[regalo] = 1;
        }
    }
})

  return regalos
}

const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)

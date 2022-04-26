function sumPairs(numbers, result) {
  let primerNumero
  let segundoNumero
  let sumatoria = []

  for(let i = 0; i< numbers.length; i++){
    primerNumero = numbers[i]
    for(let j = 0; j< numbers.length; j++){
      segundoNumero = numbers[j];
      if(i===j){
        continue;
      }
      if((primerNumero + segundoNumero) === result){
        sumatoria[0] = primerNumero
        sumatoria[1] = segundoNumero

        return sumatoria
      }else{
        continue
      }
    }
  }
  return null 
}


sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

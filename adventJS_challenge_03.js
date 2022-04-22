function isValid(letter) {
 // ¡No dejes que el Grinch gane!
  if(letter.indexOf('(') > -1 
    && letter.indexOf(')') > -1
    && letter.indexOf('(') < letter.indexOf(')')
  ){
      if(letter.includes("()") === true 
      || letter.indexOf('[') > -1 
      || letter.indexOf('{') > -1)
          return false
      else 
          return true
  }
  else {
    return false
  }   
}

/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

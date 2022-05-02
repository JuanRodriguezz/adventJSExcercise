function maxProfit(prices) {
  let compra = 0;
  let venta = 0;
  let ganancia = 0;
  let diferencia = 0;
  let arregloRestante = []

  for(let i = 0; i < prices.length; i++){
    compra = prices[i];
    arregloRestante = prices.slice(i+1)
    
    for(let j = 0; j < arregloRestante.length; j++){
      venta = arregloRestante[j]
      diferencia = venta - compra
      if(diferencia > ganancia){
        ganancia = diferencia
      }
    }
  }
  return ganancia || - 1
}

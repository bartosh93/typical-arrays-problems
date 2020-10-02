
exports.min = function min (array) {
  let maxi;
  
  if ( array === undefined || array.length == 0  ) {
    maxi = 0;
  }  
  else {
    maxi = array[0];  
    for(i=1; i < array.length ; i++){
        if (maxi < array[i] ) {
          maxi = maxi;
        }
        else {
            maxi = array[i];
        }
        
        }  
      }

  return maxi;
}

exports.max = function max (array) {
  let maxi;
  
  if ( array === undefined || array.length == 0  ) {
    maxi = 0;
  }  
  else {
    maxi = array[0];  
    for(i=1; i < array.length ; i++){
        if (maxi > array[i] ) {
          maxi = maxi;
        }
        else {
            maxi = array[i];
        }
        
        }  
      }

  return maxi;
}

exports.avg = function avg (array) {
  let result = 0;
  let resul = 0;
    if ( array === undefined || array.length == 0  ) {
      result = 0;}
      else {
        
        for(i=0; i < array.length; i++){
          resul += array[i];
        }
        result = resul / array.length;
      }
        
      
      return result;
    

      
      
}
  

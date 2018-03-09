function input(){
  var args = Array.from(arguments);
  var args = [...arguments];
  var lowerNumber = Math.min(...args);
  for(var i = lowerNumber; i >= 1; i--){
    for(var n = 0; n < args.length; n++){
      if( args[n] % i !== 0){
      break;
    }
  }
    if( n === args.length){
      return i;
    }
  }
}
 console.log(input(100,45,10,5,1));
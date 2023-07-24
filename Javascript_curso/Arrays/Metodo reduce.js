var numeros = new Array(1,2,3,4,5,6,7,8,9);

total = numeros.reduce(function(tot,numeros){
    return tot + numeros;
},0)
console.log(total)


//////////////////////////////
//Estudo de Arrays avançados//
//////////////////////////////

// filter() - Ele filtra e armazena o valor em um array, caso uma condição seja verdadeira

//filter inline
var numeros =[1,2,3,4,5,6,7,8,9];
var pares = numeros.filter(item => item % 2 === 0)
var impares = numeros.filter(item => item % 2 != 0)
console.log("Os valores pares são: "+pares)
console.log("Os valores ímpares são: "+impares)

//filter método
var valoresMaiores = numeros.filter(
    function(maiores){
       return maiores > 5
    }
);
console.log(valoresMaiores)

//filter function

function valoresMenores(menores){
    return menores < 5
}
var numerosMenores = numeros.filter(valoresMenores);
console.log(numerosMenores)

//metodo compacto
var numerosImpares = numeros.filter((valor)=>{
    return valor % 2 != 0;
});
console.log(numerosImpares)

//////////////////////
//Filter com Objetos//
//////////////////////

var produtos = [
    {id:1,descrição:"SmartPhone",categoria:"Eletronico"},
    {id:2,descrição:"Fogão",categoria:"Eletrodoméstico"},
    {id:3,descrição:"Tablet",categoria:"Eletronico"},
    {id:4,descrição:"Televisão",categoria:"Eletronico"},
    {id:5,descrição:"Radio",categoria:"Eletronico"},
    {id:6,descrição:"Geladeira",categoria:"Eletrodoméstico"}
]

var eletronicos = produtos.filter(item => item.categoria == "Eletronico");
console.log(eletronicos);
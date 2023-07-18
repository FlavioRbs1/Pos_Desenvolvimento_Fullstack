var arr = new Array(1,2,3,4,5,6,7,8,9)
console.log(arr)

var tamanhoArray = arr.length;
console.log(tamanhoArray)

console.log(arr.indexOf(5))

//iterando o array com for

var valores = new Array(1,2,3,4,5,6,7,8,9);

for(let i = 0; i < valores.length; i++){
    console.log("Posição: "+valores[i])
}

//Calcular a média de todos os numeros do array

var array = new Array(3,5,5,1,7,2,5,7)
tamanhoArray = array.length
var soma = 0
for( let i = 0; i < tamanhoArray;i++){
    soma = soma + array[i];
}
console.log(soma/tamanhoArray);

///////////////////////
/// MÉTODOS DE ARRAY///
///////////////////////

//Inverter o array reverse()
console.log(array)
console.log(array.reverse())

//substituição do separador do array join()
console.log(array.join("/"))
console.log(array.join(";"))
console.log(array.join("-"))
console.log(array.join("|"))
console.log(array.join(""))

//Retirar o primeiro elemento do array shift()
var retirado = array.shift();
console.log(retirado);
console.log(array);

//Cria o primeiro elemento do array shift()
var inserido = [array.unshift(111)]
console.log("Aqui começa o unshift: " + inserido);

//localizar posição do elemento no array indexOf()
console.log(array.indexOf(3))

//inserir elemento no final do array push()
array.push(7);
console.log(array)

// remove o ultimo elemento do array pop()
array.pop();
console.log(array)

// MONTE UM ARRAY QUE SÓ TENHA NUMERO POSITIVO
var arrayDeInteiros = new Array(-23,4,7,-52,-5,6,-6);
var arrayPositivo = new Array();

for( let i = 0; i < arrayDeInteiros.length;i++){
    if(arrayDeInteiros[i] >= 0){
        arrayPositivo.push(arrayDeInteiros[i])
    }
}
console.log(arrayPositivo);

//UTILIZANDO O MÉTODO splice()

var nomes = new Array("Lucas","Maria","Paulo","Sandra")
var cortado = nomes.splice(2,2)
console.log(nomes);
console.log(cortado);
console.log(nomes.splice(1))

// substituindo com splice

var nomes2 = new Array("Lucas","Maria","Paulo","Sandra")
var cortado2 = nomes2.splice(2,1,"PAULINO")
console.log(nomes2);
console.log(cortado2);

// manipulando com slice()
var pais = ["Brasil","Argentina","Uruguai","Paraguai","Bolivia","Chile"]
var osTresPrimeiros = pais.slice(0,3)
console.log(osTresPrimeiros);
console.log("O array pais segue intacto: "+pais)

//Concatenar com concat()

var novosPaises = ["Canadá","Mexico","Holanda"]
var concatPaises = pais.concat(novosPaises);
console.log(concatPaises)

// divida os meses em trimestre
var meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
var qtdMeses = meses.length
var primeiroTrimestre = meses.slice(0,3)
var segundoTrimestre = meses.slice(3,6)
var terceiroTrimestre = meses.slice(6,9)
var quartoTrimestre = meses.slice(9,12)
console.log("Meses do primeiro trimestre: "+primeiroTrimestre)
console.log("Meses do segundo trimestre: "+segundoTrimestre)
console.log("Meses do terceiro trimestre: "+terceiroTrimestre)
console.log("Meses do quarto trimestre: "+quartoTrimestre)
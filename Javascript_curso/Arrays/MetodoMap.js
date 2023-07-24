var numeros = new Array(1,2,3,4,5,6,7,8,9);

var num = numeros.map(function(valor){
    return valor * 2;
});
console.log(num);

var funcionarios = [
    {nome:"Luiz",idade:"14"},
    {nome:"Carlos",idade:"34"},
    {nome:"André",idade:"21"},
    {nome:"João",idade:"20"},
    {nome:"Lucas",idade:"11"},
]
 nomes = funcionarios.map(pessoa => pessoa.nome.concat(" Com Map"));
 console.log(nomes)
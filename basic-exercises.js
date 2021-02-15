//Escreva uma função que receba dois números e retorne o maior deles
function maiorDeDois(num1, num2){
    if(num > num2){ return num1; }
    else{ return num2; }
}
var resultado = maiorDeDois(19, 9);
console.log(resultado);

//Escreva uma função que receba dois números e retorne o menor deles
function menorDeDois(num1, num2){
    if(num2 > num1){ return num1; }
    else{ return num2; }
}

//Escreva uma função que receba um Array com 3 números e imprima eles em ordem
function ordenar(array){
    var orderedArray = array.sort((a,b) => a-b);
    for(let num of orderedArray){
        console.log(num);
    }
}
console.log(ordenar([23,30,29,24]));

//Escreva uma função que receba um Array com 5 números e retorne o maior deles
function maiorNum(array){
    var maior = array[0];
    for(let num of array){
        maior = maiorDeDois(num, maior);
    }
    return maior;
}
console.log(maiorNum([9,25,3,20,18]));

//Escreva uma função que receba um Array com 5 números e retorne a média deles
function media(array){
    var total = 0;
    for(let num of array){ total += num; }
    return total / array.length;
}

//Escreva uma função que receba um número e imprima se ele é par ou ímpar
function parOuImpar(num){
    if(num%2 == 0){ console.log("par"); }
    else{ console.log("impar"); }
}
const maior = maiorNum([9,25,3,20,32,18]);
parOuImpar(maior);

//Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar
function multiplosDe4(){
    for(let i=0; i<=100; i++){
        if(i % 4 == 0){ console.log("pi"); }
        else{ console.log(i); }
    }
}​
​multiplosDe4();

//Escreva uma função que receba um objeto e imprima suas propriedades
function propriedades(objeto){
    for(let propriedade in objeto){ console.log(propriedade); }
}
var pessoa = {nome: "Lorena", idade: 20, altura: 1.59 }
propriedades(pessoa);

//Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano referentes a essa data.
function data(d){
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return{
        dia: d.getDate(),
        mes: meses[d.getMonth()],
        ano: d.getFullYear()
    }
}
console.log(data(new Date(Date.now())));

//Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
function pessoas(listaDePessoas){
    var maiorAltura = 0;
    var menorAltura = 999;
    var idades = []
    for(let pessoa of listaDePessoas){
        maiorAltura = maiorDeDois(maiorAltura,pessoa.altura)
        menorAltura = menorDeDois(menorAltura, pessoa.altura)
        idades.push(pessoa.idade)
    }
    console.log(maiorAltura);
    console.log(menorAltura);
    console.log(media(idades));
}

pessoas([{altura: 1.8, idade: 23},
 {altura: 1.9, idade: 27},
 {altura: 1.65, idade: 33},
 {altura: 1.83, idade: 44},
 {altura: 1.91, idade: 45},
 {altura: 1.54, idade: 16}]);

//Escreva um programa que imprima o seguinte padrão
//*
//* *
//* * *
//* * * *
//* * * * *
function escada(altura){
    for(let i=1; i<=altura; i++){
        let string = "";
        for(let j=1 ;j<=i; j++){ string +="* "; }
        console.log(string);
    }
}

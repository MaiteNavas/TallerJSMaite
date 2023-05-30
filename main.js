//VARIABLES
let userName = "Maite";
let familyName = "Navas";
let age = 35;
let familyMembers = 4;
let animalFavorite = "dog";
let houseOwner = false;

console.log(userName);
console.log(familyName);
console.log(age);
console.log(familyMembers);
console.log(animalFavorite);
console.log(houseOwner);
document.write(userName);
document.write(familyName);
document.write(age);
document.write(familyMembers);
document.write(animalFavorite);
document.write(houseOwner);


let suma = age + familyMembers;
let resta = familyMembers - age;
let multiplicacion = familyMembers * 10;
let division = age / familyMembers;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
document.write(suma);
document.write(resta);
document.write(multiplicacion);
document.write(division);

console.log(userName + familyName + animalFavorite);
document.write(userName + familyName + animalFavorite);

// FUNCIONES
function bienvenida() {
     return "Hola, " + userName;
}
console.log(bienvenida());
document.write(bienvenida());

function sumar() {
    a = 2 ;
    b =7;
    return a + b;
}
console.log(sumar());
document.write(sumar());

function pares(num) {
    if (num % 2 == 0) {
        return "par";
    } 
    else {
        return "impar";
    }
}
console.log(pares(6));
document.write(pares(6));

//OBJETOS
const carro = {
    brand: "Ford",
    model: "Fiesta",
    caracteristicas: {
        color: "White",
        puertas: 5,
        year: 2007,
    }
}
function marca(){
    return carro.brand;
}
console.log(marca());
document.write(marca());

function puertas() {
    return carro.caracteristicas.puertas;
}
console.log(puertas());
document.write(puertas());

function colorCarro() {
    return carro.caracteristicas.color;
}
console.log(colorCarro());
document.write(colorCarro());

//ARRAYS

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printNumbers() {
    for (let i of numeros) {
        console.log(i)
    };  
}
printNumbers()

function addElemnt() {
    numeros.push(11);
    return console.log(numeros)
}
addElemnt()

function deletePair(){
    for(let i=0; i < numeros.length; i++) {
        if (numeros[i] %2 == 0) {
            numeros.splice(i,1);
            i--;
            }
        }
    return console.log(numeros)    
    }

deletePair(numeros);

function maxNumber() {
    return console.log(Math.max(...numeros));
}
maxNumber();

function minNumber() {
    return console.log(Math.min(...numeros));
}
minNumber();

let texto1 = "Esto Es Un Ejemplo De Texto";

function lowerCaseTexto() {
    return console.log(texto1.toLowerCase());
}
lowerCaseTexto();

function upperCaseTexto() {
    return console.log(texto1.toUpperCase());
}
upperCaseTexto();
/*
let nombres = ["patricia", "carlos", "rosa", "isaac"]
function camelCaseNombres() {
    for (let i = 0; i < nombres.length; i++) {
        nombres[i].toUpperCase()
    }
}
camelCaseNombres()
*/

//MANIPULACION DEL DOM
let button = document.getElementById("buttonId");
function buttonMessage() {
    return alert("Hola! Has hecho click en el botón")
}

document.getElementById("texto1").innerHTML = "este es el nuevo texto";

let nameList = ["Ana", "Lucía", "Lucas", "Pedro", "Jaime", "Carmen", "María", "Isaac", "Miguel", "Adela"];
/*
function printNameList() {
    let lista = document.createElement("ul");
    lista.textContent = nameList;
    return document.write(printNameList());
}
console.log(printNameList())
*/

function printNameList() {
    document.write(nameList)
}
printNameList()

//Hasta aquí he podido llegar, seguiré intentándolo ;)!!
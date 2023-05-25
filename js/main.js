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
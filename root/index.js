console.log("JavaScript-04. BrianSabatini - CoderHouse");
//constructores.
function Buzo(marca, color, talle, precio) {
    this.marca = marca;
    this.color = color;
    this.talle = talle;
    this.precio = precio;
}
function Campera(marca, color, talle, precio) {
    this.marca = marca;
    this.color = color;
    this.talle = talle;
    this.precio = precio;
}
// items creados.
const buzo1 = new Buzo("Rush", "Negro", "S", 2000);
const buzo2 = new Buzo("Adidas", "Rojo", "Xl", 3800);
const buzo3 = new Buzo("Nike", "azul", "L", 5100);
const camp1 = new Campera("Rip Curl", "Gris", "M", 12000);
const camp2 = new Campera("Rusty", "Negro", "L", 7400);
const camp3 = new Campera("Fila", "Gris y negro", "M", 24500);
console.log("Buzos guardados");
console.log(buzo1);
console.log(buzo2);
console.log(buzo3);
console.log("Camperas guardadas");
console.log(camp1);
console.log(camp2);
console.log(camp3);

//--------------------------------------------------------------
//front dinamica.
let userName = prompt("Bienvenido! ingrese su Nombre");
let selecUsuario = prompt("Hola " + userName + ". ¿Que producto va a ingresar, buzo o campera?.");
if (selecUsuario === "buzo") {
    let marcaIn = prompt("ingrese la marca:");
    let colorIn = prompt("ingrese el color:");
    let talleIn = prompt("ingrese el talle:");
    let precioIn = prompt("ingrese el precio:");
    console.log(buzo4);
}
else if (selecUsuario === "campera") {
    let marcaIn2 = prompt("ingrese la marca:");
    let colorIn2 = prompt("ingrese el color:");
    let talleIn2 = prompt("ingrese el talle:");
    let precioIn2 = prompt("ingrese el precio:");
    console.log(camp4);
}
// nueva entrada.
const buzo4 = new Buzo(marcaIn, ColorIn, talleIn, precioIn);
const camp4 = new Campera(marcaIn2, ColorIn2 ,talleIn2, precioIn2);







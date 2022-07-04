console.log("JavaScript-04. BrianSabatini - CoderHouse");
function Buzo (marca, color, talle){
    this.marca = marca;
    this.color = color;
    this.talle = talle;    
}
function Campera (marca, color, talle){
    this.marca = marca;
    this.color = color;
    this.talle = talle;
}

const buzo1 = new Buzo ("Rush", "Negro", "S");
const buzo2 = new Buzo ("Adidas", "Rojo", "Xl");
const buzo3 = new Buzo ("Nike", "azul", "L");
const Camp1 = new Campera ("Rip Curl", "Gris", "M");
const Camp2 = new Campera ("Rusty", "Negro", "L");
const Camp3 = new Campera ("Fila", "Gris y negro", "M");

let NombreApellido = prompt("Bienvenido! ingrese su Nombre y Apellido");
let ItemUsuario = prompt("Hola " + NombreApellido + ". ¿que esta buscando, buzo o campera?.");

if (ItemUsuario === "buzo") {
    alert("buzooooo");
} else {
    (ItemUsuario === "campera")
    alert("camperaaaa")
}
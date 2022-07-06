console.log("JavaScript-04. BrianSabatini - CoderHouse");
//constructores.
function Buzo(marca, color, talle, precio) {
    this.marca = marca;
    this.color = color;
    this.talle = talle;
    this.precio = precio;
}
//constructor con class.
class Campera {
    constructor(marca, color, talle, precio) {
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
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


//----------------------------------------

//front dinamica.
let userName = prompt("Bienvenido! ingrese su Nombre");
console.log(userName + " ingreso a la app");
let selecUsuario = prompt("Hola " + userName + ". ¿Que producto vas a ingresar, buzo o campera?.");
//ingreso de articulo tipo buzo con array.
if (selecUsuario === "buzo") {
    let marcaIn = prompt("ingrese la marca:");
    let colorIn = prompt("ingrese el color:");
    let talleIn = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioIn = prompt("ingrese el precio -sin el signo $-:")
    //array
    let buzoArr = [precioIn, talleIn, colorIn, marcaIn];
    buzoArr.reverse();//meti esto aca como para dar por entendido esta herramienta. saludos!
    console.log(userName + "ingreso un nuevo item");
    console.log(buzoArr);
}
//ingreso de articulo tipo campera
else if (selecUsuario === "campera") {
    let marcaIn2 = prompt("ingrese la marca:");
    let colorIn2 = prompt("ingrese el color:");
    let talleIn2 = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioIn2 = prompt("ingrese el precio -sin el signo $-:");
    // otro array.
    let campArr = [marcaIn2, colorIn2, talleIn2, precioIn2];
    console.log(userName + "ingreso un nuevo item");
    console.log(campArr);
}
alert("Operacion realizada con exito.")
alert(userName + "!!! Gracias por ser parte de nuestro equipo!. Vamos a realizar un sorteo sorpresa el 21/04 para todos los colaboradores, y queremos que tengas tu numero!.")
for (let i = 1; i < 150; i++) {
    alert("!!!" + userName + " tu numero de sorteo es el numero " + i + "!!!")
    console.log(userName + " recibio el numero " + i);
    break;
}











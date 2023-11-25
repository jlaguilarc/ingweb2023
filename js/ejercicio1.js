var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));


var mayor, menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
} else {
    menor = numero3;
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);
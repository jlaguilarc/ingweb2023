let numero = 15;

const num1 = 5;

let numerosPrimos = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
const lenguajes = [ "PHP", "JAVA", "PYTHON", "GO"];

console.log("Numero: "+numero);

console.log(numerosPrimos);
console.log(lenguajes);
console.log("Tamaño numeros: "+numerosPrimos.length);
console.log("Tamaño lenguajes: "+lenguajes.length);
/*
for(let i=0;i<numerosPrimos.length;i++){
    if(numerosPrimos[i]%2==0){
        console.log(`La posición No ${i} es par`);
    }else{
        console.log(`La posición No ${i} es impar`);
    }
    console.log("La posición No "+i+" Es el numero "+numerosPrimos[i]);
    console.log(`La posición No ${i} es igual a ${numerosPrimos[i]}`);
}*/
let impar = [];
let par = [];

for(let i=0;i<numerosPrimos.length;i++){
    if(numerosPrimos[i]%2==0){
        par.push(numerosPrimos[i]);
    }else{
        impar.push(numerosPrimos[i]);
    }
}

let listar = document.getElementById("listar");

par.forEach((elemento) =>{
    listar.innerHTML += `<li>${elemento}</li>`
});

console.log("Arreglo numeros impares "+impar);
console.log("Arreglo numeros pares "+par);
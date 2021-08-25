console.log(!true);
console.log(!false);
console.log(!!false);
console.log(!!true);
console.log(!1);
console.log(!!1);
console.log(!0);
console.log(!!0);
console.log(!!"");
let x = 5;
let y = 9;
console.log (x < 10 && x !==5);
console.log (x>9 || x ===5);
console.log (!x===y);

//Ejercicio 2
let x = 10;
let y ="a";
console.log (y === "b" || x >= 10);

let x = 3
let y = 8
console.log (!(x =="3"|| x ===y)&& !(y !== 8 && x <=y));

let str = ""
let msj = "jaja!"
let esGracioso = "false"
console.log (!((str || msj) && esGracioso))
 
//Ejercicios Code
let edad = 12;
let altura = 130

console.log (edad > 12 && altura > 130);

let Suficiente_luz = true;
let Objeto_rapido = true;

console.log (Suficiente_luz === true && Objeto_rapido === true && "flash");

//declaracion de variables

//var declarations
var a = 10;

function f() {
    var message = "Hello World";
    return message;
}

function f1() {
    var x = 10;
    return function g() {
        var x1 = x + 1;
        return x1; 
    }
}
var g = f1();
g();//devuelve 11

function f2() {
    var a2 = 1;
    
    a2 = 2;
    var b2 = g2();
    a2 = 3;
    
    function g2() {
        return a2;
    }
}
f2(); //returns 2

//scoping rules
function f3(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x3 = 10;
    }
    return x3;
}

f3(true); //return 10
f3(false); //return undefinied

//error siempre imprime 10
for (var i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);}, 100 * i);
}
//la forma correcta usando IIFE - Immediately Invoked Function Expression 
//para capturar el valor de i en cada iteracion
for (var i = 0; i < 10; i++) {
    //capturar el valor de i
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 100 * i);
    })(i);
}

//declaracion LET
let hello = "Hello";

function fLet(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1; //el scope esta dentro del if
        return b;
    }
    //return b;//comentado porque da error, b no existe
}

try {
    throw "ups!!";
} catch (e) {
    console.log("Oh nooo");
}
//console.log(e);//error 'e' no existe

function llamado() {
    return llamandoA;
}
//llamada ilegal 'llamado' es antes que 'llamandoA' sea declarado
llamado();
let llamandoA;

function estamal(x) {
    var x;
    var x;
    if (true){
        var x;
    }
}

let declaroA = 10;
//let declaroA = 20; //no puedo declararlo 2 veces con el mismo nombre

function nosepuede(x) {
    //let x = 100;//interfiere con el nombre del parametro de la funcion
}
function tampocosepuede() {
    let x = 100;
    //var x = 200;//ya lo declare con el mismo nombre
}

//mantiene consistencia con el scope de la definicion
function usandoScope(condicion, x) {
    if (condicion) {
        let x = 100;
        return x;
    }
    return x;
}
usandoScope(false, 0); //devuelve 0 
usandoScope(true, 0); //devuelve 100 

//evitando el shadowing de variables con let
function sumaMatriz(matrix: number[][]): number {
    let sum: number = 0;
    for (let i = 0; i < matrix.length; i++){
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

//block-scoped variable capturing
function obtenerCiudad() {
    let getCiudad;
    
    if (true) {
        let ciudad = "Buenos Aires";
        getCiudad = function() {
            return ciudad;
        }
    }
    return getCiudad();
}

//usando let con setTimeout para una correcta implementacion de IIFE
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100 * i);
}

//Declaraciones CONST
//variables inmutables, no se puede reasignar
const numVidas = 9;

const kies = {
    name: "Aurora",
    numLives: numVidas,
}
/*
kies = {
    name = "Daniel",
    numLives = 10,
}*///error
//si se puede modificar las propiedades internas del objeto
kies.name = "Alonso";
kies.name = "Peter";
kies.numLives--;

//Destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first);//imprime 1
console.log(second);//imprime 2

//es lo mismo que:
first = input[0];
second = input[1];

//swap de variables
[first, second] = [second, first];

function esteSI([uno, dos]: [number, number]) {
    console.log(uno);
    console.log(dos);
}
esteSI([300, 400]);

let [primero, ...resto] = [1, 2, 3, 4, 5];
console.log(primero);//1
console.log(resto);//2, 3, 4, 5
let [soloelprimero] = [1, 2, 3, 4, 5];
//alternados
let [, segundo, ,cuarto] = [1, 2, 3, 4];

//destructurin objetos
let o = {
    pais: 'foo',
    cantidad: 12,
    provincia: 'bar',
}
let {pais, cantidad} = o;

let simil1;
let simil2;
({simil1, simil2} = {simil1: 'alfabeto', simil2: 1200});

//usar otros nombres
let {pais: mipais, cantidad: micantidad} = o;
console.log(micantidad);
console.log(mipais);

let otro = {
    otroA: 123,
    otroB: 'pepe',
    otroC: [1, 2, 3],
};
//el tipo se define luego
let {otroA, otroB}: {otroA: number, otroB: string} = otro;

//valores por defecto porque puede no llegar una propiedad
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1000} = wholeObject;
}

//se puede utilizar en la declaración de funciones
type C = {a: string, b?: number};
function endeclaraciondefunciones({a, b}: C): void {
    //todo lo demas
}
//con valores por defecto
function endeclaraciondefunciones2({a, b} = {a: "", b: 0}): void {
    //bla bla bla
}
endeclaraciondefunciones2();//esto es correcto

function compleja({a, b = 0} = {a: ""}): void {
    //...
}
compleja({a: "yes"}); //ok, el default b = 0
compleja(); //ok, default {a: ""}, luego b = 0
//compleja({}); //error 'a' es requerido como argumento si se pasa un objeto
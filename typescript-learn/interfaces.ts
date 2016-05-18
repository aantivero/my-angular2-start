//primera interfaz
interface LabelledValue {
    label: string;
}

function imprimirLabel(labelledObject: LabelledValue) {
    console.log(labelledObject.label);
}

let primerObj = {size: 10, label: "size 10 object"};
imprimirLabel(primerObj);

//propiedades opcionales porque no todas pueden ser requeridas
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function crearSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let micuadrado = crearSquare({color: "negro"});
//excess property checks
let otrocuadrado = crearSquare({colour: "rojo", width: 1000} as SquareConfig);

let squareOptions = {colour: "red", width: 300};
let miocuadrado = crearSquare(squareOptions);

//function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}
//luego de definida la puedo utilizar en una funcion 
//el nombre de los parametros no necesariamente se llaman igual
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

//indexable types
//tiene un index signature que declara el tipo que usamos para indexar dentro del objeto
//Tengo un interfaz StringArray que tiene un index signature. 
//La firma establece que:
//Cuando se index con un número devuelve un string
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

//se soporta solo string y number
class Musica {
    name: string;
}
class Metal extends Musica {
    group: string;
}
//lo siguiente da error
/*
interface NotOkay {
    [x: number]: Musica;
    [x: string]: Metal;
}*/

//Dictionary Pattern
interface NumberDictionary {
    [index: string]: number;
    length: number; //ok, length es un numero
    //name: string; //error, name no es un numero 
}
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
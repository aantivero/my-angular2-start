//Any
let nop: any = 4;
nop = "puede ser string";
nop = false;

nop = 4;
nop.ifItExists();//puede ser q exista en runtime
nop.toFixed();

let casi: Object = 4;
//casi.toFixed();//error porque no existe 'toFixed' en el tipo 'Object'

//podemos usarlo en una lista
let listAny: any[] =  [1, true, 'free'];
listAny[1] = 100;

//Void lo contrario a Any
//mas usado en funciones que no retornan valor
function warnUser(): void {
    console.log("Alguna mensaje");
}
//en el caso de variables no tiene sentido porque tienen que se 'undefined' o 'null'
let unusable: void = undefined;

//type assertions
//es decir que sabemos mas de lo que typescript conoce
//'trust me, I know what I'm doing' 
//es un tipo de casteo. pueden ser de 2 tipos
//angle-bracket 
let someValue: any = "esto puede ser un string";
let strLength: number = (<string>someValue).length;
//la otra forma es 'as' syntax
let someValue2: any = "esto puede ser otro string";
let strLength2: number = (someValue2 as string).length;
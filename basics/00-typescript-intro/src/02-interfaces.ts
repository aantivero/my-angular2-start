//interface del tipo inline
var objWithIdentifier: {id: number} = {id: 2};
const objWithIdentifier2: {identification: number, name: string, values: string[]} = {
    identification: 100,
    name: 'special',
    values: ['AB', 'CD', 'EF']
};

interface IHaveAnIdentifier {
    id: number;
}

interface IHaveOneToo {
    id: number;
}

//se pueden declarar opcionales
interface IHaveOptionalDescription {
    desc?: string;
}

//interfaces pueden extender de otras interfaces
interface IHaveIdAndMaybeDescription 
    extends IHaveAnIdentifier, IHaveOptionalDescription {
}

//se puede especificar en la firma de la funcion
function showId(obj: IHaveAnIdentifier) {
    console.log(obj.id);
}

//puede utilizar las que fueron declaradas como opcionales
function showDesc(obj: IHaveOptionalDescription) {
    if (obj.desc) {
        console.log(obj.desc);
    }
}

//instancia
var myObject: IHaveOneToo = {id: 2000};
showId(myObject); // <-- es valido porque la firma coincide
showId({id: 3000}); // <-- sigue siendo valido porque la firma coincide
showId(<IHaveAnIdentifier>{id: 99}); // <-- es mas explicito que los anteriores
//showId({description: 'hello'}); // <-- no funciona porque no coincide

var myObjectWithDescription: IHaveIdAndMaybeDescription = {
    id: 1,
    desc: 'this is a complex object'
};
showDesc(myObjectWithDescription);

// <--las funciones tambien pueden tener interfaces
interface IXnPlusOne {
    (r: number, xn: number): number;
}

var bifurcation: IXnPlusOne = function(r, x) {
    return r*x*(1.0-x);
}

var r: number = 3, x: number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcation(r, x);
    console.log(x);
}

// <-- funciones con propiedades
interface IXnPlusOneWithCounter extends IXnPlusOne {
    counter: number;
}

var bifurcWithCnt: IXnPlusOneWithCounter = 
    <IXnPlusOneWithCounter> function(r, x) {
        bifurcWithCnt.counter += 1;
        return r * x * (1.0 - x);
    }
    
bifurcWithCnt.counter = 1000;

var r: number = 3.1, x: number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcWithCnt(r, x);
    console.log(bifurcWithCnt.counter + ' = ' + x);
}
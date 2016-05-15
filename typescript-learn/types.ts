//Boolean
let isDone: boolean = false;
//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//String
let color: string = "blue";
name = 'red';
//template string
let fullName: string = `Bob Bobbin`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month`;
//equivalent ->
let sentenceB: string = "Hello, my name is " + fullName + ".\n\n" + 
"I'll be " + (age + 1) + " years old next month";

//Array 
let list: number[] = [1, 2, 3, 4];
let listb: Array<number> = [2, 4, 6, 8];
let users: Array<User> = [
    new User("one", "ONE"),
    new User("two", "TWO"),
    new User("other", "another")
];

//Tuples
let x: [string, number];
x = ['hello', 101];
//acceder a un element
console.log(x[0].substr(1));
//console.log(x[1].substr(1)); error porque number no tiene substr
//acceder a un elemento por fuera del conjunto de indices conocidos se aplica un tipo de union
x[3] = 'world';//ok, string puede asignarse to (string | number)
console.log(x[5].toString());//ok, 'string' y 'number' tienen toString
//x[6] = true; error no puede asignarse

//ENUM
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
//por default los miembros empiezan con cero, se puede cambiar manualmente
enum ColorB {Red = 1, Green, Blue};
let cb: ColorB = ColorB.Green;
enum ColorX {Red = 2, Green = 4, Blue = 6};
let cx: ColorX = ColorX.Blue;

let colorName: string = ColorB[2];
alert(colorName);

//Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

//Classes
//los métodos y propiedades pueden ser de visibilidad private, public o protected
//private: visible solo dentro a la propia clase
//public: es visible por todas las clases
//protected: es visible a la clase y las clases hijas
class Greeter {
    greeting: string;
    //constructor 
    constructor(message: string){
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
var greeter = new Greeter("world");
//Herencia
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 5) {
        console.log("slithering...");
        super.move(meters);
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 45) {
        console.log("galloping...");
        super.move(meters);
    }
}

let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//Accessors (GET/SET)
class Persona {
    private _password: string;
    
    get password(): string {
        return this._password;
    }
    
    set password(p: string) {
        if (p != "123456") {
            this._password = p;
        } else {
            console.log("La password no puede ser : 123456");
        }
    }
}
let p = new Persona();
p.password = "123456";

//Static Methods
//es posible de crear metodos estaticos. 
//la tarea principal es que no pueda ser instanciada

class SystemAlert {
    static alert(message: string): void {
        alert(message);
    }
    
    static warm(message: string): void {
        alert("Atención: " + message);
    }
    
    static error(message: string): void {
        alert("Error: " + message);
    }
}

SystemAlert.alert("Hola Mundo");
SystemAlert.error("No es posible conectarse con la base de datos.");

//Interfaces 
interface Point {
    x: number;
    y: number;
    z: number;
}

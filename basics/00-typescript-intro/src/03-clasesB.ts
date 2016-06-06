interface IAnimal {
    name: string;
    sayName(): void;
}

class Animal implements IAnimal {
    private _name: string = '[Animal]';
    
    
    public get name() : string {
        return this._name;
    }
    
    
    public set name(name : string) {
        this._name = name;
    }
    
    constructor(name: string) {
        this.name = name;
    }
    
    sayName(): void {
        console.log(
            `My name is ${this.name}`
        );
    }
}

module ClassExampleB {
    export class Dog extends Animal {
        bark() {
            console.log('WOOF!');
        }
    }
}

var fido: IAnimal = new ClassExampleB.Dog("Fido");

fido.sayName();

(<ClassExampleB.Dog>fido).bark();
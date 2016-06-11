class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(1, 1);
var p2 = new Point(2, 2);
var x1 = p1.add(p2);

//herencia simple
class Point3D extends Point {
    z: number;

    constructor (x:number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    add(point: Point3D) {
        var point2D = super.add(new Point(point.x, point.y));
        return new Point3D(point2D.x, point2D.y, point.z);
    }
}

//variables static que se comparte con todas las instancias
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
//modificadores public private y protected
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
//efectos en instancias
var fooBase = new FooBase();
fooBase.x;//ok
//fooBase.y; Error: es privada
//fooBase.z; Error: es solamente accesible desde dentro de la clase e internas
class FooChild extends FooBase {
    constructor () {
        super();
        this.x;//ok
        //this.y;error es privada
        this.z;//ok
    }
}
//definiendo constructor con un propiedad publica 
class Foo {
    constructor (public x: number) {
    }
}
var foo = new Foo(1);
foo.x;
//inicilizando las propiedades
class Foo2 {
    members: any[] = []
    add(x: any) {
        this.members.push(x);
    }
}
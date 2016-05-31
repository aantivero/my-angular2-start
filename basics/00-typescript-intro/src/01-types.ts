//number 
var x:number = 1;
//var y:number = '2'; control del tipo declarado
console.log(x);

var str: string = "Esto es un texto";
console.log(str);

var checked: boolean = true;
console.log(checked);

var list: number[] = [1, 2, 3, 4, 0];
console.log(list);

enum LevelEnum {Bored = 42, Interested, Neutral};

let myInterestedLevel: LevelEnum = LevelEnum.Interested;
console.log("Your interested level is: " + LevelEnum[myInterestedLevel]);

function returnNothing(): void {
    console.log("This function is void return");
}

function returnsAny(): any {
    if (Math.random() < 0.5) {
        return "Less Then 0.5";
    }
    return 1;
}

console.log(returnsAny());
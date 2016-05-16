//primera interfaz
interface LabelledValue {
    label: string;
}

function imprimirLabel(labelledObject: LabelledValue) {
    console.log(labelledObject.label);
}

let primerObj = {size: 10, label: "size 10 object"};
imprimirLabel(primerObj);


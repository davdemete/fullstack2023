// función de flecha para la SUMA
const sumar = (param1,param2) => {
    return param1 + param2;
};
console.log(sumar(6,3));

// forma simplificada de la función de flecha
const sumarSimple = (param1,param2) => param1 + param2;
console.log(sumarSimple(6,3));

// función de flecha para RESTA
const restar = (param1,param2) => {
    return param1 - param2;
};
console.log(restar(6,3));
// forma simplificada de la función de flecha
const restarSimple = (param1,param2) => param1 - param2;
console.log(restarSimple(6,3));

// función de flecha para la multiplicación
const multiplicar = (param1,param2) => {
    return param1 * param2;
};
console.log(multiplicar(6,3));
// forma simplificada de la función de flecha
const multiplicarSimple = (param1,param2) => param1 * param2;
console.log(multiplicarSimple(6,3));

// función de flecha para la división
const dividir = (param1,param2) => {
    return param1 / param2;
};
console.log(dividir(6,3));
// forma simplificada de la función de flecha
const dividirSimple = (param1,param2) => param1 / param2;
console.log(dividirSimple(6,3));
let obj_1 = { x: 1, y: 2, z: 3 };
let obj_2 = { a: 1, y: 2, z: 1 };

let keys1 = Object.keys(obj_1); // [x ,y ,z ]
let keys2 = Object.keys(obj_2);

for (let i = 0; i < keys1.length; i++) {
    for (let j = 0; j < keys2.length; j++) {
        if ( keys1[i] == keys2[j] ) {
            console.log(`La key del obj_1: "${keys1[i]}" en la pos[${i}] es igual a la key del obj_2: "${keys2[j]}" en la pos[${j}]`);
        }
        // console.log(obj_1.keys1[i]); ASI NOOOOOOO
        if ( keys1[i] == keys2[j] && obj_1[keys1[i]] == obj_2[keys2[j]]) {
            console.log(`La key[${keys1[i]}] y valor[${obj_1[keys1[i]]}] de los obj_1 y obj_2 son IGUALES`);
        }
    }
}

const sumar = (op1, op2, callback) => {
    callback (op1 + op2);
};
sumar (2,4,(resultado) => {
    console.log(resultado);
});



let obj = { x: 1, y: 2 };
console.log("El objeto original es: ", obj);

delete obj.x;
console.log("El objeto después de eliminar la propiedad x es: ", obj);

obj.z = 5;
console.log("El objeto después de añadir la propiedad z es: ", obj);

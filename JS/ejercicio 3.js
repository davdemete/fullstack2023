let obj1 = { x: 1, y: 2, z: 3 };
let obj2 = { a: 1, y: 2, z: 1 };

console.log("Propiedades coincidentes en nombre:");
for (let prop in obj1) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log("\nPropiedades coincidentes en nombre y valor:");
for (let prop in obj1) {
  if (obj2.hasOwnProperty(prop) && obj2[prop] === obj1[prop]) {
    console.log(prop + ": " + obj1[prop]);
  }
}

const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  // Primera forma: usando la propiedad "Object.keys"
  console.log("Primera forma: usando la propiedad 'Object.keys'");
  const properties1 = Object.keys(student);
  for (const property of properties1) {
    console.log(property);
  }
  
  // Segunda forma: usando un ciclo "for in"
  console.log("\nSegunda forma: usando un ciclo 'for in'");
  for (const property in student) {
    console.log(property);
  }

  //Primera forma: usando la propiedad 'Object.keys'
sclass
rollno

  //Segunda forma: usando un ciclo 'for in'
sclass
rollno
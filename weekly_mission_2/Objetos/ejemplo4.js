// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Gabriel",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){ //sayhello asi se llama la funcion
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`) //this.name reemplaza name, porque es una funcion
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()//Se manda a llama el objeto pet con la funcion sayhello para que se ejecute
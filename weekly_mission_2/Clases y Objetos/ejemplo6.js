// Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 3
     this.exercises_todo = 99
    }
  
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {   //Se creo el get con getexcesersiscomplete mayusculas como funcion
          return this.exercises_completed   //Regresa los valores que tiene esa variable y los guarda en la parte de get
    }
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const woopa = new Ajolonauta("Woopa", 1, [])
  console.log(woopa.getExercisesCompleted) //Mostrara el valor especifico de una clase que hace uso de get
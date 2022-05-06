const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]
   console.log("--------------------------------------")
   explorers.forEach(nombre => console.log('Nombre Explorer: '+ nombre.name +' stack: '+ nombre.stack));
   
   console.log("--------------------------------------")
   const listastack = explorers.map((sta) => sta.stack);
   console.log(listastack);
   
   console.log("---------------------------------------")
   const listajs = explorers.filter((lis) => lis.stack.includes('js'))
   console.log(listajs)

   console.log("---------------------------------------")
   const queseadecdmx = explorers.find((cdmx) => cdmx.city === 'CDMX');
   console.log("El que vive en la CDMX es el: " + queseadecdmx.name);

  console.log("Suma de  de ejercicios completos usando reduce")
  const sumaejercicioscompletos = explorers.reduce ((acumulador, valoractual) =>  acumulador + valoractual.exercises_completed, 0)
  console.log(sumaejercicioscompletos);

  const siestrueconsome = explorers.some((t)=> t.exercisesFinished || true)
  console.log("es:"  + siestrueconsome);

  const siestrueconevery = explorers.every((name) => name.isFinished || true)
  console.log("es:" + siestrueconevery);

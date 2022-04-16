const Pokemon = require('./pokemon')

const pikachu = new Pokemon.constructor("pikachu")
const bulbasaur = new Pokemon.constructor("bulbasaur")
const squirtle = new Pokemon.constructor("squirtle")
const charmander = new Pokemon.constructor("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello() 
squirtle.sayMessage("Heey!")
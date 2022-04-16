/*
  export default nos permite exportar esta clase e importara

  import myPokemon from './pokemon.js'
*/

export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log(`${this.name} te saluda, dice "${message}"`)
    }
  }

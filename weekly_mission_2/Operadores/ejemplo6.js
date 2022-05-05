// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries6.map((countrie)=> countrie.toUpperCase().slice(0, 3));
console.log("Uso de map para convertir las primeras tres letras en mayúsculas");
console.log(countriesFirstThreeLetters);
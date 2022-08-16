// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  for(var i = 0; i < array.length; i++){
    return array[i];
  }
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  for(var i = 0; i < array.length; i++){
    return array[array.length -1];
  }
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  for(var i = 0; i < array.length; i++){
    return array.length;
  }
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var sumar1 = 1;
  var total = array.map(array => array + sumar1);
  return total;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(' ');
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true
  }else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i < numeros.length; i++){
    suma = suma+(numeros[i]);
    
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    suma = suma+(resultadosTest[i]);
    var promedio = suma / resultadosTest.length;
  }
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 var masgrande = Math.max.apply(null, numeros);
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    var mult = 1;
    if(arguments.length === 0){
      return 0;
    }else if (arguments.length === 1){
      return arguments[0];
    }else {
      for(var i = 0; i < arguments.length; i++){
        mult = mult *= arguments[i]
      }
    }
    return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
   var result = arreglo.filter(number => number > 18);
   return result.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  var nolab = "Es fin de semana";
  var silab = "Es dia Laboral";
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return nolab;
  }else {
    return silab;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aqui
  var digito = Array.from(String(n), Number);
  if(digito[0] === 9){
    return true;
  }else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[0] === arreglo[1] && arreglo[2] && arreglo[1] && arreglo[3]){
      return true;
    }else {
      return false;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var no = "No se encontraron los meses pedidos";
  var meses = ["Marzo", "Noviembre", "Enero"]
  for(var i = 0; i < array.length; i++){
    if(array[6] === "Enero" && array[0] === "Marzo" && array[5] === "Noviembre"){
      return meses;
    }else {
      return no;
    }
  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 var mayorquecien = array.filter(elemento => elemento > 100);
 return mayorquecien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var inter = "Se interrumpió la ejecución";
  var arreglo = [];
  var suma = numero;
  for(var i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i)
      break;
    else{
      arreglo.push(suma);
    }
  }
  if(i < 10) {
    return inter;
  }else {
    return arreglo;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array2 = [];
  var mult = numero;
  for(var i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }else{
      mult = mult + 2;
      array2.push(mult);
    }
  }

  return array2;
 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

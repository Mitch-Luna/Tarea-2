var arreglo_original = [1, 2, 3, 4, 5, 6];
var parametro = 2;    
var suma = 0;

const elementos_generados = arreglo_original.filter(numero => numero > parametro);
    console.log('Se filtran los numeros mayores a: 2');
    console.log( elementos_generados);

for (var i = parametro; i < arreglo_original.length; i++) {
    suma += arreglo_original[i];
}
console.log("La suma de todos los numeros filtrados es: " + suma);
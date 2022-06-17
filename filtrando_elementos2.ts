var arreglo_original = [1, 2, 3, 4, 5, 6];
var parametro = 4;

const result = arreglo_original.filter(numero => numero < parametro);
    console.log(arreglo_original);
    console.log('se filtran los numeros menores a: 4');
    console.log( result);
var objetos = [
    {
        nombre: 'Juan',
        sexo: 'M'
    },
    {
        nombre: 'Mario',
        sexo: 'M'
    },
    {
        nombre: 'Maria',
        sexo: 'F'
    },
    {
        nombre: 'Celeste',
        sexo: 'F'
    },
];

console.log('Arreglo original');

for (var i = 0; i < objetos.length; i++) {
    console.log(objetos[i]);
}

console.log('Nuevo arreglo');

const Nuevo_arreglo = objetos;

for (var i = 0; i < objetos.length; i++) {
    if (objetos[i].sexo === 'M') {
        objetos[i].nombre = `Sr. ${objetos[i].nombre}`;
    } else {
        objetos[i].nombre = `Srta. ${objetos[i].nombre}`;
    }
    console.log(Nuevo_arreglo[i]);
};











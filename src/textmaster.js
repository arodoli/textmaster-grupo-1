function reverse(text){
    return text.split('').reverse().join('');
}

// Exportamos las funciones que queremos que sean "públicas"
// para que los tests (y otras partes de la app) puedan usarlas.
// ¡No olvidar añadir la nueva función aquí!
module.exports = { reverse };
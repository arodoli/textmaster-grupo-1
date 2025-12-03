function reverse(text){
    return text.split('').reverse().join('');
}

function analyze(text){
    const longitud = text.length;

  // Dividir por espacios, filtrando vacíos para evitar contar dobles espacios
  const palabras = text.trim().split(/\s+/).filter(Boolean);
  const conteoPalabras = palabras.length;

  // Verificar si contiene al menos un dígito
  const tieneNumero = /\d/.test(text);

  return {
    longitud,
    conteoPalabras,
    tieneNumero
  };
}

// Esta función va a transformar el texto a mayúsculas o minúsculas dependiendo de la acción indicada.
function transform(text, action) {
  if (action === 'upper') {
    return text.toUpperCase();

  } else if (action === 'lower') {
    return text.toLowerCase();
  }
  return text; // Si la acción no es reconocida, devolver el texto sin cambios
}

// Exportamos las funciones que queremos que sean "públicas"
// para que los tests (y otras partes de la app) puedan usarlas.
// ¡No olvidar añadir la nueva función aquí!
module.exports = { reverse, analyze, transform };
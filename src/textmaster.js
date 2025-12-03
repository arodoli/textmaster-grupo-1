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

// Exportamos las funciones que queremos que sean "públicas"
// para que los tests (y otras partes de la app) puedan usarlas.
// ¡No olvidar añadir la nueva función aquí!
module.exports = { reverse, analyze };
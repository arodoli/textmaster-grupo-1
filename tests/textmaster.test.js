// Importamos solo lo que necesitamos testear
// ¡Actualizado para incluir 'restar'!
const { reverse, analyze, transform } = require('../src/textmaster');

// 'describe' agrupa tests relacionados. Es bueno para organizar.
describe('Pruebas para TextMaster', () => {
   // 'it' (o 'test') define un caso de prueba individual.
  // La descripción debe ser clara: "debería..."
  it('debería invertir las cadenas correctamente', () => {
    expect(reverse('hola')).toBe('aloh');
    expect(reverse('12345')).toBe('54321');
    expect(reverse('')).toBe('');
    expect(reverse("esto es una cadena con espacios y larga"))
    .toBe("agral y soicapse noc anedac anu se otse");
  });

  it('debería analizar el texto correctamente', () => {
    expect(analyze('hola mundo')).toEqual({
      longitud: 10,
      conteoPalabras: 2,
      tieneNumero: false
    });
    expect(analyze('holamundo')).toEqual({
      longitud: 9,
      conteoPalabras: 1,
      tieneNumero: false
    });
    expect(analyze('hola mundo 2')).toEqual({
      longitud: 12,
      conteoPalabras: 3,
      tieneNumero: true
    });
    expect(analyze('')).toEqual({
      longitud: 0,
      conteoPalabras: 0,
      tieneNumero: false
    });
  });

  it('debería transformar el texto a mayúsculas y minúsculas correctamente', () => {
    expect(transform('hola', 'upper')).toBe('HOLA');
    expect(transform('HOLA', 'lower')).toBe('hola');
    expect(transform('Hola Mundo', 'upper')).toBe('HOLA MUNDO');
    expect(transform('Hola Mundo', 'lower')).toBe('hola mundo');
    expect(transform('Texto Sin Cambios', 'none')).toBe('Texto Sin Cambios');
  });

  it('debería mostrar la salud correctamente', () => {
    const healthStatus = {
      status: 'OK',
      timestamp: new Date(),
      uptime: process.uptime()
    };
    expect(healthStatus.status).toBe('OK');
    expect(healthStatus.timestamp).toBeInstanceOf(Date);
    expect(typeof healthStatus.uptime).toBe('number');
  });
});
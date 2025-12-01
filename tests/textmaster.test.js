// Importamos solo lo que necesitamos testear
// ¡Actualizado para incluir 'restar'!
const { reverse } = require('../src/textmaster');

// 'describe' agrupa tests relacionados. Es bueno para organizar.
describe('Pruebas para TextMaster', () => {
   // 'it' (o 'test') define un caso de prueba individual.
  // La descripción debe ser clara: "debería..."
  it('debería invertir las cadenas correctamente', () => {
    
    // 'expect()' es la función de aserción de Jest.
    // .toBe() es un "comparador" (matcher) que usa === (igualdad estricta).
    expect(reverse('hola')).toBe('aloh');
    expect(reverse('12345')).toBe('54321');
    expect(reverse('')).toBe('');
    
  });
});

  
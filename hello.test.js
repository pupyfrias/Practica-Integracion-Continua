const sayHello = require('./hello');

test('debería retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});

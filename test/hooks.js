const { expect } = require("chai");
const { describe, it, before, after, beforeEach, afterEach } = require("mocha");

describe.only('Hooks', () => {
    before(() => console.log('before ALL - Se ejecuta al inicio una sola vez'));
    after(() => console.log('after ALL - Se ejecuta al final de todas las pruebas'));
    beforeEach(() => console.log('before Each - Ejecutando antes de todos los Its'));
    afterEach(() => console.log('after Each - Ejecutando después de todos los Its'));

    it('Prueba1', () => {
        console.log('Prueba Test 1');
    });

    it('Prueba2', () => {
        console.log('Prueba Test 2');
    });
});
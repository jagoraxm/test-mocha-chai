const { describe, it } = require("mocha");

describe('Sumas', () => {
    // Suma de positivo con positivio
    it('Suma de positivo con positivio', () => {
        console.log(2 + 2);
        console.log(4);
    });

    // Suma de positivo y mayor que el segundo negativo es positivo
    it('Suma de positivo y mayor que el segundo negativo es positivo', () => {
        console.log(3 + (-2));
        console.log(1);
    });
});
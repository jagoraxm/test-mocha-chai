const { expect } = require("chai");
const { describe, it } = require("mocha");

describe.only('Boolean test', () => {
    const numero = 2;

    it('El valor de true es verdadero', () => {
        expect( true ).to.equal(true);
        expect( true ).to.be.true;
    });

    it('El valor de false es falso', () => {
        expect( false ).to.equal(false);
        expect( false ).to.be.false;
    });

    it('1 es de tipo número', () => {
        expect( 1 ).to.be.a('number');
        expect( typeof 1 ).to.equal('number');
    });

    it('1 NO es de tipo string', () => {
        expect( typeof 1 === 'string' ).to.be.false;
    });

    it('1 NO es de tipo booleano', () => {
        expect( typeof 1 === 'boolean' ).to.be.false;
    });
});
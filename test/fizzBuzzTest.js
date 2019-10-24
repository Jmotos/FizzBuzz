const chai = require('chai'),
    should = chai.should(),
    itParam = require('mocha-param'),
    FizzBuzz = require('../src/fizzBuzz');

describe('Unit Test battery of FizzBuzz', () => {
    let fizzBuzz = new FizzBuzz();

    it('when 3 return Fizz', () => {
        let result = fizzBuzz.run(3),
            expected = 'Fizz';
        result.should.be.eql(expected);
    });
    itParam('when ${value} return Buzz', [5, 10, 20], (done, value) => {
        let result = fizzBuzz.run(value),
            expected = 'Buzz';
        result.should.be.eql(expected);
        done();
    });
});
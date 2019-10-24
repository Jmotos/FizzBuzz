const chai = require('chai'),
    should = chai.should(),
    itParam = require('mocha-param'),
    FizzBuzz = require('../src/fizzBuzz');

describe('Unit Test battery of FizzBuzz', () => {
    let fizzBuzz = new FizzBuzz();

    itParam('when ${value} return Fizz', [3, 6, 9], (done, value) => {
        let result = fizzBuzz.run(value),
            expected = 'Fizz';
        result.should.be.eql(expected);
        done();
    });
    itParam('when ${value} return Buzz', [5, 10, 20], (done, value) => {
        let result = fizzBuzz.run(value),
            expected = 'Buzz';
        result.should.be.eql(expected);
        done();
    });
    itParam('when ${value} return Buzz', [15, 30, 45], (done, value) => {
        let result = fizzBuzz.run(value),
            expected = 'FizzBuzz';
        result.should.be.eql(expected);
        done();
    });
    it('when 1 return 1', () => {
        let result = fizzBuzz.run(1),
            expected = '1';
        result.should.be.eql(expected);
    });
});
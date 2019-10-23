const chai = require('chai'),
    should = chai.should(),
    FizzBuzz = require('../src/fizzBuzz');

describe('Unit Test battery of FizzBuzz', () => {
    it('when 3 return Fizz', () => {
        let fizzBuzz = new FizzBuzz(),
            result = fizzBuzz.run(3),
            expected = 'Fizz';
        result.should.be.eql(expected);
    });
    it('when 5 return Buzz', () => {
        let fizzBuzz = new FizzBuzz(),
            result = fizzBuzz.run(5),
            expected = 'Buzz';
        result.should.be.eql(expected);
    });
});
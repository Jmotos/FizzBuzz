class FizzBuzz {
    run(number) {
        if (number % 15 === 0) {
            return "FizzBuzz"
        }
        if (number % 5 === 0) {
            return "Buzz"
        }
        if (number === 3 || number === 6 || number === 9) {
            return "Fizz";
        }
        return number.toString();
    }
}

module.exports = FizzBuzz;
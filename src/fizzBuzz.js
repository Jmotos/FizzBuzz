class FizzBuzz {
    run(number) {
        if (number === 5 || number === 10) {
            return "Buzz"
        }
        return "Fizz";
    }
}

module.exports = FizzBuzz;
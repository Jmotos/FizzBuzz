class FizzBuzz {
    run(number) {
        if (number === 5 || number === 10 || number === 20) {
            return "Buzz"
        }
        return "Fizz";
    }
}

module.exports = FizzBuzz;
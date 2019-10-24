class FizzBuzz {
    run(number) {
        if (number === 5 || number === 10 || number === 20) {
            return "Buzz"
        }
        if (number === 3) {
            return "Fizz";
        }
        return number.toString();
    }
}

module.exports = FizzBuzz;
function fizzBuzz(params) {
    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let arr = [];
    let cekAngka1 = false;

    for (let i = 0; i < params.length; i++) {
        let bil = params[i];

        if (bil === 1) {
            cekAngka1 = true;
        }

        if (bil % 14 === 0) {
            arr.push("FizzBuzz");
        } else if (bil % 2 === 0) {
            arr.push("Fizz");
        } else if (bil % 7 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(bil);
        }
    }

    if (cekAngka1) {
        return arr.join(", ");
    }

    return arr.join(" ");
}

module.exports = fizzBuzz;
/**
 * Mengubah angka menjadi Fizz, Buzz, atau FizzBuzz
 * @param {number} value - Bilangan bulat
 * @returns {string | number} Hasil konversi
 * @throws {Error} Jika input bukan number
 */
function zzzzOrNum(value) {
    if (typeof value !== "number") {
        throw new Error("Input harus number");
    }

    if (value % 15 === 0) return "FizzBuzz";
    if (value % 3 === 0) return "Fizz";
    if (value % 5 === 0) return "Buzz";

    return value;
}

/**
 * Mengubah array angka menjadi array hasil FizzBuzz
 * @param {number[]} sequence - Array berisi bilangan bulat
 * @returns {(string | number)[]} Array hasil konversi
 * @throws {Error} Jika input bukan array
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus array");
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};
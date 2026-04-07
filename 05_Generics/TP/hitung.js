// FUNCTIONNYA....
function hitung(str, mode) {
    let jumlah = 0;

    for (const c of str) {
        if (mode === "semua") {
            jumlah++;
        } else if (mode === "huruf") {
            if (c === ' ') continue;
            jumlah++;
        }
    }

    return jumlah;
}

// TEST NYA ........
const str = "Bar bar bar";

console.log(hitung(str, "semua")); // 11
console.log(hitung(str, "huruf")); // 9

hitung(str, "huruf"); // tidak tampil apa-apa
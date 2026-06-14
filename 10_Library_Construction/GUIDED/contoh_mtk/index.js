export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

/**
 * 
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */

export function plsv_tiga(x, a, b) {
    const konstanta = b - a;

    if (x.length === 1) {
        return konstanta;
    } else if (x.length === 2) {
        const v = parseInt(x);
        return bagi(konstanta, v);
    }

    return 0;
}

// export function persamaan(str) {
//     const sisiKanan = /\=(.*)/g;
//     const sisiKiri = /(.*)\=/g;

//     const sukuKiri = [];
//     const sukuKanan = [];

//     const kiri = sisiKanan.exec(str);
//     const kanan = sisiKiri.exec(str);

//     console.log(kiri);
//     console.log(kanan);
// }

// persamaan("3x+5=14")



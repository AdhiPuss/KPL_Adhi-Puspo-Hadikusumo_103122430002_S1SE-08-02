/** 
 * Tulislah sebuah fungsi yang menerima bilangan N dan 
 mencetak penjumlahan dari 1 hingga N. Contohnya, jika N 
 adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3 + 4 + 5).
*/

// ===================Metode Perluangan======================

function sumNValues(N) {
    let hasil = 0;
    
    for (let i = 1; i <= N; i++) {
        hasil += i;
    }
    
    return hasil;
}

//===========================================================

//===================Metode Matematika=======================

function sumNValues(N) {
    return hasil = (N * (N + 1)) / 2;
}

//===========================================================

console.log(sumNValues(100));
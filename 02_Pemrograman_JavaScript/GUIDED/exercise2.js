/**
 * 1. Buatlah sebuah array berisi 3 elemen favorit kalian, dan simpan dalam variabel bernama listMinuman. 
 * 2. Setelah itu, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan.
 * 3. Terakhir, tambahkan minuman barru di depan array.
 */

const listMinuman = ["Es Duren", "Es Teh Manis", "Avocado Juice"];
listMinuman[0] = "Jeruk Anget";
listMinuman[1] = "Caffe Latte";
listMinuman.unshift("Jus Mangga");

console.log(listMinuman);

# Tugas Mandiri 02: Pemrograman JavaScript

**Penjelasan**

Okee, izinkan saya menjelaskan code yg saya buat berdasarkan percobaan ke test.js yang dibrikan untuk tugas mandiri modul 02 kali ini. 

Jadi intinya pada Program yang saya buat ini memproses setiap elemen dalam array input dan menentukan apakah elemen tersebut merupakan:

1. Kelipatan 14 diganti dengan "FizzBuzz"
2. Kelipatan 2 diganti dengan "Fizz"
3. Kelipatan 7 diganti dengan "Buzz"
4. Lalu, program ini juga memvalidasi input:

Jika input bukan array akan mengembalikan "Input tidak valid"
Jika ada elemen array yang bukan angka akan mengembalikan "Input tidak valid"

<img src= "/02_Pemrograman_JavaScript/TM/src/utama.png">

lalu bagaimana jika kasusnya ada "," pada fungsi tsb, dgn metode push biasa secara otomatis test akan gagal, jadi saya sedikit menambahkan pengecekan terhadap simbol tanda baca dengan menggunakan perintah join:

<img src= "/02_Pemrograman_JavaScript/TM/src/join.png">

Awalnya saya atur agar programnya dibuat false agar saat si test mendeteksi adanya tanda baca ini dan membuatnya true dan menjalankan program tsb

Pendekatan ini memastikan output konsisten dan sesuai dengan aturan FizzBuzz tanpa mengubah angka yang tidak relevan, sekaligus menjaga error handling untuk input yang salah.

Mungkin itu aja penjelasan dari saya, kurang lebihnya mohon maaf, adiooooss ``````

cc : Adhi Puspo Hadikusumo

<img src= "/02_Pemrograman_JavaScript/TM/src/mybini.jpg">
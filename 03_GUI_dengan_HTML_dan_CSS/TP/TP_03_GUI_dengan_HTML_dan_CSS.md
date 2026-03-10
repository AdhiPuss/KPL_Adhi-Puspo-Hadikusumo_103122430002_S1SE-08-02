# Tugas Pendahuluan 03: GUI dengan HTML dan CSS

**Penjelasan**

Untuk mngubah tata letak dari index.html yang telah dibuat sebelumnya adalah dengan cara menambahkan beberapa code seperti padding, margin dsb untuk memperkirakan tata letak yang diinginkan pada index.css nya

<img src= "/03_GUI_dengan_HTML_dan_CSS/src/css.png">

1. .body

Bagian ini digunakan untuk mengatur tampilan utama halaman web.

----------font-family: 'Inconsolata', monospace;---------- <br>
Mengatur jenis font yang digunakan pada seluruh halaman menjadi Inconsolata, yaitu font bergaya monospace yang sering digunakan pada tampilan teks atau coding.

----------display: flex;----------<br>
Mengaktifkan Flexbox layout, yaitu sistem layout CSS yang memudahkan pengaturan posisi elemen.

----------justify-content: center;----------<br>
Mengatur agar seluruh konten di dalam body berada di tengah secara horizontal.

----------min-height: 100vh;----------<br>
Menentukan tinggi minimum halaman sebesar 100% tinggi viewport (layar browser).

----------margin: 0;----------<br>
Menghilangkan margin bawaan browser pada body agar layout lebih rapi.

2. .kotak-input

Class .kotak-input digunakan untuk mengatur tampilan textarea tempat pengguna memasukkan teks.

----------display: block;----------<br>
Membuat textarea menjadi elemen block, sehingga akan menempati satu baris penuh.

----------resize: none;----------<br>
Menonaktifkan fitur mengubah ukuran textarea secara manual oleh pengguna.

----------margin-top: 5px;----------<br>
Memberikan jarak 5 piksel dari elemen di atasnya.

----------font-family: 'Inconsolata', monospace;----------
Menyamakan font textarea dengan font halaman agar tampilannya konsisten.

3. .p > span

Selector ini menargetkan elemen <span> yang berada langsung di dalam <p>.

----------color: coral;----------<br>
Mengubah warna teks menjadi coral untuk menonjolkan informasi.

----------font-weight: bold;----------<br>
Membuat teks menjadi tebal.

Biasanya digunakan untuk menampilkan jumlah huruf, huruf besar, dan huruf kecil agar lebih mudah terlihat oleh pengguna.

4. .button-group

Class .button-group digunakan sebagai wadah untuk tombol-tombol konversi teks.

----------margin-top: 10px;----------<br>
Memberikan jarak 10 piksel dari elemen di atasnya, sehingga tombol tidak terlalu menempel dengan teks sebelumnya.

5. button

Bagian ini mengatur tampilan dasar semua tombol.

----------font-family: 'Inconsolata', monospace;----------<br>
Menggunakan font yang sama dengan halaman agar konsisten.

----------cursor: pointer;----------<br>
Mengubah kursor menjadi ikon tangan saat mouse diarahkan ke tombol.

----------padding: 5px 10px;----------<br>
Memberikan ruang di dalam tombol agar teks tidak terlalu mepet dengan border.

----------margin-right: 5px;----------<br>
Memberikan jarak antar tombol.

----------border: 1px solid #ccc;----------<br>
Memberikan garis tepi tipis dengan warna abu-abu.

----------background-color: #f0f0f0;----------<br>
Memberikan warna latar tombol abu-abu terang.

6. button:hover

Pseudo-class :hover digunakan untuk memberikan efek saat mouse berada di atas tombol.

----------background-color: #e0e0e0;----------<br>
Mengubah warna latar tombol menjadi sedikit lebih gelap agar memberikan feedback visual kepada pengguna.

**Output**

<img src= "/03_GUI_dengan_HTML_dan_CSS/src/output_tp.png">

itu saja yang bisa saya sampaikan, arigatouuu gozaimasuu ~~~~~

cc : Adhi Puspo Hadikusumo

<img src= "/03_GUI_dengan_HTML_dan_CSS/src/mybini.jpg">
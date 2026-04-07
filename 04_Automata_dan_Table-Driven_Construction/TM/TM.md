# TM 04_Automata_dan_Table-driven_Construction

`Adhi Puspo Hadikusumo`

`103122430002`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Tambahkan mode sepia dengan ketentuan:
Latar belakang: #F4ECD8
Warna teks: #5B4636

Ketentuan lainnya:
1. Bagian mode-div harus menaungi tiga button: light, dark, dan sepia
2. Bisa berpindah state secara mulus: sepia menghasilkan sepia-mode, dark menghasilkan dark-mode, dan light menghasilkan light-mode

## Kode Sumber

Ada di [index.html](../TM/index.html) , [index.js](../TM/index.js) dan , [index.css](../TM/index.css)

## Kode Sumber

(sepia-mode.png)

## Deskripsi

Pada dokumnen ini saya menambahkan fitur mode sepia yang dimana sesuai ketentuan yang diberikan

pada [index.html](../TM/index.html) saya menambahkan:
```
<button id="tombol-sepia">Mode Sepia</button>
```
penambahan diatas untuk menambah butto sepia pada sistem tsb

lalu untuk [index.css](../TM/index.css) saya menambahkan:
```
.sepia-mode {
    background-color: #F4ECD8;
    color: #5B4636;
}

.sepia-mode .kotak-input {
    background-color: white;
    color: #5B4636;
    border: 1px solid #5B4636;
}

.sepia-mode button {
    background-color: #29ddcc;
    color: #5B4636;
    border: 1px solid #5B4636;
}

.sepia-mode button:hover {
    background-color: #cbb896;
}
```
nah disini tuh ada pengaturan untuk pewarnaan backgroun color sesuai yg sudah diberikan dan kotak inputnya agar sesuai dari contoh tampilan yang diberikan, saya sedikit menambahkan hover pada button agar terlihat sedikit menarik

untuk [index.js](../TM/index.js) saya menambahkan:
```
const buttonSepiaElement = document.getElementById("tombol-sepia");

function setMode(mode) {
    document.documentElement.classList.remove("dark-mode", "light-mode", "sepia-mode");
    document.documentElement.classList.add(mode);
}

buttonLightElement.addEventListener("click", () => {
    setMode("light-mode");
});

buttonDarkElement.addEventListener("click", () => {
    setMode("dark-mode");
});

buttonSepiaElement.addEventListener("click", () => {
    setMode("sepia-mode");
});
```
fungsi penambahan code di js tsb agar button yang sudah ditambahkan di html tadi bisa responsif atau bisa ditekan, saat ditekan fungsi code js diatas dijalankan untuk mengeksekusi tampilan yang sudah diatur pada css sebelumnya

Itu saja yang bisa saya jelaskan, arigatouuu ~~~
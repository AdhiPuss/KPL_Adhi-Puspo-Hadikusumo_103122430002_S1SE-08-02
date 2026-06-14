import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "./message";
import spawn from "child_process";


const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const daftarFilm = [];

/**
* @swagger
* /film
* get: 
*   summary: Daftar film yang disimpan
*   responses:
*     200:
*       description: Daftar film berhasil diambil
*     404:
*       description: Daftar film tidak  ditemukan
*/

// Ambil semua film
app.get('/film', (req, res) => {
    return res.status(200).json(daftarFilm);
});

// Ambil satu film
app.get('/film/:id', (req, res) => {
    const film = daftarFilm.find(m => m.id === parseInt(req.params.id));
    if (!film) {
        return res.status(404);
    }

    return res.status(200).json(film);
});

// Tambahkan film baru
app.post('/film', (req, res) => {
    const film = {
        id: daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFilm.push(film);
    return res.status(201).json(film);
});

// Hapus ID film
app.delete('/film/:id', (req, res) => {
    const indeksFilm = daftarFilm.findIndex(f => f.id === Number(req.params.id));
    if (indeksFilm === -1) {
        return res.status(404);
    }

    const filmDihapus = daftarFilm.splice(indeksFilm, 1);
    return res.json(filmDihapus);
});

app.listen(8000, "localhost", () => console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`));
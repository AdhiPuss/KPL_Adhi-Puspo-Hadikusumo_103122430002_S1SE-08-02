const express = require('express');
const app = express();
const PORT = 3000;

const { specs, swaggerUi } = require('./swagger.js');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const menuData = {
    figure: {
        "Figure arima kana": 699000,
        "figure akane kurokawa": 499000,
        "figure mem-cho": 579000
    },
    merchandise: {
        "ganci arima kana": 300000,
        "ganci akane kurokawa": 250000,
        "ganci mem-cho": 140000
    }
};

app.get('/', (req, res) => {
    const landing = {
        "checkout": "Cek /docs untuk melihat rincian API"
    };
    res.json(landing);
});

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
app.get('/menu', (req, res) => {
    const daftarKategori = Object.keys(menuData);
    res.status(200).json({ kategori_tersedia: daftarKategori });
});

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Merchant yang di tersedia
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Nama kategori (misal figure atau merchandise)
 *     responses:
 *       200:
 *         description: Menu berhasil ditampilkan
 *       404:
 *         description: Menu tidak ditemukan
 */

app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);
    res.json(categories);
});

app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
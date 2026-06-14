// CJS
require('dotenv').config();

// ESM
// import 'dotenv/config';

// console.log(`Dalam mode ${process.env.SECRET_KEY}`);

function ambilKutipan() {
    try {
        fetch(process.env.BASE_API)
        .then(response => response.json())
        .then(data => console.log(data
        ['data']));
    } catch (error) {
        console.error(error);
    }
}

ambilKutipan();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const option = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'kyou-hobby',
            version: '1.0.0',
            description: 'Sebuah API sederhana tentang barang yang dijual di kyou-hobby',
        },
    },
    apis: ['index.js']
};

const specs = swaggerJsdoc(option);

module.exports = {
    specs,
    swaggerUi,
};
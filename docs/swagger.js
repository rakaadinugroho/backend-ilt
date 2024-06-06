const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Indonesia API',
        description: 'API to get list of provinces, cities, and districts in Indonesia',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./routes/regionRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
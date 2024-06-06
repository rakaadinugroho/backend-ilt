const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const regionRoutes = require('./routes/regionRoutes');
const logger = require('./middlewares/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', regionRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
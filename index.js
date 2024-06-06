const express = require('express');
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');
dotenv.config();

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

// GraphQL Needed
const { readFileSync } = require('fs');
const resolvers = require('./graphql/resolvers');
const typeDefs = readFileSync('./graphql/schema.graphql', 'utf8');

const regionRoutes = require('./routes/regionRoutes');


const logger = require('./middlewares/logger');

const app = express();
const port = process.env.PORT || 3000;

// Initialize the Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // To enable schema reflection
    playground: true, // To enable GraphQL Playground
});

(async () => {
    await server.start(); // Start the Apollo Server
    server.applyMiddleware({ app, path: '/graphql' }); // Apply middleware with path
})();

app.use(logger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', regionRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
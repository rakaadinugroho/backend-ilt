const { Pool } = require('pg');

const connectionString = process.env.DATABASE_CONNECTION;

const pool = new Pool({
    connectionString,
})

module.exports = pool;
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    database: 'shop',
    port: 5432,
    user: "postgres",
    password: "123",
});

pool.query('SELECT * FROM shop.user', (error, results) => {
    if (error) {
        console.error('Error executing query', error);
        return;
    }

    console.log('Query results:', results.rows);
});

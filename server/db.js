const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/fake_store_db');

const createTables = async() => {
    const SQL = `
    DROP TABLE IF EXISTS customers;
    CREATE TABLE customers(
        id UUID PRIMARY KEY,
        firstname VARCHAR(50),
        lastname VARCHAR(50),
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
    );
    `;
    await client.query(SQL);
};

const createCustomer = async({ firstname, lastname, username, password }) => {
    const SQL = `
        INSERT INTO customers(id, firstname, lastname, username, password)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
        `;
        const response = await client.query(SQL, [uuid.v4(), firstname, lastname, username, await bcrypt.hash(password, 5)]);
        return response.rows[0];
};

module.exports = {
    client,
    createTables,
    createCustomer
};
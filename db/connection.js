// const { Pool } = require('pg');
// const ENV = process.env.NODE_ENV || 'development';

// require('dotenv').config({
//   path: `${__dirname}/../.env.${ENV}`,
// });

// if (!process.env.PGDATABASE) {
//   throw new Error('PGDATABASE not set');
// }
// console.log('PGDATABASE:', process.env.PGDATABASE);

// module.exports = new Pool();

const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || "development";

const config = {};

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

module.exports = new Pool(config);

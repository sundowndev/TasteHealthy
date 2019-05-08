const { Client } = require('pg');

const dbDns = {
  user: process.env.API_DB_USER || 'postgres',
  host: process.env.API_DB_HOST || '127.0.0.1',
  database: process.env.API_DB || 'tastehealthy',
  password: process.env.API_DB_PWD || 'tastehealthy',
  port: process.env.API_DB_PORT || 3306,
};

const client = new Client(dbDns);

function connect() {
  return new Promise((resolve, reject) => {
    client
      .connect()
      .catch((error) => {
        throw new Error(error);
      })
      .then(resolve)
      .catch((error) => reject(error));
  });
}

export { client, connect };

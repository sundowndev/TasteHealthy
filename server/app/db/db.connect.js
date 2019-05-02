const { Client } = require('pg');

const dbDns = {
  user: 'postgres',
  host: 'localhost',
  database: 'tastehealthy',
  password: 'tastehealthy',
  port: 3306,
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

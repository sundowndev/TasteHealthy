import Sequelize from 'sequelize';

// Models
import products from './products';
import categories from './categories';
import facts from './nutrition_facts';
import miscData from './misc_data';

const models = {
  'Products': products,
  'Categories': categories,
  'Facts': facts,
  'MiscData': miscData,
};
const db = {};
const dbDns = {
  user: process.env.API_DB_USER || 'postgres',
  host: process.env.API_DB_HOST || '127.0.0.1',
  database: process.env.API_DB || 'tastehealthy',
  password: process.env.API_DB_PWD || 'tastehealthy',
  port: process.env.API_DB_PORT || 3306,
};

// Init DB connection
const sequelize = new Sequelize(dbDns.database, dbDns.user, dbDns.password, {
  host: dbDns.host,
  port: dbDns.port,
  dialect: 'postgres',
}, {
  define: {
    timestamps: false,
  },
});

Object.assign(db, {
  sequelize,
  Sequelize,
});

// Register models
for (const model in models) {
  db[model] = registerModel(models[model]);
}

function registerModel(model) {
  return model(sequelize, Sequelize);
}

export default db;

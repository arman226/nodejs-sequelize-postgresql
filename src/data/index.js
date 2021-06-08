require("dotenv").config();
const Sequelize = require("sequelize");

const db = new Sequelize(
  "gigdatabase",
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  }
);

module.exports.authenticateDatabase = () => {
  db.authenticate()
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(`An error occured: ${err}`);
    });
};

module.exports.database = db;

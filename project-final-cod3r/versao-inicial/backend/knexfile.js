module.exports = {
  client: "postgresql",
  connection: {
    database: "knowledge",
    user: "postgres",
    password: "root",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

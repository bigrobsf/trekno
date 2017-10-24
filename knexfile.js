module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/trekno-db',
    pool: {
      min: 1,
      max: 5
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
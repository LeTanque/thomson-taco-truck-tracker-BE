module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda-notes.sqlite3',
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
    useNullAsDefault: true,
  }

};
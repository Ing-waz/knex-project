require('dotenv').config()
const connectionString = process.env.DB_CONNECTION_STRING;
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      password: '',
      user: '',
      port: 5432,
      database: 'pet_store',
    }
    
  },

  staging: {
    client: 'pg',
    connection: {
      host: "localhost",
      port: 5432,
      database: 'pg-docker',
      user:     'root',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'pg-docker',
      user:     'root',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

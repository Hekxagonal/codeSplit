module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'hekxagonal_hub'),
      user: env('DATABASE_USERNAME', 'hekxagonal_hub'),
      password: env('DATABASE_PASSWORD', 'YhPfAsR!4x!(eX*B'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

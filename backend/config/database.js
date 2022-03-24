module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'codesplit'),
      user: env('DATABASE_USERNAME', 'codeSplit'),
      password: env('DATABASE_PASSWORD', '3sGAA.iGGTz67!Sd'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

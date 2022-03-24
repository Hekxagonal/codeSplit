module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c80ecf31298a887cfe9ae4bad6b5c404'),
  },
});

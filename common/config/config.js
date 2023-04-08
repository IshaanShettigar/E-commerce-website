module.exports = {
    port: process.env.PORT || 3000,
    db: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      name: process.env.DB_NAME || 'ecommerce',
      user: process.env.DB_USER || 'postgres',
      pass: process.env.DB_PASS || 'password',
      dialect: 'postgres'
    },
    jwtSecret: process.env.JWT_SECRET || 'secret'
  };
  
module.exports = {
    port: 3000,
    db: {
      host: 'localhost',
      port: 5432,
      name: 'ecommerce',
      user: 'postgres',
      pass: 'password',
      dialect: 'postgres'
    },
    jwtSecret: 'secret'
  };
  
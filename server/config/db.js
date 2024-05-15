// db.js

const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL connection
const sequelize = new Sequelize('skill_probe', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Export the Sequelize instance
module.exports = sequelize;

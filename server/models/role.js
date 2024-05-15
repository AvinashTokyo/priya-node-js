// role.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define Role model
const Role = sequelize.define('ms_role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(100)
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    created_by: {
        type: DataTypes.STRING(45)
    },
    updated_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_by: {
        type: DataTypes.STRING(45)
    }
});

// Sync the model with the database
Role.sync()
    .then(() => {
        console.log('Role table created successfully');
    })
    .catch(err => {
        console.error('Error creating Role table:', err);
    });

// Export the Role model
module.exports = Role;

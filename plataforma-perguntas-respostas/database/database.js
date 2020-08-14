const sequelize = require("sequelize");

const connection = new sequelize("projeto1", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
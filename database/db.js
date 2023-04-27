const Sequelize = require('sequelize');

const userModel = require('../models/User');

const sequelize = new Sequelize("UserDB","root","root", {
    host: "localhost",
    dialect: "mysql",
})

const user = userModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(()=> {
        console.log("Tablas sincronizadas");
    })

module.exports = { user }
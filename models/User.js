module.exports = (Sequelize, type) => {
    return Sequelize.define("user", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: type.STRING,
        password: type.STRING,
        name: type.STRING,
        lastname: type.STRING,
    })
}
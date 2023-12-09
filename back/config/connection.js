import sequelize, { Sequelize } from 'sequelize'

const sequelizeConfig = new Sequelize({
    dialect: 'sqlite',
    storage: 'database'
})

async function connection () {
    await sequelizeConfig.authenticate();
    console.log("deu certo")
}

export {sequelizeConfig, connection}
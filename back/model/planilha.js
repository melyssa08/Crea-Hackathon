import { sequelizeConfig } from "../config/connection.js";
import { DataTypes } from "sequelize";

const Formandos = sequelizeConfig.define("Formandos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    data: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: false
});

export default Formandos;
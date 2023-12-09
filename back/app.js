import express from "express";
import cors from "cors"
import xlsx from "xlsx"
import fs from 'fs';
import sequelize from 'sequelize'
import sqlite3 from "sqlite3";
import {sequelizeConfig, connection} from "./config/connection.js";
import Formandos from "./model/planilha.js";

connection()
Formandos.sync()

const app = express()

app.use(express.json())

app.use(cors({
    origin: "*"
}))

app.use(express.static('../front/'))

app.get("/", (req, res) => {
    res.sendFile('index.html')
})

app.post('/planilha', async (req, res) => {

    const {name:name} = req.body

    const pathForPlanilha = `../front/planilha/${name}.xlsx`
    const dataBuffer = fs.readFileSync(pathForPlanilha)
    const workbook = xlsx.read(dataBuffer, { type: 'buffer' });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];


    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    console.log(jsonData);

    for (var i = 1; i < jsonData.length; i++) {
        
        console.log(jsonData[1])
        await Formandos.create({
            nome: jsonData[i][0],
            cpf: jsonData[i][1],
            email: jsonData[i][2],
            data: jsonData[i][3]
        })
    }

    res.json("Deu certo").status(200)

})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
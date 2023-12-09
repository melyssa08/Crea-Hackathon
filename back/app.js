import express from "express";
import cors from "cors"
import xlsx from "xlsx"
import fs from 'fs';
import sequelize from 'sequelize'
import sqlite3 from "sqlite3";
import {sequelizeConfig, connection} from "./config/connection.js";
import Formandos from "./model/planilha.js";
import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/planilha');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

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

app.post('/planilha', upload.single('File'), async (req, res) => {

    const file = req.file

    const pathForPlanilha = `../front/planilha/${file.originalname}`
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

    res.json(file.originalname).status(200)

})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
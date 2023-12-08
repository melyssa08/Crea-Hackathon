import express from "express";

const app = express()

app.use(express.static('../front/'))

app.get("/", (req, res) => {
    res.sendFile('index.html')
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
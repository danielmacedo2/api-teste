const express = require("express");

const app = express();
const port = 3000;

console.log("Fazendo um teste 123");

app.listen(port, () => console.log(`App Rodando corretamente porta ${port}`))

app.get("/", (req, res) => {
    res.send("Aplicação rodando")
})
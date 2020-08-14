const express = require("express");

const app = express();

app.get("/ola", (req, res) => {

    res.send("");

})

app.get("/", (req, res) => {

    const query = req.query["canal"];

    console.log(query);

    console.log(query);

    res.send("Bem vindo ao guia do programador!");

});

//ROTA OPCIONAL
app.get("/gaby/:parceiro?", (req, res) => {

    res.send(req.params.parceiro);

});

app.listen(3333, (erro) => {

    if (!erro) {

        console.log("Servidor startado!");

    } else {

        console.log("Servidor caiu!");
    }

});
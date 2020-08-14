const express = require("express");

const bodyParser = require("body-parser");

const db = require("./database/database.js");

const Pergunta = require("./database/model/Pergunta.js");

const app = express();

db

    .authenticate()

.then(() => {

    console.log("Conexão feita com o Banco");

})

.catch((erro) => {

    console.log(erro);

});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.get("/", (req, res) => {

//     const { nome, linguagem } = req.query;

//     const produtos = [

//         { nome: "Doritos", preco: 3.14 },

//         { nome: "Coca-cola", preco: 5.00 },

//         { nome: "Leite", preco: 1.45 }
//     ];

//     console.log(nome, linguagem);

//     const msg = false;

//     res.render("index.ejs", pessoa = {

//         nome,

//         linguagem,

//         empresa: "TOTVS",

//         msg,

//         produtos

//     });

// })

app.get("/:nome/:linguagem", (req, res) => {

    const { nome, linguagem } = req.query;

    const produtos = [

        { nome: "Doritos", preco: 3.14 },

        { nome: "Coca-cola", preco: 5.00 },

        { nome: "Leite", preco: 1.45 }
    ];

    console.log(nome, linguagem);

    const msg = false;

    res.render("index.ejs", pessoa = {

        nome,

        linguagem,

        empresa: "TOTVS",

        msg,

        produtos

    });

});

app.get("/perguntar", (req, res) => {

    res.render("perguntar");

});

app.post("/salvar", (req, res) => {

    const titulo = req.body.titulo;

    const descricao = req.body.descricao;

    Pergunta.create({

        titulo,

        descricao

    }).then(() => {

        res.redirect("/");

    })

});

app.get("/", (req, res) => {

    Pergunta.findAll({ raw: true }).then((perguntas) => {

        res.render("index.ejs", {

            perguntas

        });

    });

})

app.listen(3333, (erro) => {

    if (erro) {

        console.log("Servidor caiu!")

    } else {

        console.log("Servidor startado!");

    }

})
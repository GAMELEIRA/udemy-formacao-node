const Squilize = require("sequelize");

const db = require("../database.js");

const Pergunta = db.define('Pergunta', {

    titulo: {
        type: Squilize.STRING,
        allowNull: false
    },

    descricao: {
        type: Squilize.TEXT,
        allowNull: false
    }

});

Pergunta.sync({ force: false }).then(() => {

    console.log("Tabela Pergunta criada!");

});

module.exports = Pergunta;
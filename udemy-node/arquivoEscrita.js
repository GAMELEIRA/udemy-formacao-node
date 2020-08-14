const FileSystem = require("fs");

const produto = {
    nome: "TATA"
}

FileSystem.writeFile("./arquivoo.json", JSON.stringify(produto), err => {

    console.log(err || "Arquivo Salvo");

})
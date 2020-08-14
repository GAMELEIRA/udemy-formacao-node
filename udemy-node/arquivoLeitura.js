const FileSystem = require("fs");

const caminho = "arquivo.json";

const caminhoCSV = "contatos.csv";

//sincrono
const conteudo = FileSystem.readFileSync(caminho, "UTF-8");

console.log(conteudo);

const conteudoCSV = FileSystem.readFileSync(caminhoCSV, "UTF-8");

console.log(conteudoCSV);

//assincrono 
FileSystem.readFile(caminho, "UTF-8", (err, conteudo) => {

    const config = conteudo;

    console.log(config);

});
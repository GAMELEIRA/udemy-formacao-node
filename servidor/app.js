let http = require("http");

http.createServer((req, res) => {

    res.end("Olá, Games!");

}).listen(8181);
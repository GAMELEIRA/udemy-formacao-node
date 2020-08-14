const http = require("http");

const getTurma = (letra) => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {

        http.get(url, res => {

            let resultado = ""

            res.on("data", dados => {

                resultado += dados;

            })

            res.on("end", () => {

                try {

                    resolve(JSON.parse(resultado));

                } catch (e) {

                    reject(e);

                }

            })

        })

    })

}

let nomes = [];

getTurma("A").then(alunos => {

    nomes = nomes.concat(alunos.map(a => "A: " + a.nome));

    console.log(nomes);

    getTurma("B").then(alunos => {

        nomes = nomes.concat(alunos.map(a => "B: " + a.nome));

        console.log(nomes);

    })

    getTurma("D").then(alunos => {

        nomes = nomes.concat(alunos.map(a => "D: " + a.nome));

        console.log(nomes);

    }).catch(e => console.log(e.message));


})


Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]);


const obterAlunos = async() => {

    const turmaA = await getTurma("A");

    const turmaB = await getTurma("B");

    const turmaC = await getTurma("C");

    return [].concat(turmaA, turmaB, turmaC);

}

obterAlunos().then(alunos => alunos.map(a => a.nome)).then(nomes => console.log(nomes));
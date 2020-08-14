const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

const buscarFuncionariaChinesa = (funcionarios) => {

    const funcionariosChineses = funcionarios.filter(funcionario => {

        return funcionario.pais == "China" && funcionario.genero == "F";

    });

    return funcionariosChineses;

}

axios.get(url).then(response => {

    const funcionarios = response.data;

    console.log(buscarFuncionariaChinesa(funcionarios).reduce((func, funcAtual) => {

        return (func.salario < funcAtual.salario) ? func : funcAtual;

    }));

});

//IMPLEMENTAR A FUNCAO REDUCE

//BUSCAR A FUNCIONARIA CHINESA COM MENOR SALARIO
const funcionario = {
    nome: "Maria",
    salario: 12348.99
}

//SPREAD
const clone = { ativo: true, ...funcionario }

console.log(clone);

const grupoA = ["João", "Pedro", "Gloria"];

const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);
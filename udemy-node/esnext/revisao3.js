const obj = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj));

console.log(Object.keys(obj));

console.log(Object.entries(obj));

const nome = "Carla";

const pessoa = {

    nome,

    ola() {

        return "Oi gente";

    }

}

class Animal {

    nome = "Faala animal";

}

class Cachorro extends Animal {

    falar() {

        return "Au au";

    }

}

console.log(new Cachorro().falar());

console.log(new Cachorro().nome);
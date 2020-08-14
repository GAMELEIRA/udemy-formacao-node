{
    var a = 2;

    let b = 3;

}

// console.log(a);

// console.log(b);

const produto = "iPad";

console.log(`${produto}
é
caro!
`);

const [l, e, ...tras] = "Cod3r";

console.log(l, e, tras);

const [x, , y] = [1, 2, 3];

console.log(x, y);


const { idade, nome: nomezinho } = { nome: "Gabriel", idade: 9 }

console.log(idade, nomezinho);
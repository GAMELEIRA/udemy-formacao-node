console.log(this === global);

console.log(this === module);

console.log(this === module.exports);

console.log(this === exports);

function logThis() {

    console.log("Dentro de uma função!");

    console.log(this === exports);

    console.log(this === Function);

    console.log(this === Object);

    console.log(this === global);

}


const obj = {

    nome() {

        console.log("-------------------------")

        console.log(this === global);

        console.log(this === obj);

        console.log("-------------------------")

    }

}

obj.nome();

console.log("+++++++++++++++++++++++");

logThis();
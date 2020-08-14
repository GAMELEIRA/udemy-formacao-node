function falardepois(segundos, frase) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(frase);

        }, segundos * 1000);

        // if (reject() == true) {

        //     reject("Oi");

        // }

    })
}

falardepois(3, "Que legal!").then(frase => console.log(frase.concat("?!?"))).catch(e => console.log(e));
const times = new Set();

console.log(typeof times);

times.add("Palmeiras");

times.add("São Paulo");

times.add("Corinthians");

times.add("Santos");

console.log(times);

console.log(times.size);

console.log(times.has("vasco"));

times.delete("Corinthians");

const nomes = ["Gabriel", "Gameleira", "dos", "Santos"];

console.log(...nomes);

const nomesSet = new Set();

nomesSet.add(...nomes);

console.log(nomesSet);
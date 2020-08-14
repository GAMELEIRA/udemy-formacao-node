const tecnologias = new Map();

tecnologias.set("react", { framework: false })

tecnologias.set("angular", { framework: true })

console.log(tecnologias);

console.log(tecnologias.get('react'));

console.log(tecnologias.get());

console.log(tecnologias.has("react")); //esta contido

console.log(tecnologias.delete("react"));

console.log(tecnologias.has("react"));

console.log(tecnologias.size);
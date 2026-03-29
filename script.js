// Array de projetos
const projetos = [
  {
    titulo: "Portfólio",
    descricao: "Primeira versão do meu portfólio usando HTML, CSS e JS.",
    link: "https://github.com/paykuhan/Portifolio-MPV"
  },
  {
    titulo: "Calculadora",
    descricao: "Uma calculadora simples feita em JavaScript.",
    link: "https://paykuhan.github.io/Calculadora/"
  }
];

// Renderização dinâmica
const listaProjetos = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");
  div.innerHTML = `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
  `;
  listaProjetos.appendChild(div);
});
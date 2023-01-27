/*

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar o modal

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar o modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}
// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
//const botaoTrailer = document.querySelector(".botao-trailer");

// passo 3 - dar um jeito de pegar o elemento da modal no js
//const modal = document.querySelector(".modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
}) 
// OBJETIVO 2 - quando o usuário clicar no X devemos fechar o modal
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
// const botaoFecharModal = document.querySelector(".fechar-modal")

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoFecharModal .addEventListener("click",() => {
    // passo 3 - fechar a moda
    alternarModal(); // pode usar toggle ou add e remove
    video.setAttribute("src", "")
});




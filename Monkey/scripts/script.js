const modalOverlay = document.querySelector(".modal_Overlay");
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

/*Função para abrir janela no estilo modal (pop up) com vídeo*/

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

/*      Função para fechar o modal (pop up) e pausar vídeo    */
document.querySelector(".close_modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})
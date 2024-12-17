
let botaosom = document.querySelector("botao-som")
let video = document.querySelector(".video")
let botaoInfo = document.querySelector(".link-info")
let modal = document.querySelector(".modal") 

botaosom.addEventListener("click", ligarSom)
botaoInfo.addEventListener("click", mostrarModal)

function ligarSom(){
    video.muted =  !video.muted

}
function mostrarModal(){
    
}


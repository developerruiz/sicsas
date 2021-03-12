let globoChat = document.getElementById('chat')
let globoStatus = 0
let chatBox = document.getElementById('chat_box')
let botonMin = document.querySelector('.fa-window-minimize')
let botonMax = document.querySelector('.fa-window-restore')
let contenedorPreguntas = document.getElementById('preguntas')
let pregunta = document.querySelectorAll('.pregunta')
let respuesta = document.querySelectorAll('.respuesta')
let botonCerrar= document.querySelector('.fa-times')
let contenido = null
let botonRegresar =  document.querySelectorAll('.fa-arrow-left' )

globoChat.addEventListener('click', function () {
    mostrarChat: {
        chatBox.className = chatBox.className + (' active')
    }
        globoStatus = 1
        globoChat.classList = ('d-none')
    for (let i = 0; i < pregunta.length; i++) {
        pregunta[i].addEventListener('click', evento);
    }
  
    for (let i = 0; i < botonRegresar.length; i++) {
        botonRegresar[i].addEventListener('click', regresar)
    
    }
})

evento = function (e) {
    e.preventDefault();
    for (let i = 0; i < respuesta.length; i++) {
        respuesta[i].className = '';

    }

    this.parentElement.className = 'active';
    contenido = this.getAttribute('href');
    document.querySelector(contenido).className = 'd-block'
    contenedorPreguntas.classList = ('d-none')

}
regresar = function() {
    contenedorPreguntas.classList = ('preguntas text-center')
    document.querySelector(contenido).className = 'd-none'
}

botonMin.addEventListener('click', () => {
    chatBox.classList = ('chat-box min')
})

botonMax.addEventListener('click', () =>{
    botonMax.style.cursor = 'pointer';
    chatBox.classList = ('chat-box active')
})

botonCerrar.addEventListener('click', () =>{
    botonCerrar.style.cursor = 'pointer';
    chatBox.classList = 'chat-box'
    globoChat.classList = ('chat')
    globoStatus = 0
    console.log(botonCerrar)
    
})


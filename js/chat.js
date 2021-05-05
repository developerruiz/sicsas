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
        chatBox.style.opacity = 0

        setTimeout(function () {
            
            chatBox.style.opacity = 1
        },100)
    }
        globoStatus = 1
        globoChat.classList = ('d-none')
        globoChat.style.transition= '.3s ease-in'

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

    this.parentElement.classList = ('preguntas text-center mt-5')
    contenido = this.getAttribute('href');
    document.querySelector(contenido).className = 'd-block'
    contenedorPreguntas.classList = ('d-none')
    document.querySelector(contenido).style.opacity = '0';
    document.querySelector(contenido).style.transition = '.2s ease-in';
    

    setTimeout(function(){
        document.querySelector(contenido).style.opacity = '1';
        document.querySelector(contenido).style.transition = '.2s ease-in';

    }, 100)

}
regresar = function() {
    contenedorPreguntas.classList = ('preguntas text-center')
    document.querySelector(contenido).className = 'd-none'
    contenedorPreguntas.style.opacity = '0';
    contenedorPreguntas.style.transition = '.2s ease-in';

    setTimeout(function(){
        contenedorPreguntas.style.opacity = '1';
        contenedorPreguntas.style.transition = '.5s ease-in';

    }, 100)
}

botonMin.addEventListener('click', () => {
    chatBox.classList = ('chat-box min')
    chatBox.style.transition = '.3s ease-in';
})

botonMax.addEventListener('click', () =>{
    chatBox.classList = ('chat-box active')
})

botonCerrar.addEventListener('click', () =>{
    chatBox.classList = 'chat-box'
    chatBox.style.transition= '.3s ease-in'
    
    globoChat.classList = ('chat')
    globoChat.style.opacity = 0
    globoStatus = 0 

    setTimeout(function(){
        globoChat.style.opacity = 1
    })

})

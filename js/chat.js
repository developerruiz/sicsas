let globoChat = document.getElementById('chat')
let globoStatus = 0
let chatBox = document.getElementById('chat_box')
let botonMin = document.querySelector('.fa-window-minimize')
let contenedorPreguntas = document.getElementById('preguntas')
// let botonServicios = document.getElementById('btn_servicios')
// let botonProductos = document.getElementById('btn_productos')
let pregunta = document.querySelectorAll('.pregunta')
let respuesta = document.querySelectorAll('.respuesta')
let contenido = null

// globoChat.addEventListener('click', function mostrarChat() {

//     mostrarChat: {
//         chatBox.className = chatBox.className + (' active')
//     }



//     if (globoStatus === 0) {
//         globoStatus = 1
//         globoChat.classList = ('d-none')
//     } else
//         globoStatus = 0


//     for (let i = 0; i < pregunta.length; i++) {
//         pregunta[i].addEventListener('click', evento () {


//         })

//     }

// })
// evento=() =>{
//     for (let i = 0; i < respuesta.length; i++) {
//         console.log(contenido= this.getAttribute('div'))
//     }
// //    for (let i = 0; i < respuesta.length; i++) {
// //     console.log()
// //    }
//     contenedorPreguntas.classList = ('d-none')
// }

inicio = function () {
        globoChat.addEventListener('click', function () {
            mostrarChat: {
                chatBox.className = chatBox.className + (' active')
            }
            if (globoStatus === 0) {
                globoStatus = 1
                globoChat.classList = ('d-none')

            } else
                globoStatus = 0

            for (let i = 0; i < pregunta.length; i++) {
                pregunta[i].addEventListener('click', evento);
            }

        })
    },
    evento = function(){
        for (let i = 0; i < respuesta.length; i++) {
            // respuesta[i].className = ''
            console.log(respuesta)
        }
        contenedorPreguntas.classList = ('d-none')
    }

    inicio()

botonMin.addEventListener('click', function () {
    // console.log(chatBox.classList = ('chat-box min') )
    chatBox.classList = ('chat-box min')
})
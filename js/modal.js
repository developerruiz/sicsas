var propModal = {

    cards: document.getElementsByClassName('card'),
    modales: document.getElementsByClassName('modal'),

    contenedorModal: document.getElementsByClassName('contenedor-modales'),
    divs_contenido: document.querySelectorAll('#contenedor_modales > div'),
    contenido_activo: null,
    boton_cerrar: document.getElementsByClassName('boton-cerrar')
}

var metModal = {

    inicio: function () {

        for (let i = 0; i < propModal.cards.length; i++) {
            propModal.cards[i].addEventListener('click', metModal.eventoModal);

        }
        for (let i = 0; i < propModal.boton_cerrar.length; i++) {
            propModal.boton_cerrar[i].addEventListener('click', function (e) {
                e.preventDefault()
                document.querySelector(propModal.contenido_activo).className = ''
            });

        }
    },
    eventoModal: function (e) {
        e.preventDefault();

        for (let i = 0; i < propModal.contenedorModal.length; i++) {
            propModal.contenedorModal[i].className = propModal.contenedorModal[i].className + '';
        }

        for (let i = 0; i < propModal.divs_contenido.length; i++) {
            propModal.divs_contenido[i].className = propModal.divs_contenido[i].className + '';

        }

        this.parentElement.className = this.parentElement.className + ' active';

        propModal.contenido_activo = this.getAttribute('href')

        document.querySelector(propModal.contenido_activo).className = 'active'

        setTimeout(function () {}, 100)
    }
}

metModal.inicio()
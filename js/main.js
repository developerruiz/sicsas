let modalAlert = document.getElementById('modal_alerta')
let boton =  document.getElementById('cerrar_modal')

boton.addEventListener('click', function(){

    modalAlert.classList = ('d-none')
    modalAlert.style.transition = '1.5s';
    
})

let abrir = document.getElementById('cta-1');

let cerrar =  document.getElementById('modal_close');
let modalC =  document.getElementById('modal_container');

var imagen0 = document.getElementById('imagen_0');
var imagen1 = document.getElementById('imagen_1');
var imagen2 = document.getElementById('imagen_2');
var imagen3 = document.getElementById('imagen_3');
var imagen4 = document.getElementById('imagen_4');


var img = document.getElementById('imagen');

imagen0.onclick = function () {
    img.src = "img/productos/producto-1.png";
}
imagen1.onclick = function () {
    img.src = "img/productos/producto-1-2.png";
}
imagen2.onclick = function () {
    img.src = "img/productos/producto-1-3.png";
}
imagen3.onclick = function () {
    img.src = "img/productos/producto-1-4.png";
}
imagen4.onclick = function () {
    img.src = "img/productos/producto-1-5.png";

}

abrir.addEventListener('click',function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener('click', function (e) {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// ================PRODUCTO 2=========================

let abrir2 = document.getElementById('cta-2');
let cerrar2 =  document.getElementById('modal_close2');
let modalC2 =  document.getElementById('modal_container2');


var imagen5_1 = document.getElementById('imagen_5_1');
var imagen5 = document.getElementById('imagen_5');
var imagen6 = document.getElementById('imagen_6');
var imagen7 = document.getElementById('imagen_7');
var imagen8 = document.getElementById('imagen_8');
var imagen8_1 = document.getElementById('imagen_8_1');
var imagen8_2 = document.getElementById('imagen_8_2');


var img2 = document.getElementById('imagen2');

imagen5_1.onclick = function () {
    img2.src = "img/productos/producto-2-5.png";
}
imagen5.onclick = function () {
    img2.src = "img/productos/producto-2.png";
}
imagen6.onclick = function () {
    img2.src = "img/productos/producto-2-2.png";
}
imagen7.onclick = function () {
    img2.src = "img/productos/producto-2-3.png";
}
imagen8.onclick = function () {
    img2.src = "img/productos/producto-2-4.png";
}
imagen8_1.onclick = function () {
    img2.src = "img/productos/producto-2_1.png";
}
imagen8_2.onclick = function () {
    img2.src = "img/productos/producto-2_2.png";
}

abrir2.addEventListener('click',function (e) {
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar2.addEventListener('click', function (e) {
    modalC2.style.opacity = "0";
    modalC2.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 3

let abrir3 = document.getElementById('cta-3');
let cerrar3 =  document.getElementById('modal_close3');
let modalC3 =  document.getElementById('modal_container3');

var imagen9 = document.getElementById('imagen_9');
var imagen10 = document.getElementById('imagen_10');
var imagen11 = document.getElementById('imagen_11');
var imagen12 = document.getElementById('imagen_12');
var imagen13 = document.getElementById('imagen_13');

var img3 = document.getElementById('imagen3');

imagen9.onclick = function () {
    img3.src = "img/productos/producto-3.png";
}
imagen10.onclick = function () {
    img3.src = "img/productos/producto-3-2.png";
}
imagen11.onclick = function () {
    img3.src = "img/productos/producto-3-3.png";
}
imagen12.onclick = function () {
    img3.src = "img/productos/producto-3-4.png";
}
imagen13.onclick = function () {
    img3.src = "img/productos/producto-3-5.png";
}

abrir3.addEventListener('click',function (e) {
    e.preventDefault();
    modalC3.style.opacity = "1";
    modalC3.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar3.addEventListener('click', function (e) {
    modalC3.style.opacity = "0";
    modalC3.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 4

let abrir4 = document.getElementById('cta-4');
let cerrar4 =  document.getElementById('modal_close4');
let modalC4 =  document.getElementById('modal_container4');



var imagen14 = document.getElementById('imagen_14');
var imagen15 = document.getElementById('imagen_15');
var imagen16 = document.getElementById('imagen_16');




var img4 = document.getElementById('imagen4');

imagen14.onclick = function () {
    img4.src = "img/productos/producto-4.png";
}
imagen15.onclick = function () {
    img4.src = "img/productos/producto-4-2.png";
}
imagen16.onclick = function () {
    img4.src = "img/productos/producto-4-3.png";
}



abrir4.addEventListener('click',function (e) {
    e.preventDefault();
    modalC4.style.opacity = "1";
    modalC4.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar4.addEventListener('click', function (e) {
    modalC4.style.opacity = "0";
    modalC4.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 5

let abrir5 = document.getElementById('cta-5');
let cerrar5 =  document.getElementById('modal_close5');
let modalC5 =  document.getElementById('modal_container5');

var imagen18 = document.getElementById('imagen_18');
var imagen19 = document.getElementById('imagen_19');
var imagen20 = document.getElementById('imagen_20');
var imagen21 = document.getElementById('imagen_21');

var img5 = document.getElementById('imagen5');

imagen18.onclick = function () {
    img5.src = "img/productos/producto-5.png";
}
imagen19.onclick = function () {
    img5.src = "img/productos/producto-5-2.png";
}
imagen20.onclick = function () {
    img5.src = "img/productos/producto-5-3.png";
}
imagen21.onclick = function () {
    img5.src = "img/productos/producto-5-4.png";
}

abrir5.addEventListener('click',function (e) {
    e.preventDefault();
    modalC5.style.opacity = "1";
    modalC5.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar5.addEventListener('click', function (e) {
    modalC5.style.opacity = "0";
    modalC5.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})


// PRODUCTO 6

let abrir6 = document.getElementById('cta-6');
let cerrar6 =  document.getElementById('modal_close6');
let modalC6 =  document.getElementById('modal_container6');


var imagen_6_0 = document.getElementById('imagen_6_0');
var imagen22 = document.getElementById('imagen_22');

var imagen24 = document.getElementById('imagen_24');
var imagen26 = document.getElementById('imagen_26');
var imagen27 = document.getElementById('imagen_27');
var imagen28 = document.getElementById('imagen_28');
var imagen29 = document.getElementById('imagen_29');




var img6 = document.getElementById('imagen6');

imagen_6_0.onclick = function () {
    img6.src = "img/productos/producto-6-0.png";
}
imagen22.onclick = function () {
    img6.src = "img/productos/producto-6.png";
}

imagen24.onclick = function () {
    img6.src = "img/productos/producto-6-3.png";
}

imagen26.onclick = function () {
    img6.src = "img/productos/producto-7.png";
}
imagen27.onclick = function () {
    img6.src = "img/productos/producto-7-2.png";
}
imagen28.onclick = function () {
    img6.src = "img/productos/producto-7-3.png";
}
imagen29.onclick = function () {
    img6.src = "img/productos/producto-7-4.png";
}

abrir6.addEventListener('click',function (e) {
    e.preventDefault();
    modalC6.style.opacity = "1";
    modalC6.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar6.addEventListener('click', function (e) {
    modalC6.style.opacity = "0";
    modalC6.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 7

// let abrir7 = document.getElementById('cta-7');
// let cerrar7 =  document.getElementById('modal_close7');
// let modalC7 =  document.getElementById('modal_container7');






// var img7 = document.getElementById('imagen7');

// imagen26.onclick = function () {
//     img7.src = "img/productos/producto-7.png";
// }
// imagen27.onclick = function () {
//     img7.src = "img/productos/producto-7-2.png";
// }
// imagen28.onclick = function () {
//     img7.src = "img/productos/producto-7-3.png";
// }
// imagen29.onclick = function () {
//     img7.src = "img/productos/producto-7-4.png";
// }


// abrir7.addEventListener('click',function (e) {
//     e.preventDefault();
//     modalC7.style.opacity = "1";
//     modalC7.style.visibility = "visible";
//     modal.classList.toggle("modal-close");
// });

// cerrar7.addEventListener('click', function (e) {
//     modalC7.style.opacity = "0";
//     modalC7.style.visibility = "hidden";
//     modal.style.display = "hidden";
//     setTimeout(function () {
//     },1000)
// })

// PRODUCTO 8

let abrir8 = document.getElementById('cta-8');
let cerrar8 =  document.getElementById('modal_close8');
let modalC8 =  document.getElementById('modal_container8');

var imagen30 = document.getElementById('imagen_30');
var imagen31 = document.getElementById('imagen_31');
var imagen32 = document.getElementById('imagen_32');
var imagen33 = document.getElementById('imagen_33');

var img8 = document.getElementById('imagen8');

imagen30.onclick = function () {
    img8.src = "img/productos/producto-8.png";
}
imagen31.onclick = function () {
    img8.src = "img/productos/producto-8-2.png";
}
imagen32.onclick = function () {
    img8.src = "img/productos/producto-8-3.png";
}
imagen33.onclick = function () {
    img8.src = "img/productos/producto-8-4.png";
}

abrir8.addEventListener('click',function (e) {
    e.preventDefault();
    modalC8.style.opacity = "1";
    modalC8.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar8.addEventListener('click', function (e) {
    modalC8.style.opacity = "0";
    modalC8.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 9

let abrir9 = document.getElementById('cta-9');
let cerrar9 =  document.getElementById('modal_close9');
let modalC9 =  document.getElementById('modal_container9');

var imagen34 = document.getElementById('imagen_34');
var imagen35 = document.getElementById('imagen_35');
var imagen36 = document.getElementById('imagen_36');


 var img9 = document.getElementById('imagen9');

imagen34.onclick = function () {
    img9.src = "img/productos/producto-9.png";
}
imagen35.onclick = function () {
    img9.src = "img/productos/producto-9-2.png";
}
imagen36.onclick = function () {
    img9.src = "img/productos/producto-9-3.png";
}


abrir9.addEventListener('click',function (e) {
    e.preventDefault();
    modalC9.style.opacity = "1";
    modalC9.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar9.addEventListener('click', function (e) {
    modalC9.style.opacity = "0";
    modalC9.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 10

let abrir10 = document.getElementById('cta-10');
let cerrar10 =  document.getElementById('modal_close10');
let modalC10 =  document.getElementById('modal_container10');

var imagen38 = document.getElementById('imagen_38');
var imagen39 = document.getElementById('imagen_39');
var imagen40 = document.getElementById('imagen_40');
var imagen41 = document.getElementById('imagen_41');

var img10 = document.getElementById('imagen10');

imagen38.onclick = function () {
    img10.src = "img/productos/producto-10.png";
}
imagen39.onclick = function () {
    img10.src = "img/productos/producto-10-2.png";
}
imagen40.onclick = function () {
    img10.src = "img/productos/producto-10-3.png";
}
imagen41.onclick = function () {
    img10.src = "img/productos/producto-10-4.png";
}

abrir10.addEventListener('click',function (e) {
    e.preventDefault();
    modalC10.style.opacity = "1";
    modalC10.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar10.addEventListener('click', function (e) {
    modalC10.style.opacity = "0";
    modalC10.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})


// PRODUCTO 11

let abrir11 = document.getElementById('cta-11');
let cerrar11 =  document.getElementById('modal_close11');
let modalC11 =  document.getElementById('modal_container11');

var imagen11_1 = document.getElementById('imagen11_1');
var imagen11_2 = document.getElementById('imagen11_2');
var imagen11_3 = document.getElementById('imagen11_3');
var imagen11_4 = document.getElementById('imagen11_4');

var img11 = document.getElementById('imagen11');

imagen11_1.onclick = function () {
    img11.src = "img/productos/producto-11.png";
}
imagen11_2.onclick = function () {
    img11.src = "img/productos/producto-11_2.png";
}
imagen11_3.onclick = function () {
    img11.src = "img/productos/producto-11_3.png";
}
imagen11_4.onclick = function () {
    img11.src = "img/productos/producto-11_4.png";
}

abrir11.addEventListener('click',function (e) {
    e.preventDefault();
    modalC11.style.opacity = "1";
    modalC11.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar11.addEventListener('click', function (e) {
    modalC11.style.opacity = "0";
    modalC11.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 12

let abrir12 = document.getElementById('cta-12');
let cerrar12 =  document.getElementById('modal_close12');
let modalC12 =  document.getElementById('modal_container12');

var imagen12_1 = document.getElementById('imagen12_1');
var imagen12_2 = document.getElementById('imagen12_2');
var imagen12_3 = document.getElementById('imagen12_3');
var imagen12_4 = document.getElementById('imagen12_4');

var img12 = document.getElementById('imagen12');

imagen12_1.onclick = function () {
    img12.src = "img/productos/producto-12.png";
}
imagen12_2.onclick = function () {
    img12.src = "img/productos/producto-12_2.png";
}
imagen12_3.onclick = function () {
    img12.src = "img/productos/producto-12_3.png";
}
imagen12_4.onclick = function () {
    img12.src = "img/productos/producto-12_4.png";
}

abrir12.addEventListener('click',function (e) {
    e.preventDefault();
    modalC12.style.opacity = "1";
    modalC12.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar12.addEventListener('click', function (e) {
    modalC12.style.opacity = "0";
    modalC12.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 13

let abrir13 = document.getElementById('cta-13');
let cerrar13 =  document.getElementById('modal_close13');
let modalC13 =  document.getElementById('modal_container13');

var imagen13_1 = document.getElementById('imagen13_1');
var imagen13_2 = document.getElementById('imagen13_2');
var imagen13_3 = document.getElementById('imagen13_3');
var imagen13_4 = document.getElementById('imagen13_4');

var img13 = document.getElementById('imagen13');

imagen13_1.onclick = function () {
    img13.src = "img/productos/producto-13.png";
}
imagen13_2.onclick = function () {
    img13.src = "img/productos/producto-13_2.png";
}
imagen13_3.onclick = function () {
    img13.src = "img/productos/producto-13_3.png";
}
imagen13_4.onclick = function () {
    img13.src = "img/productos/producto-13_4.png";
}

abrir13.addEventListener('click',function (e) {
    e.preventDefault();
    modalC13.style.opacity = "1";
    modalC13.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar13.addEventListener('click', function (e) {
    modalC13.style.opacity = "0";
    modalC13.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})

// PRODUCTO 14

let abrir14 = document.getElementById('cta-14');
let cerrar14 =  document.getElementById('modal_close14');
let modalC14 =  document.getElementById('modal_container14');

var imagen14_1 = document.getElementById('imagen14_1');
var imagen14_2 = document.getElementById('imagen14_2');
var imagen14_3 = document.getElementById('imagen14_3');
var imagen14_4 = document.getElementById('imagen14_4');

var img14 = document.getElementById('imagen14');

imagen14_1.onclick = function () {
    img14.src = "img/productos/producto-14.png";
}
imagen14_2.onclick = function () {
    img14.src = "img/productos/producto-14_2.png";
}
imagen14_3.onclick = function () {
    img14.src = "img/productos/producto-14_3.png";
}
imagen14_4.onclick = function () {
    img14.src = "img/productos/producto-14_4.png";
}

abrir14.addEventListener('click',function (e) {
    e.preventDefault();
    modalC14.style.opacity = "1";
    modalC14.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar14.addEventListener('click', function (e) {
    modalC14.style.opacity = "0";
    modalC14.style.visibility = "hidden";
    modal.style.display = "hidden";
    setTimeout(function () {
    },1000)
})



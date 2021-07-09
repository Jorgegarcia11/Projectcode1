let boton1 = document.getElementById("accion_1");
let boton2 = document.getElementById("accion_2");
let boton3 = document.getElementById("accion_3");
let boton4 = document.getElementById("accion_4");

let botonsig = document.getElementById("siguiente");

//Pregunta 1
//Eventos de los botones que haran cuando el usuario haga click

swal("Bienvenido al quiz de desarrollador");

boton1.addEventListener("click", () =>{
    boton1.classList.add("green")
    ocultar()
    next()
    deshabilitarboton1()
})

boton2.addEventListener("click", () =>{
    boton2.classList.add("red")
    deshabilitarboton1()
    next()
    ocultar()
})

boton3.addEventListener("click", () =>{
    boton3.classList.add("red")
    deshabilitarboton1()
    next()
    ocultar()
})

boton4.addEventListener("click", () =>{
    boton4.classList.add("red")
    deshabilitarboton1()
    next()
    ocultar()
})

//Funciones de pregunta 1 - Answer
function ocultar(){ //Pone en cursor default, no tiene efecto
    boton1.style.cursor = "default";
    boton2.style.cursor = "default";
    boton3.style.cursor = "default";
    boton4.style.cursor = "default";
}

function deshabilitarboton1 (){ //Desactiva el hover (black) y deshabilita el boton 
    boton1.classList.add("disabledbutton");
    boton2.classList.add("disabledbutton");
    boton3.classList.add("disabledbutton");
    boton4.classList.add("disabledbutton");
}

function next(){ //Aparece el boton siguiente (Para la proxima pregunta)
    botonsig.style.display = "flex";
}


//Pregunta 2
//Eventos de los botones que haran cuando el usuario haga click

let boton5 = document.getElementById("accion_5");
let boton6 = document.getElementById("accion_6");
let boton7 = document.getElementById("accion_7");
let boton8 = document.getElementById("accion_8");

let botonsig2 = document.getElementById("siguiente2");
let pregunta2 = document.getElementById("pregunta2");

botonsig.addEventListener("click", () =>{
    desapareceboton()
    answer2()
})

boton5.addEventListener("click", () =>{
    boton5.classList.add("red2")
    deshabilitarboton2()
    next2()
})

boton6.addEventListener("click", () =>{
    boton6.classList.add("red2")
    deshabilitarboton2()
    next2()
})

boton7.addEventListener("click", () =>{
    boton7.classList.add("green2")
    deshabilitarboton2()
    next2()
})

boton8.addEventListener("click", () =>{
    boton8.classList.add("red2")
    deshabilitarboton2()
    next2()
})

botonsig2.addEventListener("click", () =>{
    finalizar()
})

//Funciones de pregunta 2 - Answer

function desapareceboton () { //Desaparece los botones al hacer click en "siguiente" 
    boton1.classList.add("desapareceboton1");
    boton2.classList.add("desapareceboton1");
    boton3.classList.add("desapareceboton1");
    boton4.classList.add("desapareceboton1");
    botonsig.style.display = "none";
}

function answer2 () { //Aparecen la proxima pregunta y sus respuestas
    boton5.classList.add("answer2");
    boton6.classList.add("answer2");
    boton7.classList.add("answer2");
    boton8.classList.add("answer2");
    pregunta2.classList.add("question2")
}

function deshabilitarboton2 (){ //Desactiva el hover (black) y deshabilita el boton 
    boton5.classList.add("disabledbutton2");
    boton6.classList.add("disabledbutton2");
    boton7.classList.add("disabledbutton2");
    boton8.classList.add("disabledbutton2");
}

function next2(){ //Aparece el boton siguiente (Para la proxima pregunta)
    botonsig2.style.display = "flex";
}

function finalizar() {
    swal("Has finalizado el quiz, gracias por participar!");
}
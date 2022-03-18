// "use strict";

const canvas = document.getElementById('canvas');
const dif = canvas.getBoundingClientRect(); // nos permite conocer la distancia entre el top y el techo y el left y el techo
const context = canvas.getContext("2d");
const clear = document.getElementById('clear');


let painting,color,linewidth,difX,difY;

canvas.addEventListener("mousedown", e => { // esto es cuando el mouse se baje
    difX = e.clientX - dif.left; // calcula la diferencia que hay entre el mouse 
    difY = e.clientY - dif.top; // y la distancia del el canvas y el principio de la pantalla
    // e.clientX nos devuelve en que punto de la pantalla esta el mouse en el eje x
    // e.clientY nos devuelve en que punto de la pantalla esta el mouse en el eje y
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
    context.beginPath();
});

canvas.addEventListener("mousemove", e => { // mientras se mueva
    if (painting) {
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left; 
        difY = e.clientY - difY.top; 
    }
});

canvas.addEventListener("mouseup",()=> { // cuando se levanta
    context.closePath();
    painting = false; // para cuando levante deje de pintar
})

const dibujar = (x1,y1,x2,y2) => {
    context.strokeStyle = color;
    context.lineWidth = linewidth * 2;
    context.moveTo(x1,y1); // para mover el path a la posicion anterior
    context.lineTo(x2,y2); // crear la linea en la posicion
    context.stroke(); // crea la linea
}

clear.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

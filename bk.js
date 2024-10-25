

let car = document.getElementById('car');
let position = 0;
let speed = 2; // Velocidad del carro

function moveCar() {
    position += speed;
    car.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = -50; // Reinicia la posición cuando sale de la pantalla
    }
    requestAnimationFrame(moveCar);
}

moveCar();



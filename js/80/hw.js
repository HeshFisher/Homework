(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    const balls = [];
    const radiusInput = document.querySelector('#radius');
    const colorInput = document.querySelector('#color');
    const addButton = document.querySelector('#add');
    const RADIUS = 50;
    let x = RADIUS + 1;
    let y = RADIUS + 1;
    let dx = 1;
    let dy = 2.5;

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    function createBall(color, radius) {
        return {
            x: x,
            y: y,
            dx: dx,
            dy: dy,
            color,
            radius
        }
    }

    function draw(ball) {
        context.beginPath();
        context.fillStyle = ball.color;
        context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        context.fill();
    }

    function move(ball) {

        ball.x += ball.dx;
        ball.y += ball.dy;
        if (ball.x < ball.radius + 1 || ball.x >= theCanvas.width - (ball.radius + 1)) {
            ball.dx = -ball.dx;
        }

        if (ball.y < ball.radius + 1 || ball.y >= theCanvas.height - (ball.radius + 1)) {
            ball.dy = -ball.dy;
        }
    }



    setInterval(() => {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        balls.forEach(b => {
            draw(b);
            move(b);
        })




    }, 1);
    addButton.addEventListener('click', e => {
        e.preventDefault()
        balls.push(createBall(colorInput.value, Number(radiusInput.value)))
    })

}());

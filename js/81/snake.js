(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    let SNAKE_SIZE = 64;
    let direction = 'ArrowRight';

    const snakeHead = document.createElement('img');
    snakeHead.src = 'snakeHead.png';

    function resizeCanvas() {
        theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    class Snake {
        x = -SNAKE_SIZE;
        y = 0;
        move() {
            
                    context.clearRect(0, 0, theCanvas.width, theCanvas.height);


                    switch (direction) {
                        case 'ArrowRight':
                            this.x += SNAKE_SIZE
                            break;
                        case 'ArrowLeft':
                            this.x -= SNAKE_SIZE
                            break;
                        case 'ArrowUp':
                            this.y -= SNAKE_SIZE
                            break;
                        case 'ArrowDown':
                            this.y += SNAKE_SIZE
                            break;
                        default:
                            console.error(e.key, 'is not a valid key');
                    }
                    context.drawImage(snakeHead, this.x, this.y)
                }
        }
    

    const snake = new Snake();

    snakeHead.onload = () => {
    snake.move();   
}
if(!gameover){
 setTimeout(snake.move(),5);
}else{
    console.log('Game Over')
}

    document.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowDown':
                direction = e.key;
                break;
            default:
                console.error(e.key, 'is not a valid key');
        }
    })


}());
(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    const crashSound = document.querySelector('#crash');
    const crunchSound = document.querySelector('#crunch')


    let SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let gameover = false;
    let speed = 500;
    let score = 0;

    const snakeHead = document.createElement('img');
    snakeHead.src = 'snakeHead.png';

    const apple = document.createElement('img');
    apple.src = 'apple.png';

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
            context.drawImage(snakeHead, this.x, this.y);





            if (this.x + SNAKE_SIZE < 0 || this.x + SNAKE_SIZE >= theCanvas.width || this.y + SNAKE_SIZE < 0 || this.y + SNAKE_SIZE >= theCanvas.height) {
                gameover = true;
            }


        }
    }


    class Apple {
        constructor() {
            this.move();
        }

        draw() {
            context.drawImage(apple, this.x, this.y);
        }
        move() {
            this.x = this.getRandom(theCanvas.width);
            this.y = this.getRandom(theCanvas.height);
        }
        getRandom(max) {
            let rand = Math.floor(Math.random() * max);
            rand -= rand % SNAKE_SIZE;
            return rand;
        }

    }


    const snake = new Snake();
    const appleImg = new Apple();


    function game() {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);

        snake.move();

        if (snake.x === appleImg.x && snake.y === appleImg.y) {
            appleImg.move();
            crunchSound.currentTime = 0;
            crunchSound.play();
            speed *= .98;
            score++;
        }

        context.font = '30px Arial';
      context.fillText(`Score: ${score}`, theCanvas.width -200, 50);



        appleImg.draw();
        if (!gameover) {
            setTimeout(game, speed);
        } else {
            console.log('Game Over')
            crashSound.play()
        }
    }


    snakeHead.onload = () => {
        game();
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
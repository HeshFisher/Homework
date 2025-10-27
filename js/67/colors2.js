(function () {
  'use strict';
  let interval;
  const startButton = document.querySelector('#start');
  const colorTable = document.querySelector('#color-table tbody');

  function start() {
    interval = setInterval(() => {
      const color = pickRandomColor();
      const backgroundColor = pickRandomColor();

      document.body.style.color = color;
      document.body.style.backgroundColor = backgroundColor;

      const row = colorTable.insertRow();

      row.innerHTML = ` <td>${new Date().toLocaleTimeString()}</td>
                      <td>${color}</td>
                      <td>${backgroundColor}</td>`;

      row.style.color = color;
      row.style.backgroundColor = backgroundColor;
      row.addEventListener('click', () => {
        stop();
        document.body.style.color = color;
        document.body.style.backgroundColor = backgroundColor;
      });

      startButton.innerText = 'stop';
    }, 1000);
  }

  function pickRandomColor() {
    const randColor = Math.floor(Math.random() * 16777216);
    const hex = randColor.toString(16);
    const hexString = hex.padEnd(6, '0');
    return `#${hexString}`;
  }

  function stop() {
    clearInterval(interval);
    interval = null;
    startButton.innerText = 'start';
  }

  startButton.addEventListener('click', () => {
    if (!interval) {
      start();
    } else {
      stop();
    }
  });
}());

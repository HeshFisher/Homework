(function () {
  'use strict';

  let interval;
  const startButton = document.querySelector('#start');
  const color = document.querySelector('#color tbody');
  const colorTable = [];




  let increment = 50;

  function start() {
    let r = 0;
    let g = 0;
    let b = 0;


    interval = setInterval(() => {

      if ((r += increment) >= 256) {
        r = 0;

        if ((g += increment) >= 256) {
          g = 0;

          if ((b += increment) >= 256) {
            b = 0;
          }
        }
      }

      document.body.style.color = `rgb(${r}, ${g}, ${b})`;
      document.body.style.backgroundColor = `rgb(${b}, ${g}, ${r})`;

      console.log(`${r}, ${g}, ${b}`);

      const newColorRow = {
        time: new Date(),
        color: `R: ${r} G: ${g} B: ${b}`

      };

      colorTable.push(newColorRow);
      const row = color.insertRow();
      row.innerHTML = 
      `<td>${newColorRow.time.toLocaleString()}</td>
      <td>${newColorRow.color}</td>`;
      console.log(colorTable);

      startButton.innerText = 'stop';
    }, 1000);


  }


  function stop() {
    clearInterval(interval);
    interval = null;
    startButton.innerText = 'start';
  }


  startButton.addEventListener('click', e => {
    if (!interval) {
      start();
    } else {
      stop();
    }
  });
}());

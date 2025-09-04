(function () {
  let count = Number(document.querySelector('#theButton').textContent);

  document.querySelector('body').addEventListener('click', (b) => {
    if (b.target === document.body) {
      return;
    }
    const newButton = document.createElement('button');
    document.body.appendChild(newButton);
    newButton.textContent = ++count;
  });
}());

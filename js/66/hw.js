(function () {
  'use strict';
  // let count = Number(document.querySelector('#theButton').textContent);
    let count = 0 ;

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target === document.body) {
      return;
    }
    const newButton = document.createElement('button');
    document.body.appendChild(newButton);
    newButton.textContent = alphabet();
  });

  let alpha = 'a';



  // function alphabet(){
    
  // }
  const alphabet = function next(){
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      alpha = letters[count++];
      if(count === letters.length){
          count = 0;
      }
      return alpha;
    };
}());

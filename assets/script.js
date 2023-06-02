const textcontainer = document.getElementById('container');

// use interval function to "fade in" Coming soon... text one letter per 0.25 seconds and then make the point go from . to .. to ... and then back to . again and repeat

let text = 'Coming soon...';
let dots = '.';

function fadeInText() {
  let interval = setInterval(function() {
    if (text.length === 0) {
      clearInterval(interval);
      animateDots();
    } else {
      let letter = text.charAt(0);
      textcontainer.innerHTML += letter;
      text = text.slice(1);
    }
  }, 500);
}

function animateDots() {
  let dotInterval = setInterval(function() {
    if (dots === '...') {
      dots = '';
    } else {
      dots += '.';
    }
    textcontainer.innerHTML = 'Coming soon' + dots;
  }, 500);
}

fadeInText();
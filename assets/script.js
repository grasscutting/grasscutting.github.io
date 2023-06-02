const textcontainer = document.getElementById('container');

// use interval function to "fade in" Coming soon... text one letter per 0.25 seconds and then make the point go from . to .. to ... and then back to . again and repeat

let text = 'Coming soon';
let dots = '';

function fadeInText() {
    let interval = setInterval(function () {
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
    let dotInterval = setInterval(function () {
        if (dots === '...') {
            dots = '';
        } else {
            dots += '.';
        }
        // set margin of textcontainer to the width of the dots so that the text doesn't jump around
        let prefixspace = '';
        for (let i = 0; i < dots.length; i++) {
            prefixspace += '&nbsp;';
        }
        textcontainer.innerHTML = prefixspace + 'Coming soon' + dots;
    }, 500);
}

fadeInText();
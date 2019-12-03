document.addEventListener('DOMContentLoaded', function() {
    let presentContainer = document.getElementById('present_container');
    presentContainer.addEventListener('click', showPresent);

    let tds = document.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', calcAction);
    }

    let shape = document.getElementById('box');
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 37) {
            shape.style.left = (parseInt(shape.style.left) - 5) + 'px';
        } else if (e.keyCode == 39) {
            shape.style.left = (parseInt(shape.style.left) + 5) + 'px';
        } else if (e.keyCode == 40) {
            shape.style.top = (parseInt(shape.style.top) + 5) + 'px';
        } else if (e.keyCode == 38) {
            shape.style.top = (parseInt(shape.style.top) - 5) + 'px';
        }
        console.log(e.key);
        console.log(e.code);
    });
});

function calcAction(e) {
    let type = this.innerText;
    let display = document.getElementById('display');
    switch (type) {
        case 'C':
            display.value = "";
            break;
        case '=':
            display.value = eval(display.value);
            break;
        default:
            display.value += type;
    }
}

function showPresent(e) {
    let clickElem = e.target;
    let present = clickElem.dataset.present;
    if (present) {
        clickElem.textContent = libc()[present];
        clickElem.classList.add('present');
        this.removeEventListener('click', showPresent);
    }
}

function libc() {
    return {
        'car': 'машина',
        'book': 'самый лучший подарок',
        'dog': 'собака',
    }
}
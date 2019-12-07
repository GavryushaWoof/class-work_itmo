let domContainer = document.getElementById('slider');
let arr = [
    '../img/pic1.jpg',
    '../img/pic2.jpg',
    '../img/pic3.jpg',
];
let slider = new Slider(domContainer, arr);

slider.run();

let domContainer2 = document.getElementById("slider2");

let arr2 = [
    '../img/pic1.jpg',
    '../img/pic2.jpg',
];

let slider2 = new Slider(domContainer2, arr2);
slider2.run();
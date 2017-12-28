var images = [
    "img/main_image.jpg",
    "img/main_image_2.jpg",
    "img/main_image_3.jpg"
];

var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

function prev(){
    var slider = document.getElementById('slider');
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}

var loading_persent = 0;
function loading() {
    var load = document.getElementById('loading');
    loading_persent += 0.1;
    if(loading_persent > 100){
        loading_persent = 0;
    }
    load.style.width = loading_persent + '%';
}

var t = setInterval(next, 5000);
var l = setInterval(loading, 5);
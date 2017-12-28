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
    slider.src = images[num]
}
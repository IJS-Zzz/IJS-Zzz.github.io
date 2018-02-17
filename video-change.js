
//!!!!!!!!!!!!!!!!!!!
// id видосов Vimeo
// example:
//         https://vimeo.com/{id видоса}
var vimeo_file = [
    // VaadimS
    "247843675", //index 0,
    "254669553", //index 1,
    "249650837", //index 2,
    "255243953", //index 3,

    // Опыт
    // "199896940", //index 0, это Опыт - Maaskantje
    //"224036340", //index 1, Ruka may 17
    //"157497014", //index 2, Shredwood
    //"160966193", //index 3, Мокрое стекло
];
// !!!!!!!!!!!!!!!!!!

// Выбор основного видео
var video_Now = 0; //index 0, Индекс видео в плеере!


function viewHome() {
    home = document.getElementById('Home');
    bio = document.getElementById('Bio');

    home.style.display = 'block';
    bio.style.display = 'none';
}

function viewBio() {
    home = document.getElementById('Home');
    bio = document.getElementById('Bio');

    home.style.display = 'none';
    bio.style.display = 'block';
}

function indexFile(files, i=0){
    var len = files.length;
    if (i <= 0) {
        i = 0;
    } else if (i >= len) {
        i = len - 1;
    }
    return i
}


// function newVimeoVideo(i=0) {
//     i = indexFile(vimeo_file, i);

//     var preview = document.getElementById('video-preview');
//     preview.style.display = 'block';

//     var player = document.getElementById('Vimeo-player');
//     var url_video = 'https://player.vimeo.com/video/{video}?color=ffffff&title=0&byline=0&portrait=0';
//     var autoplay = '&autoplay=1'
//     player.src = url_video.replace('{video}', vimeo_file[i]);
// }

function VimeoPoster(obj, i=0){
    i = indexFile(vimeo_file, i);

    var info = infoFromVimeo(i);
    // загрузка постере Шириной 640px
    var url_poster = info.thumbnail_large;
    obj.title = info.title;
    obj.style.backgroundImage = 'url(' + url_poster + ')';
    obj.getElementsByClassName('video_name')[0].innerText = info.title;
    obj.getElementsByClassName('duration')[0].innerText = formatTime(info.duration);
}

function infoFromVimeo(i=0) {
    i = indexFile(vimeo_file, i);

    var url_json = "https://vimeo.com/api/v2/video/{video}.json".replace('{video}', vimeo_file[i]);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url_json, false);
    xhr.send()

    if (xhr.status != 200){
        console.log('Request to Vimeo — ' + xhr.status + ': ' + xhr.statusText);
        return null;
    }

    var data = JSON.parse(xhr.responseText);
    return data[0];
}

function formatTime(duration) {
    var seconds = duration%60;
    var minutes = (duration - duration%60)/60;
    var hours = (minutes - minutes%60)/60;
    minutes = minutes%60;

    var time = '';

    if (seconds < 10){
        seconds = '0' + seconds.toString();
    }
    if (minutes < 10){
        minutes = '0' + minutes.toString();
    }
    if (hours != 0){
        time = hours.toString() + ':' + minutes + ':' + seconds;
    } else{
        time = minutes + ':' + seconds;
    }
    return time;
}



function newVimeoVideo(obj, i=0) {
    i = indexFile(vimeo_file, i);

    video_Now = i;

    var preview = document.getElementById('video-preview');
    // preview.style.display = 'block';

    // при переходе на табличное выравнивание превью видоса
    preview.style.visibility = 'visible';


    var player = document.getElementById('Vimeo-player');
    player.src = "";
    player.style.backgroundImage = obj.style.backgroundImage;
    document.getElementById('video-preview-title').innerText = obj.getElementsByClassName('video_name')[0].innerText;

    // test!
    // document.getElementById('video-preview-author').innerText = infoFromVimeo(video_Now).user_name;

}

function startVideo() {
    var i = video_Now;

    var preview = document.getElementById('video-preview');
    // preview.style.display = 'none';

    // при переходе на табличное выравнивание превью видоса
    preview.style.visibility = 'hidden';

    var player = document.getElementById('Vimeo-player');
    var url_video = 'https://player.vimeo.com/video/{video}?color=ffffff&title=0&byline=0&portrait=0';
    var autoplay = '&autoplay=1';
    url_video += autoplay;
    player.src = url_video.replace('{video}', vimeo_file[i]);

}

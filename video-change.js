
var video_file = [
    ["video/video-1.MP4", "video/1.jpeg"],
    ["video/video-2.MP4", "video/2.png"],
    ["video/video-3.MP4", "video/3.png"],
    ["video/video-4.MP4", "video/4.png"],
];

//!!!!!!!!!!!!!!!!!!!
var vimeo_file = [
    "199896940", //index 0, это Опыт - Maaskantje
    "224036340", //index 1, Ruka may 17
    "157497014", //index 2, Shredwood
    "160966193", //index 3, Мокрое стекло
];
// !!!!!!!!!!!!!!!!!!


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

function newVideo(i=0) {

    i = indexFile(vimeo_file, i);

    var player = document.getElementById('my-video_html5_api');
    player.src = video_file[i][0];

    var poster = document.getElementsByClassName('vjs-poster')[0];
    poster.style.backgroundImage = 'url(' + video_file[i][1] + ')';
}

function newVimeoVideo(i=0) {
    i = indexFile(vimeo_file, i);

    var player = document.getElementById('Vimeo-video');
    var url_video = 'https://player.vimeo.com/video/{video}?color=ffffff&title=0&byline=0&portrait=0';
    var autoplay = '&autoplay=1'
    player.src = url_video.replace('{video}', vimeo_file[i]);
}

function VimeoPoster(obj, i=0){
    i = indexFile(vimeo_file, i);

    var info = infoFromVimeo(i);
    // загрузка постере Шириной 640px
    var url_poster = info.thumbnail_large; 
    obj.style.backgroundImage = 'url(' + url_poster + ')';
    obj.getElementsByClassName('video_name')[0].innerText = info.title;
}

function infoFromVimeo(i=0) {
    i = indexFile(vimeo_file, i);

    var url_json = "https://vimeo.com/api/v2/video/{video}.json".replace('{video}', vimeo_file[i]);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url_json, false);
    xhr.send()

    if (xhr.status != 200){
        console.log('Request to Vimeo — ' + xhr.status + ': ' + xhr.statusText)
        return
    }

    var data = JSON.parse(xhr.responseText);
    return data[0]
}




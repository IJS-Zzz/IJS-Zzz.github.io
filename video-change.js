
var video_file = [
    ["video/video-1.MP4", "video/1.jpeg"],
    ["video/video-2.MP4", "video/2.png"],
    ["video/video-3.MP4", "video/3.png"],
    ["video/video-4.MP4", "video/4.png"],
];


function newVideo(i=1) {
    --i;
    var len = video_file.length;

    if (i <= 0) {
        i = 0;
    } else if (i >= len) {
        i = len - 1;
    }

    var player = document.getElementById('my-video_html5_api');
    player.src = video_file[i][0];

    var poster = document.getElementsByClassName('vjs-poster')[0];
    poster.style.backgroundImage = 'url(' + video_file[i][1] + ')';
}

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



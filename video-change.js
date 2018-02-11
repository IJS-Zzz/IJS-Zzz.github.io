
var botTelegram_token = '531154660:AAHbcIl9rlAdsM0ykDih1zP3ec-OlvQ_qmM';

// alert('Этот сайт создан по заказу Вадика ака ПИЗДИЛЫ Сафронова. Приятного просмотра!');


//!!!!!!!!!!!!!!!!!!!
// id видосов Vimeo
// example:
//         https://vimeo.com/{id видоса}
var vimeo_file = [
    "199896940", //index 0, это Опыт - Maaskantje
    "224036340", //index 1, Ruka may 17
    "157497014", //index 2, Shredwood
    "160966193", //index 3, Мокрое стекло
];
// !!!!!!!!!!!!!!!!!!



var video_file = [
    ["video/video-1.MP4", "video/1.jpeg"],
    ["video/video-2.MP4", "video/2.png"],
    ["video/video-3.MP4", "video/3.png"],
    ["video/video-4.MP4", "video/4.png"],
];


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
        console.log('Request to Vimeo — ' + xhr.status + ': ' + xhr.statusText);
        return null;
    }

    var data = JSON.parse(xhr.responseText);
    return data[0];
}





// Ip function

function getVisitorIp() {
    var ip_info = new XMLHttpRequest();
    ip_info.open('GET', 'https://ipinfo.io/json', false);
    ip_info.send();

    if (ip_info.status != 200){
        console.log('Request to IpInfo.io — ' + ip_info.status + ': ' + ip_info.statusText);
        return null;
    }
    var ip_data = JSON.parse(ip_info.responseText)
    // console.log(ip_data);
    return ip_data;
}



function send_message_to_Tbot(text, token=botTelegram_token) {
    var api_url = "https://api.telegram.org/bot{token}/".replace('{token}', token);
    var body = 'sendMessage?chat_id=381294904&text={text}'.replace('{text}', text);
    url = api_url + body;

    // console.log(url);
    // console.log(api_url);
    // console.log(body);

    var bot = new XMLHttpRequest();
    bot.open('GET', url, true);
    bot.send();

}

// var my_ip = '';
var my_ip = '213.221.50.234';

var visitor = getVisitorIp();
if (visitor.ip != my_ip) {
    send_message_to_Tbot('New Visitor:%0A' + visitor.city + ': ' + visitor.ip);
}



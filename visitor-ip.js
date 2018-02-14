
var Bot_ON = false;
var my_ip = '93.185.30.108';
var botTelegram_token = '531154660:AAHbcIl9rlAdsM0ykDih1zP3ec-OlvQ_qmM';


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


// Send massage to telegram bot
function send_message_to_Tbot(text, token=botTelegram_token) {
    var api_url = "https://api.telegram.org/bot{token}/".replace('{token}', token);
    var body = 'sendMessage?chat_id=381294904&text={text}'.replace('{text}', text);
    url = api_url + body;

    var bot = new XMLHttpRequest();
    bot.open('GET', url, true);
    bot.send();

}




// Main work script
if (Bot_ON){
    var visitor = getVisitorIp();
    if (visitor.ip != my_ip) {
        send_message_to_Tbot('New Visitor:%0A' + visitor.city + ': ' + visitor.ip);
    } else {
        console.log('Hello!\nI know You!');
    }
}



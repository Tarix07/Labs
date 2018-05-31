"use strict";
var sp = 0.2;
var images;
var img_count = 0;
var cont = true;//при натисканні користувача змінюється, щоб призупинити анімацію
function print_on_canvas(canv, contxt) { //друкуємо текст поверх анімації
    "use strict";
    contxt.font = 'italic 15pt Arial';
    contxt.fillStyle = 'white';
    contxt.fillText('Камeні Нескінченності', 10, canv.height-50);
}
function draw_stones_gif(){
    "use strict";
    var stonesInHands = document.getElementById('stones_gif');
    var stonescontext = stonesInHands.getContext('2d');
    stonescontext.drawImage(images[Math.floor(img_count/4)], 0, 0);//малюємо рисунок
    img_count = Math.floor((img_count + 1) % 98);
    print_on_canvas(stonesInHands, stonescontext);//друкуємо текст
    if (cont) {
        requestAnimationFrame(draw_stones_gif);
    }
}
if(window.addEventListener){ //для ІЕ
    window.addEventListener('load', winload);
}
else{
    window.attachEvent('onload', winload);
}
function winload() {
    "use strict";
    if (document.all) { //ІЕ10- не має підтримки drawImage
        document.getElementById('for_canvas').innerHTML = '<p id="error">Ваш браузер не може відобразити анімацию. Співчуваю.</p>';
        return;
    }
    images = new Array(27); // масив картинок для анімації
    for (var i = 0; i < images.length; ++i) {
        images[i] = new Image();
        images[i].src = "images/gif/" + i + ".gif";
    }
    draw_stones_gif();
    window.onresize = function () { //масштабування анімації
        if (window.innerWidth >= 450 && window.innerWidth <= 600) {
            document.getElementById('stones_gif').width = window.innerWidth - 30;
            document.getElementById('stones_gif').height = 150;
        }
        else {document.getElementById('stones_gif').height = 222;}
        print_on_canvas(document.getElementById('stones_gif'), document.getElementById('stones_gif').getContext('2d'));
    };
    //задання розмірів при запуску
    document.getElementById('stones_gif').width = window.innerWidth >= 450 && window.innerWidth <= 600 ? window.innerWidth - 30 : 500;
    document.getElementById('stones_gif').height = window.innerWidth >= 450 && window.innerWidth <= 600 ? 150 : 222;
    document.getElementById('stones_gif').onclick = function() {
        if (cont) {
            cont = false;
        }
        else {
            cont = true;
            draw_stones_gif();
        }
    }
}

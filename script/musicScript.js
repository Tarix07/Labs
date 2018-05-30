window.onload = function () {
    "use strict";
    if (! !!document.createElement('canvas').getContext) { //перевірка, чи є підтримка рисування
        document.getElementsByTagName('section')[0].innerHTML = '<p id="error">Ваш браузер не может отобразить плеер. Просим прощения за неудобства.</p><a href="index.html">Вернуться на главную</a>';
        return;
    }
    var audio = document.getElementById('mus');
    var source;
    source = document.getElementsByTagName('source')[0];
    var ol = document.getElementsByTagName('ol')[0];
    var lis = ol.getElementsByTagName('li');
    var string = 'The Avengers '; //бігаючий рядок плеєра
    source.width = 100;
    var canvas = document.getElementById('track');
    var context = canvas.getContext('2d');
    var lines = [ //плаваючі лінії плеєра
        new line(15, 'white', 'violet', {x:3,y:6}),
        new line(120,'darkorange', 'darkred', {x:42, y:6}),
        new line(60, 'lightpink', 'tomato', {x:212, y:6}),
        new line(84, 'coral', 'golden', {x:3, y:130}, 0.5),
        new line(15, 'pink', 'orange', {x:124, y:130}, 0.5),
        new line(60, 'brown', 'red', {x:164, y:130}, 0.5)
    ];
    setInterval(running_string, 330);
    setInterval(running_lines, 55);

    function line(length, fst, snd, coord, speed) { //для створення об*єктів-ліній
        this.len = length;
        this.first = fst;
        this.second = snd;
        this.x = coord.x;
        this.y = coord.y;
        this.color = fst;
        if (speed) {
            this.sp = speed;
        } else {
            this.sp = 0.2;
        }
        this.move = function () {
            this.x += this.sp;
        };
        this.reverse = function () {
            this.color = this.color === this.first ? this.second : this.first;
            this.sp = -1.0 * this.sp;
        };
    }

    function running_lines () { //плаваючі лінії - при "ударі" набору ліній вони змінюють напрямок та колір
        context.clearRect(0,0, canvas.width, 20);
        context.clearRect(0,120, canvas.width, 30);
        for (var i = 0; i < lines.length; ++i) {
            context.lineWidth = 10;
            context.strokeStyle = lines[i].color;
            context.beginPath();
            context.moveTo(lines[i].x, lines[i].y);
            context.lineTo(lines[i].x + lines[i].len, lines[i].y);
            context.stroke();
            context.closePath();
            lines[i].move();
        }
        if (lines[2].x + lines[2].len > canvas.width || lines[0].x < 0) {
            lines[1].reverse();
            lines[0].reverse();
            lines[2].reverse();
        }
        if (lines[5].x + lines[5].len > canvas.width || lines[3].x < 0) {
            lines[3].reverse();
            lines[4].reverse();
            lines[5].reverse();
        }
    }

    function running_string ( ) { //бігаючий рядок - постійне зміщення рядку на символ
        context.clearRect(0,50,canvas.width, 30);
        var text = string;
        if (text.length < 12) {
            for (var i = 0, len = 12 - text.length; i < len; i++) {
                text = text + ' ';
            }
        }
        text = '      |' + text.substring(0, 14) + '|';
        context.font = 'italic 15pt monospace';
        context.fillStyle = '#bbbbbb';
        context.fillText(text, 0, 75);
        string = string.substring(1, string.length) + string[0];
    }
    for (var i = 0; i < lis.length; ++i) { //обробники подій при натисканні на елемент списку
        (function(id) {
            lis[id].onclick = function () {
                string = this.innerHTML + ' ';
                source.src = 'music/' + this.innerHTML.replace(/\ /g, '%20') + '.mp3';
                audio.pause();
                audio.load();
                audio.play();
            };
        }
        )(i);
    }
};
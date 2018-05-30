var pageLoad = function () {
    'use strict';
    //задаём параметры холста и действия для рисования
    canvas = document.getElementById('canva');
    if (window.innerWidth > 500){
        canvas.width = 395;
        canvas.height = 250;   
    } else {
        canvas.width = 395;
        canvas.height = 250;  
    }
    context = canvas.getContext('2d');
    canvas.onmousedown = start;
    canvas.onmouseup = stop;
    canvas.onmouseleave = leave;
    canvas.onmousemove = draw;
    //изменение параметров кисти
    document.getElementById('clearCanvas').onclick = clearCanvas;
    document.getElementById('colorRed').onclick = red;
    document.getElementById('colorBlue').onclick = blue;
    document.getElementById('colorYellow').onclick = yellow;
    document.getElementById('colorDarkViolet').onclick = purple;
    document.getElementById('colorGreen').onclick = green;
    document.getElementById('colorOrange').onclick = orange;
    document.getElementById('colorBlack').onclick = black;
    document.getElementById('eraser').onclick = white;

};
var canvas,
    context,
    X = new Array(),
    Y = new Array(),
    Drag = new Array(),
    paint,
    colorRed = 'red',
    colorBlue = 'blue',
    colorYellow = 'yellow',
    colorDarkViolet = 'purple',
    colorGreen = 'green',
    colorOrange = 'orange',
    colorBlack = 'black',
    eraser = 'white',

    Color = new Array(),
    cursorColor = colorRed,
    Size = new Array(),
    cursorSize = 'norm';

function Click(x, y, dragging) {
    X.push(x);
    Y.push(y);
    Drag.push(dragging);
    Color.push(cursorColor);
    Size.push(cursorSize);
}
function start(e) {//определеям положение курсора на холсте
    e = e || window.event;
    if (!e.pageX) {
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
        
    paint = true;
    new Click(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    newdraw();
}
function newdraw() {
    'use strict';
    var radius;
    context.lineJoin = 'round';
    for (var i=0; i < X.length; i++) {//определяем размер кисти выбраной пользователем
        if(Size[i] == 'norm') {
            radius = 10;
        } 
        //соединяем точки 
        context.beginPath();
        if(Drag[i] && i){
            context.moveTo(X[i-1], Y[i-1]);
        } else {
            context.moveTo(X[i]-1, Y[i]);
        }
        context.lineTo(X[i], Y[i]);
        context.closePath();
        context.strokeStyle = Color[i];
        context.lineWidth = radius;
        context.stroke();
    }
}
function draw(e) {//рисуем, при передвижении курсора по холсту
    e = e || window.event;
    if (!e.pageX) {
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    if(paint) {
        Click(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        newdraw();
    }
};
function leave(e) {//при выходе курсора за размеры холста, прекратить рисовать
    paint = false;
}
function stop(e) {//закончить рисовать
    paint = false;
    newdraw();
};
function clearCanvas()//очистка холста
{
    X = new Array();
    Y = new Array();
    Drag = new Array();
    Color = new Array();
    Size = new Array();
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function red() {
    cursorColor = colorRed;
}
function blue() {
    cursorColor = colorBlue;
}
function green() {
    cursorColor = colorGreen;
}
function yellow() {
    cursorColor = colorYellow;
}
function purple() {
    cursorColor = colorDarkViolet;
}
function orange() {
    cursorColor = colorOrange;
}
function black() {
    cursorColor = colorBlack;
}
//стирачка
function white() {
    cursorColor = eraser;
}

//запускаем скрип при загрузке страницы
if (window.addEventListener) {
    window.addEventListener('load', pageLoad);
} else {//для ІЕ
    window.attachEvent('onload', pageLoad);
}
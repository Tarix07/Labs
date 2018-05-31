"use strict";
window.onload = function() {

    var slo = document.getElementById("slogan");
    var ava = document.getElementById("avangers");
    var gua = document.getElementById("guardians");

    function createreq() {//функція для створення аякс-запиту
        var res = false;
        if (window.XMLHttpRequest) {
            res = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            if (new ActiveXObject("Microsoft.XMLHTTP")) {
                res = new ActiveXObject("Microsoft.XMLHTTP");
            } else if (new ActiveXObject("Msxml2.XMLHTTP")) {
                res = new ActiveXObject("Msxml2.XMLHTTP");
            } else {
                res = false;
                alert("Не вдалося створити аякс-запит. Співчуваю");
            }
        }
        return res;
    }

    var xhttp = createreq();//створення запиту
    slo.onclick = function () {//дії, що відбуваються при натисканні кнопки

        xhttp.open('GET', "forajax/slogan.txt", false);
        xhttp.send();
        if (xhttp.status != 200) {
            alert(xhttp.status + ': ' + xhttp.statusText);
        } else {
            var slogans = document.getElementById('ggg');
            slogans.innerHTML = xhttp.responseText.replace(/\n/g, '<br />');
                     document.getElementById('slogan'). disabled=true;
        }
    };
   var  request2 = createreq();
    ava.onclick = function () {
        //запрос для json файла
        request2.open('GET', 'forajax/avengers.json', false);
        request2.send();
        if (request2.status != 200) {//выводим ошибки
            alert(request2.status + ': ' + request2.statusText);
        } else {
            var i = 0,
                JSONDoc = JSON.parse(request2.responseText),
                table = '<tr>';
            for (name in JSONDoc) {
                table += '<th>' + name + '</th>';
            }
            table += '</tr>';
            for (name in JSONDoc['Месник']) {
                table += '<tr><td>' + JSONDoc['Месник'][name] + '</td><td>' + JSONDoc['Актор'][name] + '</td><td>'+JSONDoc['Опис'][name] + '</td></tr>';//создаём таблицу для полученных данных
                i++;
            }
            document.getElementById('avangers').disabled=true;
            document.getElementById('artists').innerHTML = table;//выводим результат
        }
    };
    
    var request3 = createreq();
    gua.onclick = function () {
        //запрос для xml файла
        request3.open('GET', 'forajax/guardians.xml', false);
        request3.send();
        if (request3.status != 200) {//выводим ошибки
            alert(request3.status + ': ' + request3.statusText);
        } else {
            var i,
                //создаём тамблицу для полученных данных
                xmlDoc = request3.responseXML,
                table = '<tr><th>Страж</th><th>Актор</th></th>',
                x = xmlDoc.getElementsByTagName('guardian');
            for (i = 0; i < x.length; i++) {
                table += '<tr><td>' + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName('actor')[0].childNodes[0].nodeValue;
            }
            document.getElementById('guardians').disabled=true;
            document.getElementById('galaxy').innerHTML = table;//выводим таблицу
        }
    };


    var images = document.getElementById('images');
    document.getElementById('send').onclick = function () {
        if (images.files && images.files.length == 0 || !images.value)
        {alert('Нема що відправити. Загрузіть деяке фото');}
        else {
            alert('Спасибі що приєднався до нас! (Месники)');
            location = 'index.html';
        }
    };
    images.onchange = function() {
        var ul = document.getElementsByTagName('ol')[0];
        ul.innerHTML = '';
        if (images.files) {
            for (var i = 0; i < images.files.length; i++) {
                var li = document.createElement('li');
                li.display = 'block';
                var img = new Image();
                img.src = URL.createObjectURL(images.files[i]);
                img.style.width = 200 + 'px';
                img.style.height = 200 + 'px';
                //img.width = 300;
                li.appendChild(img);
                ul.appendChild(li);
            }
        }
        else {
            var li = document.createElement('li');
            li.display = 'block';
            var img = new Image();
            img.src = images.value;
            img.style.width = 200 + 'px';
            img.style.height = 200 + 'px';
            li.appendChild(img);
            ul.appendChild(li);
        }
    };

}

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
            slo.disabled=true;
        }
    };
    var xhttp1 = createreq();
    ava.onclick = function () {
        var y = false;
        xhttp1.open('GET', "forajax/avengers.json", false);
        xhttp1.send();
        if (xhttp1.status != 200) {
            alert(xhttp1.status + ': ' + xhttp1.statusText);
        } else {
                var data = JSON.parse(xhttp1.responseText);
                var artists = document.getElementById('artists');
                var row = artists.insertRow(0);
                var cell = row.insertCell(0);
                cell.innerHTML = "Месник";
                cell = row.insertCell(1);
                cell.innerHTML = "Актор";
                cell = row.insertCell(2);
                cell.innerHTML = "Опис";
                for (var i = 0; i < 6; i++) {
                    row = artists.insertRow(i + 1);
                    cell = row.insertCell(0);
                    cell.innerHTML = data[i].name;
                    cell = row.insertCell(1);
                    cell.innerHTML = data[i].actor;
                    cell = row.insertCell(2);
                    cell.innerHTML = data[i].discr;

                }
                 ava.disabled=true;
        }
    };
    var xhttp2 = createreq();
    gua.onclick = function () {
        xhttp2.open('GET', "forajax/guardians.xml", false);
        xhttp2.send();

        if (xhttp2.status != 200) {
            alert(xhttp2.status + ': ' + xhttp2.statusText);
        } else {
            var xmlDoc = xhttp2.responseXML;
            var x = xmlDoc.getElementsByTagName("guardian");
            var row = document.getElementById("galaxy").insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = "Страж";
            cell = row.insertCell(1);
            cell.innerHTML = "Актор";
            for (i = 0; i < 6; i++) {
                row = document.getElementById("galaxy").insertRow(i + 1);
                cell = row.insertCell(0);
                cell.innerHTML = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                cell = row.insertCell(1);
                cell.innerHTML = x[i].getElementsByTagName("actor")[0].childNodes[0].nodeValue;
            }
gua.disabled=true;
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
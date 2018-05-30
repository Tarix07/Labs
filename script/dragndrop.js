var winload = function () {//елементи для перетягування
    "use strict";
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    var yellow = document.getElementById('yellow');
    var darkviolet = document.getElementById('darkviolet');
    var orange =document.getElementById('orange');
    var drop_zone;
    var style_zone;
    var context;
    var info = document.getElementById('bottom_info');
    if (document.getElementsByClassName) {//визначаємо дроп-зону, зону перетягування
        drop_zone = document.getElementsByClassName('drop_zone')[0];
        style_zone = document.getElementsByClassName('style')[0];
        context = document.getElementsByClassName('context')[0];
    } else {
        drop_zone = document.querySelectorAll('.drop_zone')[0];
        style_zone = document.querySelectorAll('.style')[0];
        context = document.querySelectorAll('.context')[0];
    }
    var drag_el;//ел-т draggable
    red.onmousedown = down_handler;
    green.onmousedown = down_handler;
    blue.onmousedown = down_handler;
    yellow.onmousedown = down_handler;
    darkviolet.onmousedown = down_handler;
    orange.onmousedown = down_handler;
     function down_handler(e) {
        drag_el = this;
        e = e || window.event;
        drag_el.ondragstart = function () {
            return false;
        };
        drag_el.style.position = 'absolute';//визначаємо положення
        moving(e);
        drag_el.style.zIndex = 1000; //встановлюємо поверх інших ел-в

        function moving(e) {
            e = e || window.event;
            if (!e.pageX) {
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }//далі - переміщення квадратиків у межах відповідного блока
            if (e.pageX - drag_el.offsetWidth / 2 > style_zone.offsetLeft && e.pageX + drag_el.offsetWidth / 2 < style_zone.offsetLeft + style_zone.offsetWidth) {
                drag_el.style.left = e.pageX - drag_el.offsetWidth / 2 + 'px';
            } else if (e.pageX + drag_el.offsetWidth / 2 < style_zone.offsetLeft + style_zone.offsetWidth) {
                drag_el.style.left = style_zone.offsetLeft + 'px';
            }
            if (e.pageY - drag_el.offsetHeight / 2 > style_zone.offsetTop && e.pageY + drag_el.offsetHeight / 2 < style_zone.offsetTop + style_zone.offsetHeight) {
                drag_el.style.top = e.pageY - drag_el.offsetHeight / 2 + 'px';
            } else if (e.pageY + drag_el.offsetHeight / 2 < style_zone.offsetTop + style_zone.offsetHeight) {
                drag_el.style.top = style_zone.offsetTop + 'px';
            }
        }
        document.onmousemove = moving;
        drag_el.onmouseup = function (e) {
            e = e || window.event;
            if (!e.pageX) {
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            document.onmousemove = null;
            drag_el.onmouseup = null;
       if (red !== drag_el && red.style.zIndex !== 1) {
                red.style.zIndex = 1;
            }
            if (green !== drag_el && green.style.zIndex !== 1) {
                green.style.zIndex = 1;
            }
            if (blue !== drag_el && blue.style.zIndex !== 1) {
                blue.style.zIndex = 1;
            }
            if (yellow !== drag_el && yellow.style.zIndex !== 1) {
                yellow.style.zIndex = 1;
            }
            if (darkviolet !== drag_el && darkviolet.style.zIndex !== 1) {
                darkviolet.style.zIndex = 1;
            }
            if (orange !== drag_el && orange.style.zIndex !== 1) {
                orange.style.zIndex = 1;
            }
            drag_el.style.zIndex = 2;
            //якщо ел-т кинули в дроп-зону, то змінити фон сторінки, оновити положення ел-в
            if (e.pageX > drop_zone.offsetLeft && e.pageX < drop_zone.offsetLeft + drop_zone.offsetWidth && e.pageY > drop_zone.offsetTop && e.pageY < drop_zone.offsetHeight + drop_zone.offsetTop) {
                if (drag_el === red) {
                    
                    drop_zone.style.backgroundImage = 'url(images/hand/HandRed.png)';
                    
                    info.innerHTML = '<h2>Камінь Реальності</h2>\
                            <p>Камінь дозволяє своєму власникові здійснювати будь-які бажання, навіть якщо ці бажання суперечать науковим законам.\
                            Якщо необережно його використовувати, камінь може привести до лиха.<br>\
                            Торкаючись кордон реальності, він викликає катастрофічні пошкодження, які можуть бути ізольовані тільки силою Каменя Простору, Каменя Душі і Каменя Сили.</p>';
               
                } else if (drag_el === green) {
                    
                    drop_zone.style.backgroundImage = 'url(images/hand/HandGre.png)';
                    
                     info.innerHTML = '<h2>Камінь Часу</h2>\
                            <p> Камінь дає своєму власникові повну владу над часом. З його допомогою стають доступними або видимими минуле, сьогодення і майбутнє.<br>\
                            Той, хто досконало володіє каменем може використовувати його силу як зброю, заманюючи в пастки ворогів або навіть цілі світи в нескінченні петлі часу.<br>\
                            Камень також може змусити об\'єкти і істот фізично повертатися до юності або старіти.</p>';
                
                } else if (drag_el === blue) {
                   
                    drop_zone.style.backgroundImage = 'url(images/hand/HandBl.png)';

                     info.innerHTML = '<h2>Камінь Простору</h2>\
                            <p>Камінь дозволяє своєму власникові існувати в будь-якому навколишньому просторі, будь то космос або підводні глибини; \
                            переміщати об\'єкти, себе та інших істот в будь-який куточок всесвіту; деформувати і перебудовувати простір.</p>';

                } else if (drag_el === darkviolet) {
                    
                    drop_zone.style.backgroundImage = 'url(images/hand/HandVio.png)';

                    info.innerHTML ='<h2>Камінь Сили</h2>\
                            <p>Камінь має доступ до всієї силі і енергії,яка коли-небудь існувала або існуючої в майбутньому, живить інші камені і підсилює їх ефекти.<br>\
                            Камінь дозволяє власнику дублювати практично будь-яку фізичну надлюдську здатність і ставати невразливим, \
                            а тому і непереможним, використовуючи одну лише суцільну силу.</p>';

                } else if (drag_el === orange) {
                   
                    drop_zone.style.backgroundImage = 'url(images/hand/HandOr.png)';

                    info.innerHTML ='<h2>Камінь Душі</h2>\
                            <p>Можливо найнебезпечніший з усіх, цей камінь має розум і відчуває голод, втамувати який можуть тільки душі.<br>\
                            Він дозволяє своєму власникові викрадати, підпорядковувати і змінювати душі живих або мертвих. \
                            Як не дивно, камінь є брамою в ідилічний кишеньковий всесвіт.</p>';

                } else {
                   
                    drop_zone.style.backgroundImage = 'url(images/hand/HandYel.png)';

                    info.innerHTML ='<h2>Камінь Розуму</h2>\
                            <p>Камінь дозволяє збільшувати силу свідомості власника і отримувати доступ до думок і снам інших істот.<br>\
                            Підтримуваний Каменем Сили, з його допомогою можливо отримати доступ одночасно до всіх існуючих розумів.<br>\
                            Камінь також може випускати внутрішніх демонів і заганяти їх назад.</p>';

                }
                reset_blocks();
            }
        };
    }
    window.onresize = reset_blocks;
    function reset_blocks() {//встановлення ел-в в початкове положення
        red.style.position = 'relative';
        green.style.position = 'relative';
        blue.style.position = 'relative';
        yellow.style.position = 'relative';
        orange.style.position = 'relative';
        darkviolet.style.position = 'relative';
        red.style.left = '5px';
        green.style.left = '5px';
        blue.style.left = '5px';
        yellow.style.left = '5px';
        darkviolet.style.left = '5px';
        orange.style.left = '5px';
        red.style.top = '10px';
        green.style.top = '10px';
        blue.style.top = '10px';
        yellow.style.top = '10px';
        darkviolet.style.top = '10px';
        orange.style.top = '10px';
    }
};


if (window.addEventListener) {
    window.addEventListener('load', winload);
} else {
    window.attachEvent('onload', winload);
}
(function() {
    let createAnimation = (items, effect) => {
        if (items) {
            for (let i = 0; i < items.length; i++) {
                const element = items[i];

                element.classList.add(effect);
            }
        }
    };

    let fade = 'revealator-fade';               // появление блока из прозрачности
    let up = 'revealator-slideup';              // появление блока из прозрачности снизу
    let right = 'revealator-slideleft';         // появление блока из прозрачности слева
    let left = 'revealator-slideright';         // появление блока из прозрачности справа
    let down = 'revealator-slidedown';          // появление блока из прозрачности сверху
    let zoomin = 'revealator-zoomin';           // появление блока из прозрачности от меньшего к большему
    let zoomout = 'revealator-zoomout';         // появление блока из прозрачности от большего к меньшему
    let rotateleft = 'revealator-rotateleft';   // появление блока из прозрачности вращением в левую сторону
    let rotateright = 'revealator-rotateright'; // появление блока из прозрачности вращением в правую сторону

    let collection01 = document.querySelectorAll('ПУТЬ К ЭЛЕМЕНТУ ИЛИ ЭЛЕМЕНТАМ');

    // вызываемая функция ниже содержит 2 параметра: 1 - список элементов, 2 - нужная анимация из верхнего списка
    
    createAnimation(collection01, left);
})();
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);



function init() {
  // Создание карты.    
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.61140907, 37.20112250],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13
  });
  myMap.behaviors.disable('scrollZoom');


    var myPlacemark = new ymaps.Placemark([55.61140907, 37.20112250], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/logo.png',
      iconImageSize: [60, 80],
      iconImageOffset: [-3, -42], 
  });

  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);
  placemark.balloon.open();

  
}

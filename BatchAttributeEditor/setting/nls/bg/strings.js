define({
  "page1": {
    "selectToolHeader": "Изберете метод за избор на записи за групово обновяване.",
    "selectToolDesc": "Изпълнимият модул поддържа 3 метода за генериране на избран набор със записи за обновяване. Може да изберете само един от методите. Ако се нуждаете от повече от един от тези методи, създайте нов потребителски модел на изпълнимия модул.",
    "selectByShape": "Избиране по област",
    "shapeTypeSelector": "Натиснете върху инструментите, които искате да разрешите",
    "shapeType": {
      "point": "Точка",
      "line": "Линия",
      "polyline": "Полилиния",
      "freehandPolyline": "Произволна полилиния",
      "extent": "Обхват",
      "polygon": "Полигон",
      "freehandPolygon": "Произволен полигон"
    },
    "freehandPolygon": "Произволен полигон",
    "selectBySpatQuery": "Избиране по обект",
    "selectByAttQuery": "Избиране по обект и споделени стойности на атрибут",
    "selectByQuery": "Избиране по заявка",
    "toolNotSelected": "Моля, изберете метод за избиране",
    "noDrawToolSelected": "Моля, изберете поне един инструмент за чертане"
  },
  "page2": {
    "layersToolHeader": "Изберете слоевете за обновяване и опциите за избор на инструменти, ако има такива.",
    "layersToolDesc": "Методът за избиране, който сте избрали на първа страница, ще бъде използван за избиране и обновяване на набор от слоеве, изброени по-долу. Ако отбележите повече от един слой, само общите полета за редактиране ще бъдат достъпни за обновяване. В зависимост от избора ви на инструмент за избиране ще са необходими допълнителни опции.",
    "layerTable": {
      "colUpdate": "Обновяване",
      "colLabel": "Слой",
      "colSelectByLayer": "Избиране по слой",
      "colSelectByField": "Поле за заявка",
      "colhighlightSymbol": "Подчертаване на символ"
    },
    "toggleLayers": "Превключва видимостта на слоевете при отваряне и затваряне",
    "noEditableLayers": "Няма слоеве за редактиране",
    "noLayersSelected": "Изберете един или повече слоеве, преди да продължите."
  },
  "page3": {
    "commonFieldsHeader": "Изберете полетата за групово обновяване.",
    "commonFieldsDesc": "Само общите полета за редактиране ще бъдат показани по-долу. Моля, изберете полетата, които искате да обновите. Ако едно и също поле от различни слоеве има различен домейн, ще бъде показан и използван само един домейн.",
    "noCommonFields": "Няма общи полета",
    "fieldTable": {
      "colEdit": "Редактируеми",
      "colName": "Име",
      "colAlias": "Псевдоним",
      "colAction": "Действия"
    }
  },
  "tabs": {
    "selection": "Определяне на тип избор",
    "layers": "Определяне на слой (-еве) за обновяване",
    "fields": "Определяне на поле (-та) за обновяване"
  },
  "errorOnOk": "Моля, попълнете всички параметри, преди да запазите конфигурацията",
  "next": "Напред",
  "back": "Назад",
  "save": "Запазване на символ",
  "cancel": "Отказ",
  "ok": "Ок",
  "symbolPopup": "Средство за избор на символ",
  "editHeaderText": "Текст за показване в горната част на изпълнимия модул",
  "widgetIntroSelectByArea": "Използвайте един от инструментите по-долу, за да създадете избран набор от обекти за обновяване. Ако редът е <font class='maxRecordInIntro'>маркиран</font>, максималният брой записи е надвишен.",
  "widgetIntroSelectByFeature": "Използвайте инструмента по-долу, за да изберете обекти от <font class='layerInIntro'>${0}</font> слой. Този обект ще бъде използван за избор и обновяване на всички пресичащи се обекти. Ако редът е <font class='maxRecordInIntro'>маркиран</font>, максималният брой записи е надвишен.",
  "widgetIntroSelectByFeatureQuery": "Използвайте инструмента по-долу, за да изберете обект от <font class='layerInIntro'>${0}</font> . Атрибутът на този обект <font class='layerInIntro'>${1}</font> ще бъде използван за заявка за слоевете по-долу и за обновяване на получените обекти. Ако редът е <font class='maxRecordInIntro'>маркиран</font>, максималният брой записи е надвишен.",
  "widgetIntroSelectByQuery": "Въведете стойност, за да създадете набор от селекции. Ако редът е <font class='maxRecordInIntro'>маркиран</font>, максималният брой записи е надвишен."
});
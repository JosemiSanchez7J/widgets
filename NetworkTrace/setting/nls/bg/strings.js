define({
  "taskUrl": "URL адрес на задача",
  "setTask": "Настройване",
  "setTaskPopupTitle": "Задаване на задача",
  "validate": "Настройване",
  "inValidGPService": "Моля, въведете валидна услуга за геообработка.",
  "noOutputParameterWithGeometryType": "Избраната услуга за геообработка трябва да има поне един изходен параметър с определен тип геометрия. Моля, изберете различна услуга за геообработка.",
  "invalidOutputGeometry": "Типът на изходната геометрия на избраната услуга за геообработка не е съвместим с настройките на проекта. Резултатите от услугата за геообработка не могат да бъдат съхранени.",
  "GPFeatureRecordSetLayerERR": "Моля, въведете услуга за геообработка само с входни данни от тип „GPFeatureRecordSetLayer“.",
  "invalidInputParameters": "Броят на входните параметри е по-малък от 1 или по-голям от 3. Моля, въведете валидна услуга за геообработка.",
  "projectSetting": {
    "title": "Настройки на проект",
    "note": "Забележка: Настройките на проекта не са задължителни, след като бъдат конфигурирани, потребителят може да съхранява проекта в желаните слоеве на уеб картата с областта на прекъсване на мрежата и входните параметри. Потребителят може да съхранява други изходни параметри от раздела „Изходни данни“.",
    "projectPolygonLayer": "Полигонен слой на проект",
    "outputParameterName": "Име на изходен параметър",
    "projectPointLayer": "Полигонова точка на проект",
    "selectLabel": "Избор",
    "polygonLayerHelp": "<p>Ще бъде показан полигонов слой(еве) със следните условия:<br/><ul><li>Слоят трябва да има възможности за редактиране, а именно „Създаване“, „Изтриване“ и „Обновяване“</li><li>Слоят трябва да има 2 полета с точното име и типове данни:</li><ul><li>име (текстово тип поле)</li><li>globalid (GUID тип поле)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Ще бъдат показани изходните полигонови слоеве от URL адреса на задачата<p/>",
    "pointLayerHelp": "<p>Ще бъде показана точка със следните условия:<br/><ul><li>Слоят трябва да има възможности за редактиране, а именно „Създаване“, „Изтриване“ и „Обновяване“</li><li>Слоят трябва да има 2 полета с точното име и типове данни:</li><ul><li>inputtype (текстово тип поле)</li><li>globalid (поле за типа GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Флаг",
    "barrier": "Бариера",
    "skip": "Пропускане",
    "title": "Въвеждане",
    "inputTooltip": "Tooltip",
    "typeText": "Тип",
    "symbol": "Символ",
    "summaryEditorText": "Текст на обобщение",
    "summaryTextTitle": "Предоставяне на текст за показване на раздела за въвеждане"
  },
  "summaryTab": {
    "title": "Извеждане",
    "summaryFieldsetText": "Настройки на обобщение",
    "inputOutput": "Входни/изходни данни",
    "field": "Поле",
    "operator": "Оператор",
    "inputOperatorCountOption": "Брой",
    "outputOperatorCountOption": "Брой",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Сума",
    "fieldOperatorMinOption": "Мин.",
    "fieldOperatorMaxOption": "Макс.",
    "fieldOperatorMeanOption": "Осреднена стойност",
    "expressionAddButtonText": "Добавяне",
    "expressionVerifyButtonText": "Проверка",
    "summaryEditorText": "Обобщаващ текст",
    "zoomText": "Автоматично мащабиране след проследяване",
    "summarSettingTooltipText": "Добавяне на брой входни/изходни данни",
    "symbol": "Символ",
    "outputParametersText": "Параметри на изходни данни",
    "skipText": "Може да се пропусне",
    "visibilityText": "Видимост",
    "exportToCsvText": "Експортиране в CSV",
    "settitngstext": "Настройки",
    "saveToLayerText": "Запазване към слой (опция)",
    "inputLabel": "Етикет",
    "inputTooltip": "Tooltip",
    "outputDisplay": "Текст за показване",
    "addFieldTitle": "Добавяне на поле",
    "setScale": "Настройване на мащаб",
    "enterDisplayText": "Въвеждане на текст за показване",
    "saveToLayerHelp": "<p>Ще бъде показан слой със следните условия:<br/><ul><li>Слоят трябва да има възможности за редактиране, а именно „Създаване“, „Изтриване“ и „Обновяване“'</li><li>Слоят трябва да има две полета с точното име и типове данни:</li><ul><li>име на параметър (текстово тип поле)</li><li>projectid (GUID тип поле)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Предоставяне на текст за обобщение на раздела за въвеждане",
    "addSummaryItemsTitle": "Добавяне на елементи за обобщение"
  },
  "validationErrorMessage": {
    "webMapError": "В уеб картата няма налични слоеве. Моля, изберете валидна уеб карта.",
    "inputTypeFlagGreaterThanError": "Входната стойност на типа флаг не може да бъде повече от една.",
    "inputTypeFlagLessThanError": "Изисква се най-малко една входна стойност за типа флаг.",
    "inputTypeBarrierErr": "Входната стойност на типа бариера не може да бъде повече от една.",
    "inputTypeSkipErr": "Входната стойност на типа пропускане не може да бъде повече от една.",
    "displayTextForButtonError": "Полето за текст за показване за бутона „Изпълнение“ не може да бъде празно.",
    "UnableToLoadGeoprocessError": "Услугата за геообработка не може да се зареди.",
    "invalidSummaryExpression": "Невалиден израз.",
    "validSummaryExpression": "Успешно!",
    "invalidProjectSettings": "Невалидни настройки на проекта.<br/> Моля, въведете валидна стойност в „${projectSetting}“."
  },
  "hintText": {
    "labelTextHint": "Съвет: Представете надпис за показване на панела с резултатите на изходния параметър.",
    "displayTextHint": "Съвет: Това ще бъде показано в панела с подробности за този изходен параметър.",
    "inputTextHint": "Съвет: Създайте своя израз по-долу, като използвате бутона за добавяне на елементи за обобщение.",
    "expressionHint": "Съвет: За да създадете израз, изберете елементи и натиснете върху „Добавяне“."
  }
});
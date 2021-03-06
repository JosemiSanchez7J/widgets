///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "_widgetLabel": "Анализ стоимости",
  "unableToFetchInfoErrMessage": "Невозможно вызвать информацию слоя сервиса геометрии/настроенного",
  "invalidCostingGeometryLayer": "Невозможно получить 'esriFieldTypeGlobalID' в слое геометрии расчета стоимости.",
  "projectLayerNotFound": "Невозможно найти настроенный слой проекта на карте.",
  "costingGeometryLayerNotFound": "Невозможно найти настроенный слой геометрии расчета стоимости на карте.",
  "projectMultiplierTableNotFound": "Невозможно найти настроенную таблицу множителя добавочной стоимости проекта на карте.",
  "projectAssetTableNotFound": "Невозможно найти настроенную таблицу объектов проекта на карте.",
  "createLoadProject": {
    "createProjectPaneTitle": "Создать проект",
    "loadProjectPaneTitle": "Загрузить проект",
    "projectNamePlaceHolder": "Название проекта",
    "projectDescPlaceHolder": "Описание проекта",
    "selectProject": "Выбрать проект",
    "viewInMapLabel": "Предварительный просмотр",
    "loadLabel": "Загрузить",
    "createLabel": "Создать",
    "deleteProjectConfirmationMsg": "Вы уверены, что хотите удалить проект?",
    "noAssetsToViewOnMap": "В выбранном проекте нет элементов для просмотра на карте.",
    "projectDeletedMsg": "Проект успешно удален.",
    "errorInCreatingProject": "Ошибка создания проекта.",
    "errorProjectNotFound": "Проект не найден.",
    "errorInLoadingProject": "Проверьте, что выбран корректный проект.",
    "errorProjectNotSelected": "Выбрать проект в ниспадающем списке",
    "errorDuplicateProjectName": "Имя проекта уже существует.",
    "errorFetchingPointLabel": "Ошибка при получении подписи точки. Повторите попытку еще раз",
    "errorAddingPointLabel": "Ошибка при добавлении подписи точки. Повторите попытку еще раз"
  },
  "statisticsSettings": {
    "tabTitle": "Настройки статистики",
    "addStatisticsLabel": "Добавить статистику",
    "addNewStatisticsText": "Добавить новую статистику",
    "deleteStatisticsText": "Удалить статистику",
    "moveStatisticsUpText": "Переместить статистику вверх",
    "moveStatisticsDownText": "Переместить статистику вниз",
    "layerNameTitle": "Слой",
    "statisticsTypeTitle": "Тип",
    "fieldNameTitle": "Поле",
    "statisticsTitle": "Подпись",
    "actionLabelTitle": "Действия",
    "selectDeselectAllTitle": "Выбрать все",
    "layerCheckbox": "Отметка слоя"
  },
  "statisticsType": {
    "countLabel": "Количество",
    "averageLabel": "Среднее арифметическое",
    "maxLabel": "Максимум",
    "minLabel": "Минимум",
    "summationLabel": "Суммирование",
    "areaLabel": "Площадь",
    "lengthLabel": "Длина",
    "expandCollapseAriaLabel": "'${displayTitle}' Число '${featureCount}'"
  },
  "costingInfo": {
    "noEditableLayersAvailable": "Слои, которые должны быть отмечена как редактируемые на вкладке настроек слоя"
  },
  "workBench": {
    "refresh": "Обновить",
    "noAssetAddedMsg": "Нет добавленный объектов",
    "units": "единицы измерения",
    "assetDetailsTitle": "Информация об элементе объекта",
    "costEquationTitle": "Уравнение стоимости",
    "newCostEquationTitle": "Новое уравнение",
    "defaultCostEquationTitle": "Уравнение по умолчанию",
    "geographyTitle": "География",
    "scenarioTitle": "Сценарий",
    "costingInfoHintText": "<div>Подсказка: Используйте следующие ключевые слова</div><ul><li><b>{TOTALCOUNT}</b>: Использует общее число объектов одного типа в географии</li> <li><b>{MEASURE}</b>: Использует длину для линейных объектов и площадь для полигональных</li><li><b>{TOTALMEASURE}</b>: Использует общую длину для линейных объектов и общую площадь для полигональных объектов одинакового типа в географии</li></ul> Можно использовать функции, например:<ul><li>Math.abs(-100)</li><li>Math.floor({TOTALMEASURE})</li></ul>Отредактируйте уравнение стоимости, как необходимо для проекта.",
    "zoomToAsset": "Приблизить к объекту",
    "deleteAsset": "Удалить объект",
    "closeDialog": "Закрыть диалог",
    "objectIdColTitle": "Object Id",
    "costColTitle": "Стоимость",
    "errorInvalidCostEquation": "Недопустимое уравнение стоимости.",
    "errorInSavingAssetDetails": "Невозможно сохранить информацию об объекте.",
    "featureModeText": "Режим создания объекта",
    "sketchToolTitle": "Скетч нового элемента.",
    "selectToolTitle": "Копировать элементы из существующего объекта на карте.",
    "downloadCSVBtnTitle": "Экспорт отчета",
    "templatePickerTitle": "Выбрать шаблон для создания нового элемента:"
  },
  "assetDetails": {
    "inGeography": " в ${geography} ",
    "withScenario": " в ${scenario}",
    "totalCostTitle": "Общая стоимость",
    "additionalCostLabel": "Описание",
    "additionalCostValue": "Значение",
    "additionalCostNetValue": "Общее значение"
  },
  "projectOverview": {
    "assetItemsTitle": "Элементы объекта",
    "assetStatisticsTitle": "Статистика объекта",
    "projectSummaryTitle": "Краткая информация проекта",
    "projectName": "Имя проекта: ${name}",
    "totalCostLabel": "Общая стоимость проекта (*):",
    "grossCostLabel": "Валовая стоимость проекта (*):",
    "roundingLabel": "* Округление до '${selectedRoundingOption}'",
    "unableToSaveProjectBoundary": "Невозможно сохранить границы проекта в слое проекта.",
    "unableToSaveProjectCost": "Невозможно сохранить стоимости в слое проекта.",
    "roundCostValues": {
      "twoDecimalPoint": "Два десятичных знака",
      "nearestWholeNumber": "Ближайшее целое число",
      "nearestTen": "Ближайшие десять",
      "nearestHundred": "Ближайшие сто",
      "nearestThousand": "Ближайшие тысяча",
      "nearestTenThousands": "Ближайшие десять тысяч"
    }
  },
  "projectAttribute": {
    "projectAttributeText": "Атрибут проекта",
    "projectAttributeTitle": "Редактировать атрибуты проекта"
  },
  "costEscalation": {
    "costEscalationLabel": "Добавить добавочную стоимость",
    "valueHeader": "Значение",
    "addCostEscalationText": "Добавить добавочную стоимость",
    "deleteCostEscalationText": "Удалить выбранную добавочную стоимость",
    "moveCostEscalationUpText": "Переместить вверх выбранную добавочную стоимость",
    "moveCostEscalationDownText": "Переместить вниз выбранную добавочную стоимость",
    "invalidEntry": "Одна или несколько записей некорректны.",
    "errorInSavingCostEscalation": "Невозможно сохранить информацию о добавочной стоимости."
  },
  "scenarioSelection": {
    "popupTitle": "Выбрать сценарий для объекта",
    "regionLabel": "География",
    "scenarioLabel": "Сценарий",
    "noneText": "Нет",
    "copyFeatureMsg": "Хотите копировать выбранные объекты?"
  },
  "detailStatistics": {
    "detailStatisticsLabel": "Подробности статистики",
    "noDetailStatisticAvailable": "Статистика объекта не добавлена",
    "addStatisticsButtonLabel": "Добавить"
  },
  "copyFeatures": {
    "title": "Копировать объекты",
    "createFeatures": "Создать объекты",
    "createSingleFeature": "Создать 1 объект множественной геометрии",
    "noFeaturesSelectedMessage": "Отсутствуют выбранные объекты",
    "selectFeatureToCopyMessage": "Выберите объект для копирования.",
    "copyFeatureUpdateGeometryError": "Не удалось обновить геометрию выбранных объектов"
  },
  "updateCostEquationPanel": {
    "updateProjectCostTabLabel": "Обновить уравнения проекта",
    "updateProjectCostSelectProjectTitle": "Выбрать все проекты",
    "updateButtonTextForm": "Обновление",
    "updateProjectCostSuccess": "Уравнения стоимости обновлены для выбранных проектов",
    "updateProjectCostError": "Невозможно обновить уравнение стоимости для выбранных проектов",
    "updateProjectNoProject": "Проекты не найдены"
  }
});
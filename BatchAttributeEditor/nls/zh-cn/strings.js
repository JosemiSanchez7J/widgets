define({
  "_widgetLabel": "批处理属性编辑器",
  "widgetIntroSelectByArea": "Use one of the tools below to create a selected set of features to update.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
  "widgetIntroSelectByFeature": "Use the tool below to select a feature from <font class='layerInIntro'>${0}</font> layer.  This feature will be used select and update all intersecting features.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
  "widgetIntroSelectByFeatureQuery": "Use the tool below to select a feature from <font class='layerInIntro'>${0}</font> .  This feature's <font class='layerInIntro'>${1}</font> attribute will be used to query the layers below and update the resulting features.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
  "widgetIntroSelectByQuery": "Enter a value to create a selection set.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
  "layerTable": {
    "colLabel": "图层名称",
    "numSelected": "#",
    "colSyncStatus": ""
  },
  "noConfiguredLayers": "未配置可编辑图层",
  "editorPopupTitle": "批处理属性编辑器",
  "editorPopupSaveBtn": "保存",
  "editorPopupMultipleValues": "",
  "clear": "清除",
  "featuresUpdated": "已更新 ${0} / ${1} 要素",
  "featuresSelected": "已选定 ${0} 要素",
  "featuresSkipped": "已忽略",
  "featuresNoPermision": "已选择 ${0} 个要素，但不具有编辑权限。",
  "search": "搜索",
  "queryInput": "输入要查询的值",
  "noFilterTip": "Without filter expression defined, this query task will list all features in the specified data source.",
  "setFilterTip": "请正确设置过滤器。",
  "filterPopup": "过滤图层",
  "filterAppend": "如果 web 地图中已存在此图层的过滤器",
  "filterAppendOR": "向现有地图过滤器追加任意表达式",
  "filterAppendAND": "向现有地图过滤器追加所有表达式",
  "cancel": "取消",
  "noValue": "无值",
  "emptyString": "空字符串",
  "existingValue": "保留现有值",
  "newDate": "新日期",
  "valueChooser": "选择/键入值",
  "ok": "确定",
  "drawBox": {
    "point": "点",
    "line": "线",
    "polyline": "折线",
    "freehandPolyline": "手绘折线",
    "extent": "范围",
    "polygon": "面",
    "freehandPolygon": "手绘面",
    "clear": "清除",
    "addPointToolTip": "单击以在此区域中选择",
    "addShapeToolTip": "绘制形状以选择要素",
    "freehandToolTip": "按住并绘制形状以选择要素",
    "startToolTip": "绘制形状以选择要素"
  },
  "errors": {
    "layerNotFound": "Layer ${0} with ID ${1} was not found in the map, the map may have changed since the widgets configuration",
    "queryNullID": "${0} 的要素返回了无效 ID",
    "noSelectedLayers": "所选图层中未含有要更新的记录",
    "inputValueError": "表单中的无效值",
    "saveError": "无法保存 ${0} 要素和向控制台添加的详细信息",
    "requiredValue": "所需值"
  }
});
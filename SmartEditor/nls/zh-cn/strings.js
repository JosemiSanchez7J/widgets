define({
  "_widgetLabel": "智能编辑器",
  "_featureAction_SmartEditor": "智能编辑器",
  "noEditPrivileges": "您的帐户不具备创建或修改数据的权限。",
  "loginPopupTitle": "登录",
  "loginPopupMessage": "${widgetName} 需要权限和配额以查找和存储地址信息。 是否登录以使用此功能?",
  "noCreditsOrPrivilegeWarningMessage": "您的账户不具有使用 ${widgetName} 查找和存储地址信息所需的权限和配额。 请联系您的组织管理员，以请求权限和配额。 单击“确定”以继续编辑。",
  "unableToUseLocator": "定位器无法访问。 将不会执行地址属性操作。 单击“确定”以继续编辑。",
  "locatorDisabledWaning": "未启用定位器。 请联系您的组织管理员，以请求此功能。 单击“确定”以继续编辑。",
  "noFeatureInAIWarning": "未选中要素。 请选择要执行编辑的要素，或单击“取消”返回至主屏幕。",
  "noEditableLayerWarning": "您的帐户无权创建或修改数据，或者此 web 地图不包含任何可编辑图层。",
  "noVisibleCreateLayerWarning": "该图层在当前缩放级别不可见。 缩放以创建/修改要素。",
  "noVisibleUpdateLayerWarning": "该图层在当前缩放级别不可见。 缩放以修改要素。",
  "checkLayerVisibilityInWebMapWarning": "确保图层在地图上可见以创建或修改要素。",
  "showSelectionInAITitle": "所选要素",
  "showSelectionInAIMsg": "是否要在 ${widgetName} 中加载当前选择?",
  "widgetActive": "激活",
  "widgetNotActive": "不激活",
  "pressStr": "按 ",
  "ctrlStr": " Ctrl 键 ",
  "snapStr": " 以启用捕捉",
  "noAvailableTempaltes": "无可用模板",
  "editorCache": " - 编辑器缓存",
  "presetFieldAlias": "字段",
  "presetValue": "预设值",
  "usePresetValues": " 使用预设值(仅限新要素)",
  "editGeometry": " 编辑几何",
  "savePromptTitle": "保存要素",
  "savePrompt": "是否保存当前要素?",
  "deletePromptTitle": "删除要素",
  "deleteAttachment": "删除附件",
  "deletePrompt": "确定要删除所选要素?",
  "attachmentLoadingError": "上传附件时出错",
  "attachmentSaveDeleteWarning": "警告 :将自动保存对附件进行的更改",
  "autoSaveEdits": "自动保存新要素",
  "addNewFeature": "创建新要素",
  "featureCreationFailedMsg": "无法创建新记录/要素",
  "relatedItemTitle": "相关表/图层",
  "relatedFeatureCount": "包含 ${featureCount} 个要素的 ${layerTitle}",
  "createNewFeatureLabel": "为 ${layerTitle} 创建新要素",
  "invalidRelationShipMsg": "请确保主键字段：“${parentKeyField}”具有有效值",
  "pendingFeatureSaveMsg": "请在创建相关要素之前保存要素编辑内容。",
  "attachmentsRequiredMsg": "(*)需要附件。",
  "coordinatePopupTitle": "将要素移动到 XY 位置",
  "coordinatesSelectTitle": "坐标系：",
  "mapSpecialReferenceDropdownOption": "地图空间参考",
  "latLongDropdownOption": "纬度/经度",
  "mgrsDropdownOption": "军事格网参考系 (MGRS)",
  "mgrsTextBoxLabel": "坐标：",
  "xAttributeTextBoxLabel": "X 坐标：",
  "yAttributeTextBoxLabel": "Y 坐标：",
  "latitudeTextBoxLabel": "纬度：",
  "longitudeTextBoxLabel": "经度：",
  "presetGroupFieldsLabel": "“${groupName}”将应用于以下图层字段：",
  "presetGroupNoFieldsLabel": "“${groupName}”没有任何关联字段",
  "groupInfoLabel": "“${groupName}”的群组信息",
  "editGroupInfoIcon": "编辑 ${groupName} 的群组值",
  "filterEditor": {
    "all": "全部",
    "noAvailableTempaltes": "无可用模板",
    "searchTemplates": "搜索模板",
    "filterLayerLabel": "过滤图层"
  },
  "invalidConfiguration": "微件尚未配置或配置中的图层已不在地图中。请在构建器模式下打开应用程序，然后重新配置微件。",
  "geometryServiceURLNotFoundMSG": "无法获取几何服务 URL",
  "clearSelection": "关闭",
  "refreshAttributes": "更新动态要素属性",
  "automaticAttributeUpdatesOn": "自动更新要素属性：开",
  "automaticAttributeUpdatesOff": "自动更新要素属性：关",
  "moveSelectedFeatureToGPS": "将所选要素移动至当前 GPS 位置",
  "moveSelectedFeatureToXY": "将所选要素移动至 XY 位置",
  "mapNavigationLocked": "地图导航：已锁定",
  "mapNavigationUnLocked": "地图导航：已解锁",
  "copyFeatures": {
    "title": "选择要复制的要素",
    "createFeatures": "创建要素",
    "createSingleFeature": "创建 1 个多部分要素",
    "createOneSingleFeature": "创建要素",
    "noFeaturesSelectedMessage": "未选择任何要素",
    "selectFeatureToCopyMessage": "请选择要复制的要素",
    "multipleFeatureSaveWarning": "使用此功能创建多个要素将立即保存所有新要素。 创建新的多部分要素时不支持字段匹配。",
    "copyFeatureUpdateGeometryError": "无法更新所选要素的几何。",
    "canNotSaveMultipleFeatureWarning": "针对唯一值字段，无法使用相同的值复制多个要素，请仅选择一个要素",
    "createOnlyOneMultipartFeatureWarning": "只能创建一个多部分要素",
    "layerLabel": "${layerName} (${selectedFeatures}/${totalFeatures})",
    "layerAriaLabel": "${layerName} ${selectedFeatures}/${totalFeatures} 个要素已选择"
  },
  "addingFeatureError": "在图层中添加选定要素时出错。 请重试。",
  "addingFeatureErrorCount": "'${copyFeatureErrorCount}' 个要素复制失败。 是否重新尝试缺少的要素?",
  "selectingFeatureError": "选择图层中的要素时出错。 请重试。",
  "customSelectOptionLabel": "选择要复制的要素",
  "copyFeaturesWithPolygon": "通过面复制",
  "copyFeaturesWithRect": "通过矩形复制",
  "copyFeaturesWithLasso": "通过套索复制",
  "noFeatureSelectedMessage": "未选择要素",
  "multipleFeatureSaveMessage": "所有要素都将立即保存。 是否要继续?",
  "relativeDates": {
    "dateTypeLabel": "日期类型",
    "valueLabel": "值",
    "fixed": "固定",
    "current": "当前",
    "past": "过去",
    "future": "未来",
    "popupTitle": "选择值",
    "hintForFixedDateType": "提示：指定的日期和时间将用作预设默认值。",
    "hintForCurrentDateType": "提示：当前日期和时间将用作预设默认值。",
    "hintForPastDateType": "提示：将从当前日期和时间减去指定值，以获取预设默认值。",
    "hintForFutureDateType": "提示：将当前日期和时间加上指定值，以获取预设默认值。",
    "noDateDefinedTooltip": "未定义日期",
    "relativeDateWarning": "必须指定日期或时间值才能保存默认预设值。",
    "customLabel": "自定义安装",
    "layerLabel": "图层",
    "domainFieldHintLabel": "所选值为编码值属性域。 将使用值：\"${domainValue}\""
  },
  "valuePicker": {
    "popupTitle": "选择值",
    "popupHint": "当前要素与多个要素相交，请选择相应字段的值。",
    "buttonTooltip": "从多个相交要素中选择值"
  },
  "uniqueValueErrorMessage": "值已存在于 \"${fieldName}\" 中，请提供新值。",
  "requiredFields": {
    "displayMsg": "必填字段不能为空。 请提供以下常见字段的值。",
    "popupTittle": "所需字段",
    "foundNullRecordCount": "${fieldName} (位于 ${count} 个记录中)"
  },
  "fieldsMapping": {
    "popupTittle": "应用字段匹配",
    "fieldsMatchingCheckboxLabel": "复制的要素中的值将覆盖目标字段中的默认值",
    "resetLabel": "重置",
    "clearLabel": "清除",
    "fieldsInTargetLayerLabel": "目标",
    "fieldsInSourceLayerLabel": "源",
    "targetFieldsMatchedLabel": "${layerName}（${matchedFields}/${totalFields} 个字段已匹配）",
    "selectSourceFieldLabel": "- 选择 -",
    "selectFieldAriaLabel": "选择目标字段 ${targetField} 的源字段",
    "informativeText": "查看从源到目标的字段匹配并根据需要进行自定义。",
    "dynamicValueText": "已设置动态值",
    "noFieldsToMatchLabel": "没有要匹配的字段"
  },
  "cantLocateUserLocation": "无法确定您的位置",
  "tryAgainButtonLabel": "请重试",
  "copyFeatureFailedPopupTitle": "糟糕!"
});
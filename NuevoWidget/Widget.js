///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(["esri/layers/FeatureLayer", "dojo/dom",'dojo/_base/declare', 'jimu/BaseWidget'],
  function(FeatureLayer, dom, declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

       postCreate: function() {
        console.log('postCreate');
      },

      evento1: function() {
        var layer1 = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/CENTROS_SALUD_j/FeatureServer/0", {
          showLabels: true,
          outFields: ["*"],
        });
          this.map.addLayer(layer1);
      },

      startup: function() {
       console.log('startup');
      },

      onOpen: function(){
        console.log('onOpen');
      },

      onClose: function(){
        console.log('onClose');
      },

      onMinimize: function(){
        console.log('onMinimize');
      },

      onMaximize: function(){
        console.log('onMaximize');
      },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });
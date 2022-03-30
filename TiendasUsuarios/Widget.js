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
define(['dojo/_base/declare', "esri/layers/FeatureLayer",
"esri/tasks/query", "esri/geometry/Circle", "esri/symbols/PictureMarkerSymbol",
"esri/graphic", "esri/symbols/SimpleMarkerSymbol",
"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer",
"esri/config", "esri/Color", "dojo/dom", "dojo/domReady!", 'jimu/BaseWidget'],
  function(declare,FeatureLayer,
    Query, Circle, PictureMarkerSymbol,
    Graphic, SimpleMarkerSymbol,
    SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
    esriConfig, Color, dom, BaseWidget) {
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

      startup: function() {
       console.log('startup');
      },

      onOpen: function(){
        console.log('onOpen');
        var estacionesLayer = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Usuarios_Demanda/FeatureServer/0", {
          outFields: ["*"]
      });
  
      // Simbología marcado
      var marker = new PictureMarkerSymbol();
      marker.setHeight(15);
      marker.setWidth(20);
      marker.setUrl("http://cdn.onlinewebfonts.com/svg/img_538285.png");
      estacionesLayer.setSelectionSymbol(marker);
  
      // Make unselected features invisible
      var nullSymbol = new SimpleMarkerSymbol().setSize(0);
      estacionesLayer.setRenderer(new SimpleRenderer(nullSymbol));
  
      map.addLayer(estacionesLayer);
  
      var circleSymb = new SimpleFillSymbol(
          SimpleFillSymbol.STYLE_NULL,
          new SimpleLineSymbol(
              SimpleLineSymbol.STYLE_SHORTDASHDOTDOT,
              new Color([105, 105, 105]),
              2
          ), new Color([255, 255, 0, 0.25])
      );
      var circle;
  
      // When the map is clicked create a buffer around the click point of the specified distance
      map.on("click", function (evt) {
          circle = new Circle({
              center: evt.mapPoint,
              geodesic: true,
              radius: 500,
              radiusUnit: "esriMeters"
          });
          map.graphics.clear();
          var graphic = new Graphic(circle, circleSymb);
          map.graphics.add(graphic);
  
          var query = new Query();
          query.geometry = circle.getExtent();
          // Use a fast bounding box query. It will only go to the server if bounding box is outside of the visible map.
          estacionesLayer.queryFeatures(query, selectInBuffer);
      });
  
      function selectInBuffer(response) {
          var feature;
          var features = response.features;
          var inBuffer = [];
          // Filter out features that are not actually in buffer, since we got all points in the buffer's bounding box
          for (var i = 0; i < features.length; i++) {
              feature = features[i];
              if (circle.contains(feature.geometry)) {
                  inBuffer.push(feature.attributes[estacionesLayer.objectIdField]);
              }
          }
          var query = new Query();
          query.objectIds = inBuffer;
          // Use an objectIds selection query (should not need to go to the server)
          estacionesLayer.selectFeatures(query, FeatureLayer.SELECTION_NEW);
      }
      },

      onClose: function(){
        console.log('onClose');
      },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

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
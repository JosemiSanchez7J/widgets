define(['dojo/_base/declare', "dojo/on", "dojo/dom","esri/layers/WMSLayer","esri/layers/WMSLayerInfo","esri/geometry/Extent", 'jimu/BaseWidget'],
  function(declare,on, dom,WMSLayer,WMSLayerInfo, Extent, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      onOpen: function(){
        console.log('onOpen', this.config);
      },

      onclick: function(){
        if(this.input1 != "")
        var layerinfo = new WMSLayerInfo({
          name: this.config.name,
          title: this.config.hello
        })
        // var resourceInfo = {
        //   extent: new Extent(-100,40,-100,40,{wkid:4326}),
        //   layerInfos: [layerinfo]
        //   },
        var tuinput = dom.byId("input1").value;
        var capa = new WMSLayer(tuinput,{
          //resourceInfo: resourceInfo,
          visibleLayers: this.config.name
        }); 
        this.map.addLayer(capa);
        console.log('click', capa)
        // var extent = capa.fullExtent
        // this.map.setExtent(extent)
        
      }

      // onClose: function(){
      //   console.log('onClose');
      // },

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
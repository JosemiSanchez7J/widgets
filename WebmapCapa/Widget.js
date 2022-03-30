define(['dojo/_base/declare',"dojo/dom","dojo/_base/lang", 'jimu/BaseWidget'],
  function(declare,dom,lang, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',
      name: "webmap",

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        console.log('postCreate');
      },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      onOpen: function(){
        console.log('onOpen', this.map);
        dom.byId("caja1").innerHTML = "Tipo de acceso: " + this.map.itemInfo.item.access;

        dom.byId("caja2").innerHTML = "Identificador: " + this.map.itemInfo.item.id;

        dom.byId("caja3").innerHTML = "Tipo: " + this.map.itemInfo.item.type;

        dom.byId("caja4").innerHTML = "Etiquetas: " + this.map.itemInfo.item.tags;
      },

        

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
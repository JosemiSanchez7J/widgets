
define(['dojo/_base/declare', "dojo/on", "dojo/dom",'jimu/BaseWidget'],
  function(declare, on, dom, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-translator',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {

      },

      startup: function() {
       console.log('startup');
      },

      onOpen: function(){
        console.log('onOpen');
      },

      onclick(){
        var zoom = dom.byId('input3').value
        var latitud = dom.byId("input1").value
        var longitud = dom.byId("input2").value
        var array = [latitud,longitud]
        this.map.centerAndZoom(array,zoom);

      },
      onClose: function(){
        console.log('onClose');
      },

      onMinimize: function(){
        console.log('onMinimize');
      },

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
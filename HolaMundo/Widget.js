define(["dojo/dom",'dojo/_base/declare', 'jimu/BaseWidget'],
  function(dom, declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-helloWorld',
      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
      console.log('postCreate');
       },

      sayHello: function(){
        //alert('hey');
        let current = this.map.extent;
        dom.byId("xMin").innerHTML = current.xmin;
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
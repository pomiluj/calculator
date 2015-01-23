//Attaches to #input in index.html
define(['jquery', 'flight'], function($, flight){

  var input = flight.component(function(){

    this.attributes({
      theBox: '#theBox',
      buffer: '#buffer'
    });

    this.addBumbers = function(e,d){//Bumbers!
      var b = this.select('theBox');
      var currentOutput = b.val();
      b.val(currentOutput+""+d.number);
      //console.log('number received!');
      //console.log(d);
    };

    this.addBoperation = function(e,d){
      var currentBuffer = this.select('buffer').val();
      console.log(d);
    };

    this.after('initialize', function(){
      this.on(document, 'addNumbers', this.addBumbers);
      this.on(document, 'addOperation', this.addBoperation);
    });
  });

  return input;
});

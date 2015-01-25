//Attaches to #input in index.html
define(['jquery', 'flight', 'withMaths'], function($, flight, withMaths){

  var input = flight.component(function(){

    this.attributes({
      theBox: '#theBox',
      buffer: '#buffer'
    });

    this.clear = function(e,d){//since no data was sent by the original call in input.js, 'd' is undefined in this function scope
      $(this.attr.theBox).val('');
      $(this.attr.buffer).val('');
    };

    this.equals = function(e,d){
      //get values of both the output field and buffer
      var currentOutput = $(this.attr.theBox).val();
      var currentBuffer = $(this.attr.buffer).val();

      //If the buffer already has a value and an operation it is therefore at capacity
      //watch this for more info, https://www.youtube.com/watch?v=SX-AnIVZJLc
      var bufferAtCapacity = currentBuffer.match(/\|/i) !== null;//returns boolean

      if(parseInt(currentOutput) > 0 && bufferAtCapacity === true){
        var splitBuffer = currentBuffer.split('|');
        //as you can see here, doMaths is a 'mixin' from withMaths.js
        //refer to js/mixins/withMaths.js for more explanation
        var result = this.doMaths(splitBuffer, currentOutput);

        $(this.attr.buffer).val('');
        $(this.attr.theBox).val(result);
      }
    };

    //adds numbers to output in a smart way
    this.addBumbers = function(e,d){//Bumbers!
      //get values of both the output field and buffer
      var currentOutput = $(this.attr.theBox).val();
      var currentBuffer = $(this.attr.buffer).val();

      //If the buffer already has a value and an operation it is therefore at capacity
      //watch this for more info, https://www.youtube.com/watch?v=SX-AnIVZJLc
      var bufferAtCapacity = currentBuffer.match(/\|/i) !== null;//returns boolean

      if(parseInt(currentOutput) > 0 && bufferAtCapacity === true){
        console.log('control flow reached');
        //slight tricky issue here, ill deal with it later, drinky time now
      }

      else $(this.attr.theBox).val(currentOutput+""+d.number);
      //console.log('number received!');
      //console.log(d);
    };

    //adds operators to the current stack
    this.addBoperation = function(e,d){//Bopers!
      //get values of both the output field and buffer
      var currentBuffer = $(this.attr.buffer).val();
      var currentOutput = $(this.attr.theBox).val();

      //If the buffer already has a value and an operation it is therefore at capacity
      //watch this for more info, https://www.youtube.com/watch?v=SX-AnIVZJLc
      var bufferAtCapacity = currentBuffer.match(/\|/i) !== null;//returns boolean

      //if currentOutput has a non-zero value and buffer is not full, add operation to buffer and clear theBox
      if(parseInt(currentOutput) > 0 && bufferAtCapacity === false){
        $(this.attr.buffer).val(currentOutput+'|'+d.op);
        $(this.attr.theBox).val('');
      }

      //if currentOutput has a non-zero value and buffer IS full, update Buffer with computed result (and new operator) and clear TheBox
      if(parseInt(currentOutput) > 0 && bufferAtCapacity === true){
        var splitBuffer = currentBuffer.split('|');//produces an array from buffer, e.g. '64|-' becomes [64,'-']

        //compute result based on operator provided
        //as you can see here, doMaths is a 'mixin' from withMaths.js
        //refer to js/mixins/withMaths.js for more explanation
        var result = this.doMaths(splitBuffer, currentOutput);

        $(this.attr.buffer).val(result+'|'+d.op);
        $(this.attr.theBox).val(result);
      }
    };

    this.after('initialize', function(){
      this.on(document, 'addNumbers', this.addBumbers);
      this.on(document, 'addOperation', this.addBoperation);
      this.on(document, 'clear', this.clear);
      this.on(document, 'doIt', this.equals);
    });
  }, withMaths);

  return input;
});

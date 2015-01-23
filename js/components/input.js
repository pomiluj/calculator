//Attaches to #input in index.html
define(['jquery', 'flight'], function($, flight){

  var input = flight.component(function(){

    this.attributes({
      allButtons: 'input',
      plus: '#plus',
      one: '#one',
      two: '#two',
      three: '#three',
      four: '#four',
      five: '#five',
      six: '#six',
      seven: '#seven',
      eight: '#eight',
      nine: '#nine',
      times: '#times',
      clear: '#clear',
      zero: '#zero',
      DoIt: '#DoIt',
      div: '#div',
      minus: '#minus'
    });

    this.addNumberToBox = function(e,d){//e = Event, d = Data
      var number = $(e.target).val();
      this.trigger(document, 'addNumbers', { number: number });//object member: variable
      //console.log(number);
    };

    this.anotherFunction = function(e,d){
      console.log(d);
    };

    this.operator = function(e,d){
      var symbol = $(e.target).val();
      this.trigger(document, 'addOperation', { op: symbol });
    }

    this.after('initialize', function(){
      this.on(this.select('one'), 'click', this.addNumberToBox);
      this.on(this.select('two'), 'click', this.addNumberToBox);
      this.on(this.select('three'), 'click', this.addNumberToBox);
      this.on(this.select('four'), 'click', this.addNumberToBox);
      this.on(this.select('five'), 'click', this.addNumberToBox);
      this.on(this.select('six'), 'click', this.addNumberToBox);
      this.on(this.select('seven'), 'click', this.addNumberToBox);
      this.on(this.select('eight'), 'click', this.addNumberToBox);
      this.on(this.select('nine'), 'click', this.addNumberToBox);
      this.on(this.select('zero'), 'click', this.addNumberToBox);
      this.on(this.select('plus'), 'click', this.operator);
      this.on(this.select('minus'), 'click', this.operator);
      this.on(this.select('times'), 'click', this.operator);
      this.on(this.select('div'), 'click', this.operator);
      // this.on(this.select('DoIt'), 'click', this.doIt);
      // this.on(this.select('clear'), 'click', this.clear);
    });
  });

  return input;
});

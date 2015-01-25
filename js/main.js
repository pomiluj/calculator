require.config({
  shim : {
    'flight': { deps: ['jquery'] }
  },
  paths: {
    //Libraries
    flight: 'lib/flight.min',
    jquery: 'lib/jquery.min',
    //Components
    input: 'components/input',
    output: 'components/output',
    //Mixins
    withMaths: 'mixins/withMaths'
    //Plugins
  }
});

//Primary Init
requirejs(['jquery', 'flight', 'input', 'output'],
function(   $,        flight,   input,   output){

  //Attach Flight Components to DOM
  input.attachTo('#input');
  output.attachTo('#output');
});

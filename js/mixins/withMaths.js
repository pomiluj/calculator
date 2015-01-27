/*
  a Mixin is a flight construct used when you want to share a function with mulitple components
  an example being: you could simply copy the doMaths function into the output.js component and that would solve your problem
  but what if you need doMaths in another component besides output.js? you could again simply copy it there too but then you now
  have redudant-ass code like a motherfucker. dont do that shit, k cuz?

  anyway, another thing about mixins in the naming convention. namely, they are usually prefixed with a 'with'.
  case in point being 'withMaths'. the reason behind this to differentiate them both in their use and namespace-wise

  bottomline though, you add them as the last parameter in the component delcaration (see output.js) and then within that component
  you can use the any of their exposed functions as though you did copy them in there manually.
*/
define(function(){

  function withMisc(){

    this.doMaths = function(splitBuffer, currentOutput){
      var result = 0; //you could also simply put "var result;" to declare a totally empty variable if you so choose

      //a case statement is really non-ideal for something like this in reality but it works from our purposes here
      switch(splitBuffer[1]){
        case '*':
          //notice theres no 'var' delcaration when referencing the result variable here
          //thats because we are referencing a variable that has already been instaniated and
          //all we want to do here is update the variable with new data
          //additionally, you can instantiate a variable without 'var' to place in the global scope
          //however like cannibalism, this is greatly frowned upon
          //i highly recommend you read up on javascript variable scoping, escpecially regarding the 'this' keyword
          result = parseInt(splitBuffer[0])*parseInt(currentOutput);
        break;

        case '-':
          result = parseInt(splitBuffer[0])-parseInt(currentOutput);
        break;

        case '+':
          result = parseInt(splitBuffer[0])+parseInt(currentOutput);
        break;

        case '/':
          result = parseInt(splitBuffer[0])/parseInt(currentOutput);
        break;
      }

      return result;
    };

  }

  return withMisc;
});